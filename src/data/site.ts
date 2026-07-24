/**
 * Centrální údaje o firmě. Když se změní telefon, adresa nebo hodnocení,
 * stačí to upravit tady — propíše se do hlavičky, patičky, schema.org
 * i všech CTA na webu.
 */
export const site = {
  name: 'ARTSOME s.r.o.',
  shortName: 'ARTSOME',
  tagline: 'Malířství, nátěry a renovace',
  description:
    'Profesionální malířství, nátěry a renovace v Moravskoslezském kraji. ' +
    'Vymalujeme pokoj i celý objekt — rychle, čistě, za rozumnou cenu. Kalkulace zdarma do 24 hodin.',

  phone: '739 193 542',
  phoneHref: 'tel:+420739193542',
  email: 'artsome@seznam.cz',
  ico: '199 577 51',

  address: {
    street: 'Klidná 790/6',
    city: 'Havířov-Město',
    zip: '736 01',
    region: 'Moravskoslezský kraj',
  },

  /** Města pro sekci Oblast působení i schema.org areaServed */
  areaServed: [
    'Havířov', 'Ostrava', 'Karviná', 'Frýdek-Místek',
    'Třinec', 'Opava', 'Orlová', 'Český Těšín', 'Bohumín',
  ],

  rating: {
    firmy: { score: '5,0', scoreNum: 5.0, count: 32, url: 'https://www.firmy.cz/detail/13603911-artsome-s-r-o-havirov-mesto.html#hodnoceni' },
    nejremeslnici: { score: '4,83', scoreNum: 4.83, count: 8, url: 'https://www.nejremeslnici.cz/profil/461519-artsome-s-r-o' },
  },

  social: {
    instagram: 'https://www.instagram.com/artsomesro',
  },

  /**
   * Web3Forms přístupový klíč pro poptávkový formulář.
   * ⚠️ NUTNO DOPLNIT před spuštěním: zdarma na https://web3forms.com
   * (zadáte e-mail artsome@seznam.cz, klíč přijde obratem).
   */
  web3formsKey: 'DOPLNIT-WEB3FORMS-KLIC',
} as const;
