(() => {
  'use strict';

  const viewer = document.querySelector('[data-editorial-viewer]');
  const materialLab = document.querySelector('[data-material-lab]');
  if (!viewer || !materialLab) return;

  const track = viewer.querySelector('[data-editorial-track]');
  const slides = Array.from(viewer.querySelectorAll('[data-editorial-slide]'));
  const status = viewer.querySelector('[data-editorial-status]');
  const prev = viewer.querySelector('[data-editorial-prev]');
  const next = viewer.querySelector('[data-editorial-next]');
  const typeButtons = Array.from(viewer.querySelectorAll('[data-editorial-select]'));

  const typeData = {
    news: { name: '報道・新聞型', purpose: '重要度を素早く把握させる', reading: '拾い読み', object: '低白色度の薄い新聞用紙' },
    luxury: { name: '写真・ラグジュアリー型', purpose: '人物や場所の世界へ入らせる', reading: '連続して眺める', object: 'マット本文と局所光沢を使い分けた写真誌' },
    literary: { name: '文芸・思想誌型', purpose: '文章を読み、考える時間をつくる', reading: '腰を据えて読む', object: '自然な生成りの非塗工紙を使った新刊文芸誌' },
    indie: { name: 'カルチャー・インディー型', purpose: '媒体や書き手の態度を示す', reading: '予測できない展開を楽しむ', object: '少部数で制作されたコピーと特色印刷のZINE' },
    data: { name: '解説・データ型', purpose: '仕組み、因果、数字を理解させる', reading: '順番に理解する', object: '平滑紙と半透明の別紙を組み合わせた調査冊子' }
  };

  const axisWords = {
    surface: ['平滑', '微細な粒子', '繊維質', 'やや粗い', '強い凹凸'],
    reflection: ['光を吸う', '低反射', '半光沢', '光沢', '鏡面・金属'],
    precision: ['均一', 'わずかな揺れ', 'にじみ・網点', '版ずれ・潰れ', '強い手作業のむら'],
    time: ['未使用', '新刊', '日常使用', '保管・日焼け', '劣化・補修'],
    weight: ['薄く透ける', '軽い', '標準', '厚い', '硬く重い']
  };

  const presetAxes = {
    news: [4, 1, 3, 2, 1],
    luxury: [1, 3, 1, 2, 4],
    literary: [3, 1, 2, 2, 3],
    indie: [4, 1, 4, 3, 2],
    data: [1, 2, 1, 2, 3]
  };

  const inputs = Array.from(materialLab.querySelectorAll('[data-material-axis]'));
  const result = materialLab.querySelector('[data-material-result]');
  const resultTitle = materialLab.querySelector('[data-material-title]');
  const resultSpec = materialLab.querySelector('[data-material-spec]');
  const copyButton = materialLab.querySelector('[data-material-copy]');
  const resetButton = materialLab.querySelector('[data-material-reset]');
  const traceInputs = Array.from(materialLab.querySelectorAll('[data-material-trace]'));
  let selectedType = 'news';

  const nearestSlideIndex = () => {
    if (!track || slides.length === 0) return 0;
    const left = track.scrollLeft;
    let bestIndex = 0;
    let bestDistance = Infinity;
    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft - left - track.offsetLeft);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    });
    return bestIndex;
  };

  const updateStatus = () => {
    const index = nearestSlideIndex();
    if (status) status.textContent = `${String(index + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}　${slides[index]?.dataset.editorialName || ''}`;
    if (prev) prev.disabled = index === 0;
    if (next) next.disabled = index === slides.length - 1;
  };

  const move = (direction) => {
    const targetIndex = Math.max(0, Math.min(slides.length - 1, nearestSlideIndex() + direction));
    slides[targetIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  prev?.addEventListener('click', () => move(-1));
  next?.addEventListener('click', () => move(1));
  track?.addEventListener('scroll', () => window.requestAnimationFrame(updateStatus), { passive: true });
  viewer.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'ArrowRight') move(1);
  });

  const getAxisValues = () => inputs.map((input) => Number(input.value));
  const selectedTraces = () => traceInputs.filter((input) => input.checked).map((input) => input.value);

  const syncOutputs = () => {
    inputs.forEach((input) => {
      const output = materialLab.querySelector(`[data-material-output="${input.dataset.materialAxis}"]`);
      if (output) output.value = input.value;
    });
  };

  const updateMaterialPreview = () => {
    syncOutputs();
    const [surface, reflection, precision, time, weight] = getAxisValues();
    const type = typeData[selectedType];
    const traces = selectedTraces();
    const spec = [
      `編集型：${type.name}`,
      `読ませ方：${type.reading}。${type.purpose}。`,
      `想定する物体：${type.object}。`,
      `表面：${surface} / 5　${axisWords.surface[surface - 1]}`,
      `反射：${reflection} / 5　${axisWords.reflection[reflection - 1]}`,
      `精度：${precision} / 5　${axisWords.precision[precision - 1]}`,
      `時間：${time} / 5　${axisWords.time[time - 1]}`,
      `重量：${weight} / 5　${axisWords.weight[weight - 1]}`,
      `制作痕跡：${traces.length ? traces.join('、') : '使用しない'}`,
      '画面への翻訳：質感を全面ノイズにせず、色温度、重なり、局所的な光、ページ送りの速度へ分けて反映する。',
      '禁止事項：本文の可読性を下げる粒子、根拠のない汚れ、すべての要素への同じ加工。'
    ].join('\n');

    if (resultTitle) resultTitle.textContent = `${type.name} × 素材設計`;
    if (resultSpec) resultSpec.textContent = spec;
    if (result) {
      result.style.setProperty('--material-roughness', String(0.03 + surface * 0.045));
      result.style.setProperty('--material-grain-size', `${13 - surface}px`);
      result.style.setProperty('--material-sheen', String(0.04 + reflection * 0.045));
      const lightness = 94 - (weight - 1) * 1.4 - (time - 1) * 1.2;
      const saturation = 24 - (time - 1) * 2;
      result.style.setProperty('--material-background', `hsl(40 ${saturation}% ${lightness}%)`);
    }
  };

  const chooseType = (button) => {
    selectedType = button.dataset.editorialSelect;
    typeButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    const preset = presetAxes[selectedType];
    inputs.forEach((input, index) => { input.value = String(preset[index]); });
    updateMaterialPreview();
    materialLab.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  typeButtons.forEach((button) => button.addEventListener('click', () => chooseType(button)));
  inputs.forEach((input) => input.addEventListener('input', updateMaterialPreview));
  traceInputs.forEach((input) => input.addEventListener('change', () => {
    const checked = selectedTraces();
    if (checked.length > 2) input.checked = false;
    updateMaterialPreview();
  }));

  copyButton?.addEventListener('click', async () => {
    const text = resultSpec?.textContent || '';
    try {
      await navigator.clipboard.writeText(text);
      const original = copyButton.textContent;
      copyButton.textContent = 'コピーしました';
      window.setTimeout(() => { copyButton.textContent = original; }, 1400);
    } catch (error) {
      console.warn('Clipboard write failed', error);
      window.prompt('以下をコピーしてください', text);
    }
  });

  resetButton?.addEventListener('click', () => {
    selectedType = 'news';
    typeButtons.forEach((item) => item.setAttribute('aria-pressed', String(item.dataset.editorialSelect === 'news')));
    inputs.forEach((input, index) => { input.value = String(presetAxes.news[index]); });
    traceInputs.forEach((input) => { input.checked = input.value === '細かな網点' || input.value === '中央の折り目'; });
    updateMaterialPreview();
  });

  updateStatus();
  updateMaterialPreview();
})();
