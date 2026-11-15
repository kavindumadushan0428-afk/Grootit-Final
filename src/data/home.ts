export interface NavItem {
  label: string;
  href: string;
  isMegaMenu?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Work", href: "/work" },
  { label: "Services", href: "#services", isMegaMenu: true },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description: "We learn your goals, audience and constraints.",
  },
  {
    step: "02",
    title: "Strategize",
    description: "We shape a clear direction and plan.",
  },
  {
    step: "03",
    title: "Build",
    description: "We design, create and develop with care.",
  },
  {
    step: "04",
    title: "Improve",
    description: "We review, refine and keep growing.",
  },
];

export const FOOTER_EXPLORE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Work", href: "/work" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_DIVISION_LINKS = [
  { label: "AI & Automation", href: "/services/ai-automation" },
  { label: "Creative & Branding", href: "/services/creative-branding" },
  { label: "Web & Digital Experiences", href: "/services/web-digital" },
  { label: "Digital Growth", href: "/services/digital-growth" },
];
