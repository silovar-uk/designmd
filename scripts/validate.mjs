import fs from 'node:fs/promises';
import path from 'node:path';
import { walkFiles } from './lib.mjs';

const root = path.join(process.cwd(), 'site/next');
const htmlFiles = await walkFiles(root, '.html');
const errors = [];
const paths = new Set(htmlFiles.map((file) => path.relative(root, file).replaceAll(path.sep, '/')));

for (const file of htmlFiles) {
  const source = await fs.readFile(file, 'utf8');
  if (!source.includes('<main id="main">')) errors.push(`${file}: main landmark missing`);
  if (!source.includes('class="skip-link"')) errors.push(`${file}: skip link missing`);
  if (!/<h1[ >]/.test(source)) errors.push(`${file}: h1 missing`);
  const ids = [...source.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  for (const id of new Set(duplicates)) errors.push(`${file}: duplicate id ${id}`);
  for (const match of source.matchAll(/href="\/designmd\/next\/([^"#?]*)"/g)) {
    const relative = match[1];
    if (!relative || relative.startsWith('assets/') || relative.startsWith('data/')) continue;
    const expected = relative.endsWith('/') ? `${relative}index.html` : relative;
    if (!paths.has(expected) && !expected.endsWith('.json')) errors.push(`${file}: missing internal target ${expected}`);
  }
}

if (errors.length) {
  errors.forEach((error) => console.error(`[validate:error] ${error}`));
  process.exit(1);
}
console.log(`Validated ${htmlFiles.length} HTML files`);
