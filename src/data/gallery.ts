/**
 * Galerie referencí. Přidání fotky = import + nový objekt v poli.
 * `category` musí odpovídat `galleryFilter` některé služby
 * (malovani | natery | renovace | podlahy), ať fungují prokliky
 * ze stránek služeb.
 */
import type { ImageMetadata } from 'astro';

import artsome from '../assets/photo/ARTSOME.jpeg';
import ref1 from '../assets/photo/ref-1.jpeg';
import ref2 from '../assets/photo/ref-2.jpeg';
import ref4 from '../assets/photo/ref-4.jpeg';
import ref5 from '../assets/photo/ref-5.jpeg';
import pred from '../assets/photo/pred.jpeg';
import po from '../assets/photo/po.jpeg';

export interface GalleryItem {
  image: ImageMetadata;
  alt: string;
  caption: string;
  category: 'malovani' | 'natery' | 'renovace' | 'podlahy';
  /** Velikost buňky v bento gridu */
  size?: 'wide' | 'tall';
}

export const galleryCategories = [
  { id: 'all', label: 'Vše' },
  { id: 'malovani', label: 'Malování' },
  { id: 'natery', label: 'Nátěry' },
  { id: 'renovace', label: 'Renovace' },
  { id: 'podlahy', label: 'Podlahy & stavba' },
] as const;

/**
 * Fotky z realizací nátěrů (stažené z původního Wixu, převedené na WebP).
 * Nová fotka = vlož soubor `natery-NN.webp` do složky `assets/photo/natery/`
 * a doplň sem řádek s popiskem (bez popisku se použije obecný text).
 * Soubory se importují hromadně přes import.meta.glob, ať se ručně neudržuje
 * 30+ import řádků.
 */
