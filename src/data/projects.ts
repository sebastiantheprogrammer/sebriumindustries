export const PROJECT_CATEGORIES = ['All', 'Apps & Tools', 'Commerce', 'Websites', 'Experiments'] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface Project {
  id: string;
  name: string;
  category: Exclude<ProjectCategory, 'All'>;
  description: string;
  logo?: string;
  href?: string;
  linkLabel?: string;
}

// Add one entry here to include a project in the grid, filters, and counts.
// Omit href until a public destination is confirmed.
export const PROJECTS: Project[] = [
  { id: 'schedulesnap', name: 'ScheduleSnap', category: 'Apps & Tools', description: 'A fast, clear school schedule app built for NYC students.', logo: '/project-logos/schedulesnap.svg', href: 'https://schedulesnap.sebrium.com' },
  { id: 'bellboard', name: 'BellBoard', category: 'Apps & Tools', description: 'A school marketplace where verified students can discover sellers and buy and sell within their school community.', logo: '/project-logos/bellboard.svg', href: 'https://bellboard.sebrium.com' },
  { id: 'dental', name: 'Dental', category: 'Apps & Tools', description: 'A daily dental diagnosis puzzle with progressive clues, case explanations, and shareable results.', href: 'https://dentle.sebrium.com' },
  { id: 'crusader-kitchen', name: 'Crusader Kitchen', category: 'Commerce', description: 'A weekly meal ordering platform with pickup scheduling, custom meals, and kitchen management tools.', href: 'https://crusaderkitchen.sebrium.com' },
  { id: 'lanyart', name: 'Lanyart', category: 'Commerce', description: 'A lanyard storefront with a mix-and-match bundle builder, checkout, and order tracking.', href: 'https://lanyart-iv44.vercel.app' },
  { id: 'trench-trophies', name: 'Trench Trophies', category: 'Experiments', description: 'A connected trading trophy concept pairing a customizable display with Solana wallet activity and on-chain proof.' },
  { id: 'web-design', name: 'Sebrium Web Design', category: 'Websites', description: 'Business websites, landing pages, and redesigns. The web design studio formerly known as Ozone Designs.', logo: '/SIsebriumindustries.svg', href: '/web-design', linkLabel: 'Explore service' },
  { id: 'jetvamp', name: 'Jetvamp Apparel', category: 'Commerce', description: 'An online storefront for the Jetvamp clothing brand.', href: 'https://jetvampapparel.com' },
  { id: 'ganbaru', name: 'Ganbaru Cafe', category: 'Websites', description: 'A cafe website bringing the brand and its online presence together.', href: 'https://ganbarucafe-ec.vercel.app' },
  { id: 'jrx', name: 'JRX Visuals', category: 'Websites', description: 'A photography and videography website for James Reyes.', href: 'https://jrxvisuals.vercel.app' },
  { id: 'portfolio', name: 'Sebastian’s Portfolio', category: 'Websites', description: 'A personal portfolio of software, design work, experience, and future ambitions.', href: 'https://portfolio.sebrium.com' },
  { id: 'kyle-santiago', name: 'Kyle Santiago', category: 'Websites', description: 'A men’s mental health blog built around Kyle Santiago’s writing.', href: 'https://kyle-santiago-mental-health.vercel.app' },
  { id: 'textmorph', name: 'TextMorphFx', category: 'Apps & Tools', description: 'A glitch-style text animation generator with custom fonts, live previews, and image or GIF export.', href: 'https://github.com/sebastiantheprogrammer/TextMorphFx', linkLabel: 'View source' },
  { id: 'codehs', name: 'CodeHS Assistant', category: 'Apps & Tools', description: 'A browser extension connecting CodeHS assignments with AI coding assistance.', href: 'https://github.com/sebastiantheprogrammer/CodeHsAssistant', linkLabel: 'View source' },
  { id: 'hopscotch', name: 'Hopscotch Quiz Game', category: 'Experiments', description: 'An interactive hopscotch-style quiz built around Alma Misionera.', href: 'https://hopscotchquizgamebysebastianingram.vercel.app' },
  { id: 'wager-royale', name: 'Wager Royale', category: 'Experiments', description: 'An experimental wagering interface and backend project.', href: 'https://royale-wager.vercel.app' },
];
