/**
 * Služby — jediný zdroj pravdy pro karty na homepage, stránky služeb
 * i navigaci. Nová služba = nový objekt v poli (stránka /sluzby/<slug>/
 * se vygeneruje automaticky).
 */
import type { ImageMetadata } from 'astro';

import imgMalovani from '../assets/photo/1.jpg';
import imgNatery from '../assets/photo/2.png';
import imgRenovace from '../assets/photo/3.png';
import imgPodlahy from '../assets/photo/4.png';

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  /** Krátký název — menu, karty */
  title: string;
  /** H1 na stránce služby */
  headline: string;
  /** Text na kartě služby (homepage) */
  cardText: string;
  /** Perex pod H1 stránky služby */
  lead: string;
  /** SEO meta description */
  metaDescription: string;
  image: ImageMetadata;
  imageAlt: string;
  /** Kategorie v galerii referencí (odkaz „Zobrazit práce“) */
  galleryFilter: string;
  /** Bloky obsahu stránky: nadpis + odstavec + odrážky */
  sections: { title: string; text: string; items?: string[] }[];
  /** Kontextové FAQ — 3–4 otázky ke službě (FAQPage schema) */
  faq: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: 'malovani',
    title: 'Malování',
    headline: 'Malování interiérů a exteriérů',
    cardText: 'Interiéry i exteriéry — byty, domy, firmy, školy i haly. Vymalujeme pokoj i celý hotel.',
    lead:
      'Barvy stěn jsou to první, čeho si v místnosti všimnete. Vymalujeme jeden pokoj ' +
      'i celý objekt — rychle, čistě a s poradenstvím ohledně odstínů zdarma.',
    metaDescription:
      'Malování interiérů a exteriérů v Havířově, Ostravě a celém Moravskoslezském kraji. ' +
      'Byty, domy, firmy, školy i haly. Kalkulace zdarma do 24 hodin.',
    image: imgMalovani,
    imageAlt: 'Malování — ilustrace s malířskými válečky a modrou barvou',
    galleryFilter: 'malovani',
    sections: [
      {
        title: 'Co malujeme',
        text:
          'Malujeme bytové i nebytové prostory po celém Moravskoslezském kraji. ' +
          'Zvládneme malý byt i rozsáhlé objekty — školy, haly nebo hotely.',
        items: [
          'Byty a rodinné domy — pokoje, kuchyně, koupelny, schodiště',
          'Firmy, kanceláře a provozovny',
          'Školy, školky a veřejné budovy',
          'Haly, sklady a garáže',
          'Fasády a venkovní malby',
        ],
      },
      {
        title: 'Tapety a fototapety',
        text:
          'Když klasická výmalba nestačí, zútulní interiér tapeta. Lepíme všechny běžné ' +
          'druhy — papírové, vliesové, vinylové i textilní tapety a fototapety na míru.',
      },
      {
        title: 'Dekorativní stěrky',
        text:
          'Pro reprezentativní prostory nabízíme dekorativní stěrky — moderní povrch, ' +
          'který dodá stěnám hloubku a strukturu, jakou běžná malba nevytvoří.',
      },
      {
        title: 'Jak pracujeme',
        text:
          'Nábytek a podlahy pečlivě zakryjeme, po práci vše uklidíme. Zakládáme si na tom, ' +
          'že po nás zůstane čistý, hotový prostor — ne staveniště.',
      },
    ],
    faq: [
      {
        q: 'Kolik stojí vymalování bytu?',
        a: 'Cena závisí na ploše, stavu stěn a počtu vrstev. Přijedeme, prostor si prohlédneme a do 24 hodin pošleme nezávaznou kalkulaci zdarma.',
      },
      {
        q: 'Musím před malováním vyklidit celý byt?',
        a: 'Nemusíte. Nábytek stačí posunout do středu místnosti, vše zakryjeme fólií. S těžšími kusy pomůžeme.',
      },
      {
        q: 'Jak dlouho trvá vymalování bytu 3+1?',
        a: 'Běžný byt 3+1 zvládáme včetně zakrývání a úklidu obvykle za 2–3 dny podle stavu stěn a počtu barev.',
      },
      {
        q: 'Poradíte s výběrem barev?',
        a: 'Ano, poradenství je součást schůzky zdarma — doporučíme odstíny i vhodný typ barvy podle místnosti.',
      },
    ],
  },
  {
    slug: 'natery',
    title: 'Nátěry',
    headline: 'Nátěry dřeva, kovu i střech',
    cardText: 'Topení, dveře, zárubně, okna, ploty i střechy. Veškeré dřevěné a kovové prvky.',
    lead:
      'Kvalitní nátěr chrání a prodlužuje životnost. Natíráme vše od radiátorů ' +
      'a zárubní po střechy, ploty a garážová vrata — uvnitř i venku.',
    metaDescription:
      'Nátěry střech, plotů, oken, dveří, topení a dalších prvků v Moravskoslezském kraji. ' +
      'Interiér i exteriér, dřevo i kov. Kalkulace zdarma.',
    image: imgNatery,
    imageAlt: 'Nátěry — ilustrace s modře natřenými kovovými prvky',
    galleryFilter: 'natery',
    sections: [
      {
        title: 'Nátěry v interiéru',
        text: 'V interiéru natíráme veškeré dřevěné a kovové prvky:',
        items: [
          'Radiátory, topení a stupačky',
          'Dveře, zárubně a zábradlí',
          'Schodiště a podlahy',
          'Renovace a oživení nábytku',
        ],
      },
      {
        title: 'Nátěry v exteriéru',
        text: 'Venkovní nátěry odolají počasí a chrání konstrukce dlouhé roky:',
        items: [
          'Střechy a okapy',
          'Garážová vrata, ploty a brány',
          'Pergoly, přístřešky a stání na auta',
          'Okna, parapety a dětská hřiště',
        ],
      },
      {
        title: 'Správný postup je základ',
        text:
          'Před nátěrem povrch připravíme — očistíme, obrousíme a napenetrujeme. ' +
          'Jen tak nátěr drží a vypadá dobře i po letech, ne jen první sezónu.',
      },
    ],
    faq: [
      {
        q: 'Natíráte i střechy vyšších budov?',
        a: 'Ano, běžně natíráme střechy rodinných domů, garáží i hospodářských budov. Rozsah a přístup posoudíme na schůzce zdarma.',
      },
      {
        q: 'Kdy je nejlepší doba na venkovní nátěry?',
        a: 'Ideální je suché počasí a teploty nad 10 °C, tedy zhruba duben až říjen. Termín doporučíme podle konkrétní zakázky.',
      },
      {
        q: 'Vydrží nátěr radiátorů topnou sezónu?',
        a: 'Ano, používáme barvy určené přímo na radiátory, které snesou vysoké teploty bez žloutnutí a odlupování.',
      },
    ],
  },
  {
    slug: 'renovace',
    title: 'Renovace',
    headline: 'Renovace chat, oken a dveří',
    cardText: 'Chaty, dřevěná okna i fasády — broušení do surového dřeva a nový nátěr.',
    lead:
      'Starému dřevu umíme vrátit život. Renovujeme chaty, původní dřevěná okna ' +
      'a dveře — od broušení do surového dřeva po finální lazuru.',
    metaDescription:
      'Renovace chat, dřevěných oken a dveří v Moravskoslezském kraji. Broušení do surového ' +
      'dřeva, výměna skel a tmelů, nové nátěry. Kalkulace zdarma.',
    image: imgRenovace,
    imageAlt: 'Renovace — ilustrace broušení dřeva bruskou',
    galleryFilter: 'renovace',
    sections: [
      {
        title: 'Renovace chat a chalup',
        text:
          'Kompletní renovace venkovního pláště: broušení do surového dřeva (kde je potřeba), ' +
          'napuštění lazurou, nátěr mezipanelů fasádní barvou a výmalba interiéru. ' +
          'Na přání zajistíme i rekonstrukci koupelny a dalších místností.',
      },
      {
        title: 'Renovace dřevěných oken a dveří',
        text:
          'Původní dřevěná okna často stačí odborně renovovat místo výměny — za zlomek ceny nových:',
        items: [
          'Oprava dřevěných rámů a křídel',
          'Výměna skel v rámech',
          'Výměna sklenářského tmelu',
          'Nové nátěry a lazury',
        ],
      },
    ],
    faq: [
      {
        q: 'Vyplatí se renovace oken oproti výměně?',
        a: 'U zdravých dřevěných rámů téměř vždy — renovace vyjde na zlomek ceny nových oken a zachová původní ráz domu. Stav posoudíme na místě zdarma.',
      },
      {
        q: 'Jak dlouho trvá renovace chaty?',
        a: 'Podle velikosti a stavu dřeva obvykle několik dní až dva týdny. Přesný harmonogram dostanete s kalkulací.',
      },
      {
        q: 'Co když je část dřeva shnilá?',
        a: 'Poškozené části opravíme nebo vyměníme. Rozsah poškození zjistíme při broušení a vždy ho s vámi probereme před další prací.',
      },
    ],
  },
  {
    slug: 'podlahy-a-stavba',
    title: 'Podlahy & stavba',
    headline: 'Podlahy a drobné stavební práce',
    cardText: 'Nivelace, plovoucí podlahy, vinyl, PVC, koberce i sádrokartonové stropy.',
    lead:
      'Od vylití podlahy nivelací po pokládku finální krytiny a sádrokartonové ' +
      'stropy. Jedna parta, jedna zakázka — bez koordinace tří firem.',
    metaDescription:
      'Pokládka podlah (vinyl, PVC, plovoucí, koberce), nivelace, sádrokartonové stropy ' +
      'a zednické práce v Moravskoslezském kraji. Kalkulace zdarma.',
    image: imgPodlahy,
    imageAlt: 'Podlahy a stavba — ilustrace pokládky podlahy',
    galleryFilter: 'podlahy',
    sections: [
      {
        title: 'Podlahy',
        text: 'Připravíme podklad a položíme krytinu podle vašeho výběru:',
        items: [
          'Vylití podlah nivelací',
          'Pokládka OSB desek',
          'Plovoucí podlahy',
          'Vinyl lepený i skládaný (click)',
          'PVC a koberce',
        ],
      },
      {
        title: 'Stavební práce',
        text: 'Zajistíme většinu zednických prací spojených s rekonstrukcí:',
        items: [
          'Sádrokartonové snížené stropy',
          'Perlinka a štuky',
          'Výstavba nového bytového jádra',
          'Bourací práce',
        ],
      },
      {
        title: 'Ukázka: ze sklepa kancelář',
        text:
          'Kompletní proměnu sklepních prostor na obyvatelnou kancelář — nivelace, ' +
          'sádrokartonový strop, výmalba i podlaha — najdete v referencích.',
      },
    ],
    faq: [
      {
        q: 'Jakou podlahu doporučujete do bytu?',
        a: 'Záleží na místnosti a provozu — do obýváku plovoucí nebo vinyl, do koupelny a kuchyně lepený vinyl či PVC. Poradíme na schůzce zdarma.',
      },
      {
        q: 'Musí se stará podlaha vždy vytrhat?',
        a: 'Ne vždy — rovný a pevný podklad často stačí přebrousit nebo vyrovnat nivelací. Posoudíme na místě.',
      },
      {
        q: 'Zvládnete i kompletní rekonstrukci místnosti?',
        a: 'Ano — od bourání přes stěny, strop a podlahu po finální výmalbu. Přesně takovou proměnu najdete v našich referencích.',
      },
    ],
  },
];