const nateryModules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photo/natery/*.webp',
  { eager: true },
);

const nateryCaptions: Record<string, { alt: string; caption: string; size?: 'wide' | 'tall' }> = {
  'natery-01': { alt: 'Nátěr ploché střechy garáže červenou barvou', caption: 'Nátěr ploché střechy' },
  'natery-02': { alt: 'Plechová střecha s odlupujícím se nátěrem před renovací', caption: 'Střecha před nátěrem' },
  'natery-03': { alt: 'Nátěr ploché střechy s maskováním spár', caption: 'Nátěr ploché střechy — spáry', size: 'wide' },
  'natery-04': { alt: 'Základní nátěr plechové střechy s páskovanými spoji', caption: 'Základní nátěr střechy' },
  'natery-05': { alt: 'Nátěr ploché střechy válečkem', caption: 'Nátěr střechy válečkem' },
  'natery-06': { alt: 'Hotový lesklý červený nátěr plechové střechy', caption: 'Hotová plechová střecha', size: 'wide' },
  'natery-07': { alt: 'Dřevěné schodiště obroušené do surového dřeva před nátěrem', caption: 'Schodiště — příprava', size: 'tall' },
  'natery-08': { alt: 'Nátěr vnitřního dřevěného schodiště, první vrstva', caption: 'Nátěr schodiště' },
  'natery-09': { alt: 'Bílý nátěr vnitřního schodiště', caption: 'Bílý nátěr schodiště' },
  'natery-10': { alt: 'Nátěr vnitřního schodiště u okna', caption: 'Nátěr schodiště u okna' },
  'natery-11': { alt: 'Nátěr žebrového litinového topení na bílo', caption: 'Nátěr žebrového topení' },
  'natery-12': { alt: 'Nástřik starého poškozeného radiátoru na bílo', caption: 'Nástřik starého topení' },
  'natery-13': { alt: 'Rozpracovaný nátěr plechové střechy s barvou a válečkem', caption: 'Nátěr střechy — rozpracováno' },
  'natery-14': { alt: 'Vybledlá plechová střecha před novým nátěrem', caption: 'Střecha před nátěrem' },
  'natery-15': { alt: 'Hotový hnědý nátěr plechové střechy', caption: 'Hnědý nátěr střechy' },
  'natery-16': { alt: 'Pohled shora na vybledlou střechu před nátěrem', caption: 'Střecha před nátěrem' },
  'natery-17': { alt: 'Hotová hnědá plechová střecha rodinného domu', caption: 'Nátěr plechové střechy', size: 'wide' },
  'natery-18': { alt: 'Detail hotového nátěru sedlové plechové střechy', caption: 'Detail nátěru střechy' },
  'natery-19': { alt: 'Nátěr sedlové plechové střechy do hněda', caption: 'Nátěr sedlové střechy' },
  'natery-20': { alt: 'Hotová plechová střecha v krajině', caption: 'Hotová plechová střecha' },
  'natery-21': { alt: 'Renovace dřevěné zárubně, nábytek zakrytý fólií', caption: 'Renovace zárubně — příprava', size: 'tall' },
  'natery-22': { alt: 'Broušení a nátěr dřevěné zárubně dveří', caption: 'Broušení a nátěr zárubně' },
  'natery-23': { alt: 'Hotový nátěr dřevěné zárubně v tmavém odstínu', caption: 'Hotový nátěr zárubně' },
  'natery-24': { alt: 'Zárubně a dveře v interiéru po nátěru', caption: 'Zárubně po nátěru' },
  'natery-25': { alt: 'Nátěr zárubně dveří štětcem', caption: 'Nátěr zárubně štětcem' },
  'natery-26': { alt: 'Nátěr venkovního okenního rámu na fasádě domu', caption: 'Nátěr venkovního okna' },
  'natery-27': { alt: 'Nátěr venkovního parapetu a okenního rámu', caption: 'Nátěr venkovního parapetu' },
  'natery-28': { alt: 'Nátěr kovového zábradlí venkovního schodiště', caption: 'Nátěr venkovního zábradlí' },
  'natery-29': { alt: 'Renovace venkovního dřevěného schodiště tmavou lazurou', caption: 'Venkovní dřevěné schodiště', size: 'wide' },
  'natery-30': { alt: 'Nátěr dřeva lazurou — detail struktury', caption: 'Nátěr dřeva lazurou' },
  'natery-31': { alt: 'Detail dřevěného prvku po nátěru lazurou', caption: 'Detail nátěru dřeva' },
};

const nateryGallery: GalleryItem[] = Object.entries(nateryModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => {
    const name = path.split('/').pop()!.replace('.webp', '');
    const meta = nateryCaptions[name] ?? {
      alt: 'Reference nátěrů ARTSOME',
      caption: 'Nátěry',
    };
    return {
      image: mod.default,
      alt: meta.alt,
      caption: meta.caption,
      category: 'natery' as const,
      size: meta.size,
    };
  });

export const gallery: GalleryItem[] = [
  { image: artsome, alt: 'Dřevěná chata po renovaci nátěru, v pozadí hory', caption: 'Renovace chaty — Beskydy', category: 'renovace', size: 'wide' },
  { image: ref4, alt: 'Detail renovované chaty — vchod, okno a zábradlí po novém nátěru', caption: 'Renovace chaty — detail vchodu', category: 'renovace' },
  { image: ref1, alt: 'Vymalovaný obývák s červenou akcentní stěnou', caption: 'Výmalba — akcentní stěna', category: 'malovani' },
  { image: ref2, alt: 'Fototapeta s motivem knihovny a čerstvě vymalovaná žlutá stěna', caption: 'Fototapeta a výmalba', category: 'malovani', size: 'wide' },
  { image: ref5, alt: 'Vymalovaný pokoj s modrou stěnou a renovovanými bílými dveřmi', caption: 'Výmalba pokoje — modrá stěna', category: 'malovani' },
  { image: po, alt: 'Sklep přestavěný na obyvatelnou kancelář', caption: 'Rekonstrukce sklepa — po', category: 'podlahy', size: 'tall' },
  { image: pred, alt: 'Původní stav sklepa před rekonstrukcí', caption: 'Rekonstrukce sklepa — před', category: 'podlahy', size: 'wide' },
  ...nateryGallery,
];

/** Případová studie „Ze sklepa kancelář“ — před/po dvojice */
export const caseStudy = {
  title: 'Ze sklepa obyvatelná kancelář',
  kicker: 'Proměna před / po',
  text:
    'Kompletní zakázka od začátku do konce — vylití podlahy nivelací, snížený ' +
    'sádrokartonový strop, nové rozvody, výmalba a pokládka podlahy.',
  pairs: [
    {
      before: { image: pred, alt: 'Sklep před rekonstrukcí' },
      after: { image: po, alt: 'Sklep po rekonstrukci — hotová kancelář' },
    },
  ],
};
