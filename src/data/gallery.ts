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
import ref3 from '../assets/photo/ref-3.jpeg';
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

export const gallery: GalleryItem[] = [
  { image: artsome, alt: 'Dřevěná chata po renovaci nátěru, v pozadí hory', caption: 'Renovace chaty — Beskydy', category: 'renovace', size: 'wide' },
  { image: ref3, alt: 'Nátěr plechové střechy — rozpracovaná zakázka, půlka střechy s novým hnědým nátěrem', caption: 'Nátěr plechové střechy', category: 'natery', size: 'tall' },
  { image: ref4, alt: 'Detail renovované chaty — vchod, okno a zábradlí po novém nátěru', caption: 'Renovace chaty — detail vchodu', category: 'renovace' },
  { image: ref1, alt: 'Vymalovaný obývák s červenou akcentní stěnou', caption: 'Výmalba — akcentní stěna', category: 'malovani' },
  { image: ref2, alt: 'Fototapeta s motivem knihovny a čerstvě vymalovaná žlutá stěna', caption: 'Fototapeta a výmalba', category: 'malovani', size: 'wide' },
  { image: ref5, alt: 'Vymalovaný pokoj s modrou stěnou a renovovanými bílými dveřmi', caption: 'Výmalba pokoje — modrá stěna', category: 'malovani' },
  { image: po, alt: 'Sklep přestavěný na obyvatelnou kancelář', caption: 'Rekonstrukce sklepa — po', category: 'podlahy', size: 'tall' },
  { image: pred, alt: 'Původní stav sklepa před rekonstrukcí', caption: 'Rekonstrukce sklepa — před', category: 'podlahy', size: 'wide' },
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
