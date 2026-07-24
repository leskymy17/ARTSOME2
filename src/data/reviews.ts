/**
 * Recenze z Firmy.cz — přepsané doslovně, s reálnými jmény a daty.
 * Nová recenze = nový objekt. `tags` určuje, na kterých stránkách
 * služeb se recenze zobrazí (kromě homepage, kde jsou všechny).
 */
export interface Review {
  text: string;
  name: string;
  source: string;
  date: string;
  /** Volitelné: na kterých stránkách služeb recenzi ukázat */
  tags?: string[];
}

export const reviews: Review[] = [
  {
    text:
      'Ráda bych sdílela svůj úspěch při hledání spolehlivého a kvalitního řemeslníka. ' +
      'Nejprve jsme si domluvili schůzku, prohlédli místo, dohodli se na barvě a termínu. ' +
      'Práce byla provedena rychle a kvalitně. Určitě doporučuji.',
    name: 'Eva Gebauer',
    source: 'Firmy.cz',
    date: 'září 2024',
    tags: ['malovani'],
  },
  {
    text:
      'Výmalba bytu 2+1 proběhla podle předem domluveného plánu. Velmi oceňuji komunikaci, ' +
      'dodržení termínu, rychlost a kvalitu. S firmou Artsome jsem maximálně spokojená, ' +
      'není jim co vytknout.',
    name: 'Andrea Holbová',
    source: 'Firmy.cz',
    date: 'červen 2025',
    tags: ['malovani'],
  },
  {
    text:
      'Spolupráce s firmou Artsome byla od začátku do konce výjimečně pozitivní. ' +
      'Tým dělá svou práci s profesionalitou a kreativitou. Komunikace byla rychlá, ' +
      'vstřícná a vždy maximálně profesionální.',
    name: 'Draha Palionová',
    source: 'Firmy.cz',
    date: 'duben 2026',
    tags: ['natery', 'renovace'],
  },
  {
    text:
      'S firmou jsem byla maximálně spokojená, vše proběhlo bez problémů, ' +
      'i skrze více práce si se vším poradili na jedničku.',
    name: 'Mistrxbox 360',
    source: 'Firmy.cz',
    date: 'leden 2026',
    tags: ['podlahy-a-stavba'],
  },
  {
    text:
      'S firmou jsem byla velice spokojená! Skvělá komunikace, kvalita práce a vše kolem ' +
      'bylo prostě na jedničku s hvězdičkou. Doporučuji.',
    name: 'Adela Slizova',
    source: 'Firmy.cz',
    date: 'říjen 2025',
    tags: ['malovani'],
  },
  {
    text: 'Maximální spokojenost.',
    name: 'Petr Klokner',
    source: 'Firmy.cz',
    date: 'listopad 2024',
    tags: ['natery'],
  },
  {
    text: 'Můžeme jen doporučit, skvělá komunikace, dobře a čistě odvedená práce za dobrou cenu.',
    name: 'Zdenka',
    source: 'Firmy.cz',
    date: 'červen 2025',
    tags: ['renovace', 'podlahy-a-stavba'],
  },
];
