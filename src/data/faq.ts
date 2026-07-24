/**
 * Obecné FAQ pro homepage (kontextové otázky ke službám
 * jsou přímo v services.ts u jednotlivých služeb).
 * `kontaktFaq` je krátká sada pro stránku Kontakt.
 */
export interface FaqItem {
  q: string;
  a: string;
}

export const faq: FaqItem[] = [
  {
    q: 'Kolik bude moje zakázka stát?',
    a:
      'Každá zakázka je jiná, proto cenu vždy stanovíme po prohlídce na místě. Schůzka i ' +
      'cenová kalkulace jsou zdarma a nezávazné — nabídku máte obvykle do 24 hodin od schůzky.',
  },
  {
    q: 'Jak rychle můžete začít?',
    a:
      'Menší zakázky (výmalba bytu, nátěry) obvykle do 1–2 týdnů od odsouhlasení nabídky, ' +
      'větší podle aktuální vytíženosti. Přesný termín domluvíme na schůzce.',
  },
  {
    q: 'Kde všude pracujete?',
    a:
      'Po celém Moravskoslezském kraji — nejčastěji Havířov, Ostrava, Karviná a okolí. ' +
      'Za většími zakázkami vyjedeme kamkoli po kraji.',
  },
  {
    q: 'Uklidíte po sobě?',
    a:
      'Vždy. Pořádek během práce i po ní je naše vizitka — nábytek zakryjeme, po dokončení ' +
      'vše uklidíme a předáme vám čistý prostor.',
  },
  {
    q: 'Jste pojištění a pracujete na smlouvu?',
    a:
      'Ano, jsme řádně zapsaná společnost ARTSOME s.r.o. (IČO 199 577 51). Rozsah prací, ' +
      'cenu i termín máte vždy písemně předem.',
  },
  {
    q: 'Pomůžete s výběrem barev a materiálů?',
    a:
      'Ano, poradenství je součástí schůzky zdarma. Doporučíme odstíny, typ barvy i vhodnou ' +
      'krytinu podle účelu místnosti a vašeho rozpočtu.',
  },
];

export const kontaktFaq: FaqItem[] = [
  {
    q: 'Kolik stojí cenová kalkulace?',
    a:
      'Nic. Schůzka na místě i vypracování cenové nabídky jsou zdarma a nezávazné — ' +
      'platíte až za odsouhlasenou práci.',
  },
  {
    q: 'Jak rychle se ozvete?',
    a:
      'Obvykle do 24 hodin od odeslání poptávky nebo zmeškaného hovoru. ' +
      'Telefonicky nás zastihnete od pondělí do pátku.',
  },
  {
    q: 'V jakém regionu pracujete?',
    a:
      'V celém Moravskoslezském kraji — nejčastěji Havířov, Ostrava, Karviná a okolí. ' +
      'Doprava po kraji je v ceně.',
  },
  {
    q: 'Uklidíte po sobě?',
    a:
      'Vždy. Nábytek a podlahy před prací zakryjeme a po dokončení vše uklidíme — ' +
      'předáváme čistý, hotový prostor.',
  },
];
