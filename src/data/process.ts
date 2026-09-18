/**
 * Kroky procesu „Jak to probíhá“ — sekce na homepage.
 * Na stránkách služeb se zobrazují jen kroky s `short: true`.
 */
export interface ProcessStep {
  title: string;
  text: string;
  /** Klíč ikony z Icon.astro */
  icon: string;
  short?: boolean;
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Ozvete se nám',
    text: 'Zavoláte nebo pošlete poptávku formulářem. Ozveme se obvykle do 24 hodin.',
    icon: 'phone',
    short: true,
  },
  {
    title: 'Schůzka na místě',
    text: 'Přijedeme, prostor si prohlédneme a probereme vaše představy — nezávazně a zdarma.',
    icon: 'map-pin',
  },
  {
    title: 'Kalkulace zdarma',
    text: 'Do pár dní dostanete přehlednou cenovou nabídku. Žádné skryté položky.',
    icon: 'file-text',
    short: true,
  },
  {
    title: 'Realizace',
    text: 'Domluvíme termín a pustíme se do práce. Nábytek a podlahy pečlivě zakryjeme.',
    icon: 'hammer',
  },
  {
    title: 'Úklid a předání',
    text: 'Po práci uklidíme. Předáme vám hotový, čistý prostor — a vy jen zkontrolujete výsledek.',
    icon: 'broom',
    short: true,
  },
];
