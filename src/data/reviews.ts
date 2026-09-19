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
  {
    text: 'Doporučuji, vše proběhlo perfektně.',
    name: 'Radim Strakoš',
    source: 'Firmy.cz',
    date: 'červen 2025',
  },
  {
    text:
      'Byl jsem maximálně spokojen, majitel velmi příjemný, zaměřil, spočítal a malovalo se. ' +
      'Žádné platby předem. Mohu jen doporučit.',
    name: 'Jan Veselý',
    source: 'Firmy.cz',
    date: 'únor 2025',
    tags: ['malovani'],
  },
  {
    text: 'Spolehliví, rychlí, vstřícní, pěkná práce. Doporučuji.',
    name: 'Lenka Sobkova',
    source: 'Firmy.cz',
    date: 'červen 2025',
  },
  {
    text:
      'Jsme spokojeni s rychlým provedením malířských a natěračských prací v našem domě. ' +
      'Spolehlivé jednání.',
    name: 'R R',
    source: 'Firmy.cz',
    date: 'duben 2025',
    tags: ['malovani', 'natery'],
  },
  {
    text:
      'Velmi příjemná a vstřícná komunikace, rychlá domluva ohledně termínu, kvalitně odvedená ' +
      'práce za rozumnou cenu. Děkuji rovněž za čistotu po malování a lidský přístup. ' +
      'Rozhodně mohu doporučit.',
    name: 'Jana Kopřivová',
    source: 'Firmy.cz',
    date: 'únor 2025',
    tags: ['malovani'],
  },
  {
    text: 'Profesionální práce, ochota, spolehlivost určitě doporučuji!',
    name: 'Věra Lešinská',
    source: 'Firmy.cz',
    date: 'listopad 2024',
  },
  {
    text:
      'Skvělá domluva, profesionálně odvedená práce. Výmalba jednoho pokoje, za dva týdny ' +
      'druhého, skvělá komunikace. Není nic, co by se dalo vytknout. Po odchodu pana malíře ' +
      'čisto. Mohu všem jen doporučit.',
    name: 'Eva Brzoskova',
    source: 'Firmy.cz',
    date: 'březen 2024',
    tags: ['malovani'],
  },
  {
    text:
      'Profesionální přístup, ochota a vstřícnost. Cena vlídná – s ohledem na stav malovaných ' +
      'místností. Lze pouze doporučit, není co vytknout.',
    name: 'D Skoczova',
    source: 'Firmy.cz',
    date: 'duben 2024',
    tags: ['malovani'],
  },
  {
    text:
      'Bezproblémová komunikace, co je dohodnuto, to platí. Čisto při práci, čisto po práci, ' +
      'rychlost, kvalita. Spokojený zákazník.',
    name: 'Kamil Übelauer',
    source: 'Firmy.cz',
    date: 'duben 2024',
  },
];
