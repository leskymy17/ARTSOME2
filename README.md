# ARTSOME — web

Firemní web ARTSOME s.r.o. (malířství, nátěry, renovace — Moravskoslezský kraj).
Postaveno v [Astro](https://astro.build), staticky generováno, bez backendu.

## Příkazy

```bash
npm install      # instalace závislostí
npm run dev      # dev server na http://localhost:4321
npm run build    # produkční build do dist/
npm run preview  # náhled produkčního buildu
```

## Kde co upravit

| Co potřebuji změnit | Soubor |
|---|---|
| Telefon, e-mail, adresa, hodnocení, města | `src/data/site.ts` |
| Texty služeb, FAQ ke službám | `src/data/services.ts` |
| Recenze | `src/data/reviews.ts` |
| Fotky v galerii referencí | `src/data/gallery.ts` + fotka do `src/assets/photo/` |
| Obecné FAQ (homepage) | `src/data/faq.ts` |
| Kroky „Jak to probíhá“ | `src/data/process.ts` |
| Barvy, fonty, spacing, radiusy | `src/styles/tokens.css` |

**Nová služba** = nový objekt v `src/data/services.ts` — stránka `/sluzby/<slug>/`,
karta na homepage, položka v menu i patičce vzniknou automaticky.

**Nová fotka v galerii** = soubor do `src/assets/photo/` + záznam v
`src/data/gallery.ts` (kategorie musí odpovídat `galleryFilter` služby).
Optimalizaci (WebP, responzivní velikosti) dělá build automaticky.

## ⚠️ Před spuštěním doplnit

1. **Web3Forms klíč** do `src/data/site.ts` (`web3formsKey`) — bez něj
   poptávkový formulář neodesílá. Zdarma na https://web3forms.com
   (zadat e-mail artsome@seznam.cz, klíč přijde obratem).
2. Zkontrolovat `site` doménu v `astro.config.mjs` (teď `https://www.artsome.cz`).

## Struktura

```
src/
├── data/         ← veškerý editovatelný obsah (viz tabulka výše)
├── styles/       ← tokens.css (design systém) + global.css (reset, utility)
├── components/   ← znovupoužitelné bloky (BEM třídy, scoped styly)
├── layouts/      ← BaseLayout (head, SEO, schema.org, header/footer)
├── pages/        ← stránky; sluzby/[slug].astro generuje 4 stránky služeb
└── assets/       ← fotky a logo (optimalizuje astro:assets)
```
