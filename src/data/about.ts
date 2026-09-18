/**
 * Obsah stránky „O nás“ — příběh firmy v blocích střídajících text a fotku.
 * Nový blok = nový objekt v poli, zobrazí se automaticky.
 */
import type { ImageMetadata } from 'astro';

import imgOrigin from '../assets/photo/ARTSOME.jpeg';
import imgWork from '../assets/photo/po.jpeg';
import imgCraft from '../assets/photo/ref-3.jpeg';

export interface AboutStory {
  kicker: string;
  title: string;
  text: string[];
  image: ImageMetadata;
  imageAlt: string;
  /** Na desktopu prohodí strany — fotka vpravo, text vlevo */
  reverse?: boolean;
}

export const aboutStories: AboutStory[] = [
  {
    kicker: 'Jak jsme začali',
    title: 'Řemeslo, které umíme od základu',
    text: [
      'ARTSOME založila parta zkušených malířů a natěračů z Havířova, kteří měli ' +
        'za sebou desítky realizací ještě předtím, než vznikla firma se jménem. ' +
        'Věděli jsme, co zákazníkům na řemeslnících nejvíc vadí — nedodržené ' +
        'termíny, nepořádek a nejasné ceny. Postavili jsme firmu přesně na opaku.',
      'Dnes pod hlavičkou ARTSOME s.r.o. malujeme, natíráme a renovujeme po ' +
        'celém Moravskoslezském kraji — od jednoho pokoje po celé školy, haly ' +
        'a hotely.',
    ],
    image: imgOrigin,
    imageAlt: 'Dřevěná chata po kompletní renovaci nátěru — jedna z realizací ARTSOME',
  },
  {
    kicker: 'Jak pracujeme',
    title: 'Přijedeme, kdy slíbíme, a uklidíme po sobě',
    text: [
      'Každou zakázku řeší jedna parta od začátku do konce — bez předávání mezi ' +
        'subdodavateli a bez koordinace tří různých firem. Domluvíme termín, ' +
        'nábytek i podlahy pečlivě zakryjeme a po práci prostor uklidíme.',
      'Proto se k nám zákazníci vracejí a doporučují nás dál — hodnocení 5,0 ' +
        'na Firmy.cz a 32 recenzí není náhoda.',
    ],
    image: imgWork,
    imageAlt: 'Sklep přestavěný na obyvatelnou kancelář — ukázka kompletní realizace',
    reverse: true,
  },
  {
    kicker: 'Čemu rozumíme',
    title: 'Interiér i exteriér, dřevo, kov i podlahy',
    text: [
      'Vymalujeme byt, natřeme plechovou střechu i dřevěná okna, obnovíme ' +
        'chatu po letech nebo položíme novou podlahu. Nejsme firma na jednu věc ' +
        '— díky tomu zvládneme i zakázky, kde je potřeba zkombinovat víc řemesel.',
      'Materiály i postupy volíme podle toho, co realizaci nejlíp poslouží — ' +
        'ne podle toho, co zrovna máme na skladě.',
    ],
    image: imgCraft,
    imageAlt: 'Nátěr plechové střechy rodinného domu',
  },
];
