import fs from 'node:fs/promises';

await fs.rm('site/next', { recursive: true, force: true });
