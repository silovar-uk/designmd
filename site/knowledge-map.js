(() => {
  if (document.querySelector('#knowledge-map')) return;

  const fallback = {
    topics: [
      { id: 'human-judgment', label: '人の判断', place: '北の丘', description: '誰が何を根拠に選び、最後の判断を引き受けるか。' },
      { id: 'information-grouping', label: '情報のまとまり', place: '中央広場', description: '情報を減らす前に、仲間、順番、声量を設計する。' },
      { id: 'writing', label: '文章', place: 'ことば通り', description: '意味段落、論証、本人の言葉を扱う。' },
      { id: 'slides', label: 'スライド', place: '見せ方街区', description: '一枚で読み手に何を成立させるかを決める。' },
      { id: 'apps', label: 'Web・アプリ', place: '操作市場', description: '操作、状態、入力、端末差を設計する。' },
      { id: 'ai-collaboration', label: 'AIとの協働', place: '協働港', description: '出力、レビュー、検証の往復を設計する。' },
      { id: 'recovery', label: '運用・回復', place: '修理と復旧の谷', description: '失敗後に何が残り、どこから戻れるか。' }
    ],
    content: {},
    routes: [
      { id: 'name-the-good', title: '「なんか良い」を言葉にする散歩', duration: '15分', topics: ['information-grouping', 'slides', 'writing'] },
      { id: 'longform-to-slides', title: '長文を資料へ変える散歩', duration: '20分', topics: ['writing', 'slides'] },
      { id: 'reviewable-ai', title: 'AI出力を検証可能にする散歩', duration: '20分', topics: ['ai-collaboration', 'human-judgment'] }
    ],
    packs: [
      { id: 'writing', title: '文章制作', primary: [] },
      { id: 'slides', title: 'スライド制作', primary: [] },
      { id: 'apps', title: 'Web・アプリ', primary: [] },
      { id: 'ai-collaboration', title: 'AIとの協働', primary: [] },
      { id: 'review', title: 'レビュー', primary: [] },
      { id: 'recovery', title: '運用・回復', primary: [] }
    ]
  };

  const hero = document.querySelector('#top');
  const pageShell = document.querySelector('.page-shell');
  if (!hero || !pageShell) return;

  const section = document.createElement('section');
  section.id = 'knowledge-map';
  section.setAttribute('aria-labelledby', 'knowledge-map-title');
  section.innerHTML = `
    <div class="knowledge-map__inner">
      <div class="knowledge-map__heading">
        <div>
          <p class="eyebrow">Knowledge map</p>
          <h2 id="knowledge-map-title">知識を、一本道にしない。</h2>
        </div>
        <p>実用の近道は残しながら、気になった地区から読み物、事例、別のテーマへ寄り道できます。AIには同じ内容を、IDと状態のある参照面として渡します。</p>
      </div>

      <div class="knowledge-map__modes" role="group" aria-label="地図の見方">
        <button type="button" data-root-map-mode="walk" aria-pressed="true">ぶらぶら歩く</button>
        <button type="button" data-root-map-mode="work" aria-pressed="false">仕事から探す</button>
        <button type="button" data-root-map-mode="ai" aria-pressed="false">AIに渡す</button>
      </div>

      <div class="knowledge-map__layout">
        <div class="knowledge-map__districts" data-root-map-districts aria-label="知識の地区"></div>
        <aside class="knowledge-map__detail" aria-live="polite">
          <span class="knowledge-map__detail-label" data-root-map-label>現在地</span>
          <h3 data-root-map-title>人の判断</h3>
          <p data-root-map-description>誰が何を根拠に選び、最後の判断を引き受けるか。</p>
          <ul class="knowledge-map__detail-list" data-root-map-links></ul>
          <div class="knowledge-map__detail-footer">
            <a href="./knowledge-map.html">地図を大きく開く →</a>
            <a href="./ai-reference.html">AI参照面 →</a>
          </div>
        </aside>
      </div>

      <div class="knowledge-map__detour">
        <button class="knowledge-map__detour-button" type="button" data-root-map-detour>今日の寄り道</button>
        <p><strong data-root-map-route-title>「なんか良い」を言葉にする散歩</strong><small data-root-map-route-meta>15分</small></p>
        <a data-root-map-route-link href="./knowledge-map.html?route=name-the-good">歩いてみる →</a>
      </div>
    </div>
  `;

  hero.insertAdjacentElement('afterend', section);

  const headerNav = document.querySelector('.header-nav');
  if (headerNav && !headerNav.querySelector('[data-knowledge-map-link]')) {
    const mapLink = document.createElement('a');
    mapLink.href = '#knowledge-map';
    mapLink.textContent = '地図';
    mapLink.dataset.knowledgeMapLink = '';
    headerNav.insertBefore(mapLink, headerNav.firstChild);

    const aiLink = document.createElement('a');
    aiLink.href = './ai-reference.html';
    aiLink.textContent = 'AI参照';
    aiLink.dataset.knowledgeMapLink = '';
    const githubLink = headerNav.querySelector('.header-nav__github');
    headerNav.insertBefore(aiLink, githubLink ?? null);
  }

  const sideList = document.querySelector('.side-nav ol');
  if (sideList && !sideList.querySelector('a[href="#knowledge-map"]')) {
    const item = document.createElement('li');
    item.innerHTML = '<a href="#knowledge-map">知識地図</a>';
    sideList.insertBefore(item, sideList.firstChild);
  }

  const elements = {
    districts: section.querySelector('[data-root-map-districts]'),
    label: section.querySelector('[data-root-map-label]'),
    title: section.querySelector('[data-root-map-title]'),
    description: section.querySelector('[data-root-map-description]'),
    links: section.querySelector('[data-root-map-links]'),
    routeTitle: section.querySelector('[data-root-map-route-title]'),
    routeMeta: section.querySelector('[data-root-map-route-meta]'),
    routeLink: section.querySelector('[data-root-map-route-link]')
  };

  let data = fallback;
  let mode = 'walk';
  let topicId = 'human-judgment';
  let routeIndex = 0;

  try {
    const saved = JSON.parse(localStorage.getItem('designmd-knowledge-map-v1') || '{}');
    if (typeof saved.mode === 'string') mode = saved.mode;
    if (typeof saved.topicId === 'string') topicId = saved.topicId;
  } catch {
    // 保存できない環境でも地図は使える。
  }

  const contentLabels = {
    identity: ['designmdの定義', './#top'],
    'staged-production': ['五段階制作', './#workflow'],
    'content-production': ['文章・資料を組み立てる', './#writing-guide'],
    'system-interaction': ['Web・アプリの操作設計', './#media'],
    'operational-resilience': ['運用・回復を設計する', './#review'],
    'evidence-data-ai': ['根拠・データ・AI', './#principles'],
    'review-tool': ['レビューする', './#review'],
    'decision-log-tool': ['Decision Log', './next/tools/decision-log/'],
    'case-keygrid': ['KeyGridのケース', './next/cases/keygrid/'],
    'case-mydailylog': ['MyDailyLogのケース', './next/cases/mydailylog/'],
    'case-contents-library': ['作品体験ログのケース', './next/cases/contents-library/'],
    'case-rhw-slide-blueprint': ['RHW記事を10枚へ変える', './next/cases/rhw-slide-blueprint/']
  };

  const topicUrl = (id) => `./knowledge-map.html?topic=${id}`;
  const routeUrl = (id) => `./knowledge-map.html?route=${id}`;
  const packUrl = (id) => `./context-packs/${id}.md`;

  const contentEntriesFor = (topic) => Object.entries(data.content ?? {})
    .filter(([, item]) => item.topics?.includes(topic.id))
    .map(([id, item]) => ({ id, ...item }));

  const workLinks = (topic) => {
    const entries = contentEntriesFor(topic)
      .sort((a, b) => {
        const homeScore = (item) => item.home === 'workshop' ? 0 : item.home === 'gallery' ? 1 : 2;
        return homeScore(a) - homeScore(b);
      })
      .slice(0, 3);
    if (!entries.length) {
      return [{ label: `${topic.label}の地区ページ`, url: topicUrl(topic.id), note: '実践ガイドと事例をまとめて見る' }];
    }
    return entries.map((item) => ({
      label: contentLabels[item.id]?.[0] ?? item.id,
      url: contentLabels[item.id]?.[1] ?? `./knowledge-map.html?content=${item.id}`,
      note: item.use_when?.[0] ?? item.summary
    }));
  };

  const walkLinks = (topic) => {
    const landmarks = (topic.landmarks ?? []).slice(0, 2).map((item) => ({
      label: item.label,
      url: item.url,
      note: item.kind
    }));
    const routes = (data.routes ?? [])
      .filter((route) => route.topics?.includes(topic.id))
      .slice(0, 2)
      .map((route) => ({
        label: route.title,
        url: routeUrl(route.id),
        note: `${route.duration}の散歩道`
      }));
    return [...landmarks, ...routes].slice(0, 3);
  };

  const aiLinks = (topic) => {
    const contentIds = new Set(contentEntriesFor(topic).map((item) => item.id));
    const packs = (data.packs ?? []).filter((pack) => pack.primary?.some((id) => contentIds.has(id))).slice(0, 2);
    const links = packs.map((pack) => ({
      label: `${pack.title} Pack`,
      url: packUrl(pack.id),
      note: '用途別にまとめたMarkdown'
    }));
    links.push({
      label: `${topic.label}の機械可読JSON`,
      url: `./ai-manifest.json#${topic.id}`,
      note: 'ID、状態、使う場面を確認'
    });
    return links;
  };

  const renderDistricts = () => {
    elements.districts.innerHTML = '';
    for (const topic of data.topics ?? []) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'knowledge-map__district';
      button.dataset.topicId = topic.id;
      button.setAttribute('aria-pressed', String(topic.id === topicId));
      button.innerHTML = `<span>${topic.place}</span><strong>${topic.label}</strong>`;
      button.addEventListener('click', () => {
        topicId = topic.id;
        render();
      });
      elements.districts.appendChild(button);
    }
  };

  const render = () => {
    const topic = (data.topics ?? []).find((item) => item.id === topicId) ?? data.topics?.[0] ?? fallback.topics[0];
    topicId = topic.id;

    section.querySelectorAll('[data-root-map-mode]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.rootMapMode === mode));
    });
    section.querySelectorAll('[data-topic-id]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.topicId === topicId));
    });

    elements.label.textContent = mode === 'walk' ? topic.place : mode === 'work' ? '仕事の近道' : 'AIの住所';
    elements.title.textContent = topic.label;
    elements.description.textContent = mode === 'walk'
      ? topic.description
      : mode === 'work'
        ? topic.question ?? topic.description
        : '正典、状態、使う場面を持つ参照セットとして確認します。';

    const links = mode === 'walk' ? walkLinks(topic) : mode === 'work' ? workLinks(topic) : aiLinks(topic);
    elements.links.innerHTML = links.map((link) => `<li><a href="${link.url}"><strong>${link.label}</strong><small>${link.note ?? ''}</small></a></li>`).join('');

    try {
      localStorage.setItem('designmd-knowledge-map-v1', JSON.stringify({ mode, topicId }));
    } catch {
      // 保存に失敗しても操作は続ける。
    }
  };

  section.querySelectorAll('[data-root-map-mode]').forEach((button) => {
    button.addEventListener('click', () => {
      mode = button.dataset.rootMapMode;
      render();
    });
  });

  section.querySelector('[data-root-map-detour]')?.addEventListener('click', () => {
    const routes = data.routes ?? fallback.routes;
    routeIndex = (routeIndex + 1) % routes.length;
    const route = routes[routeIndex];
    elements.routeTitle.textContent = route.title;
    elements.routeMeta.textContent = `${route.duration}${route.mood ? `／${route.mood}` : ''}`;
    elements.routeLink.href = routeUrl(route.id);
  });

  const load = async () => {
    try {
      const response = await fetch('./knowledge-map.json', { cache: 'no-store' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      data = await response.json();
      if (!data.topics?.some((topic) => topic.id === topicId)) topicId = data.topics?.[0]?.id ?? topicId;
    } catch {
      data = fallback;
    }
    renderDistricts();
    const route = data.routes?.[0] ?? fallback.routes[0];
    elements.routeTitle.textContent = route.title;
    elements.routeMeta.textContent = `${route.duration}${route.mood ? `／${route.mood}` : ''}`;
    elements.routeLink.href = routeUrl(route.id);
    render();
  };

  load();
})();
