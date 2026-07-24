// Jednorázový převod stažených referencí Nátěry na WebP + kontaktní list.
// Spouštět z kořene projektu: node scripts/convert-natery.mjs
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';

const SRC = process.argv[2];         // wixorig dir
const OUT = process.argv[3];         // cílový dir pro webp
const SHEET = process.argv[4];       // cesta ke kontaktnímu listu

await mkdir(OUT, { recursive: true });

const files = (await readdir(SRC))
  .filter((f) => /\.(jpe?g|png)$/i.test(f))
  .sort();

const thumbs = [];
let idx = 0;

for (const f of files) {
  idx++;
  const base = `natery-${String(idx).padStart(2, '0')}`;
  const inPath = path.join(SRC, f);

  // WebP: EXIF rotace, max 1600px delší hrana, kvalita 80
  await sharp(inPath)
    .rotate()
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(OUT, `${base}.webp`));

  // náhled do kontaktního listu (se štítkem indexu vypálíme zvlášť níže)
  const t = await sharp(inPath)
    .rotate()
    .resize({ width: 300, height: 300, fit: 'cover' })
    .toBuffer();
  thumbs.push({ idx, buf: t });
}

// Kontaktní list 5 sloupců
const COLS = 5;
const CELL = 300;
const rows = Math.ceil(thumbs.length / COLS);
const composites = thumbs.map((t, i) => ({
  input: t.buf,
  left: (i % COLS) * CELL,
  top: Math.floor(i / COLS) * CELL,
}));

await sharp({
  create: { width: COLS * CELL, height: rows * CELL, channels: 3, background: '#222' },
})
  .composite(composites)
  .jpeg({ quality: 70 })
  .toFile(SHEET);

console.log(`Hotovo: ${idx} souborů → ${OUT}`);
