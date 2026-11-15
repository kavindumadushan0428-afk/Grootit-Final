import type { DivisionSlug } from "./services";

export type WorkCategory =
  | "All"
  | "AI & Automation"
  | "Creative & Branding"
  | "Web & Digital Experiences"
  | "Digital Growth";

export interface WorkProject {
  id: string;
  badge: "Concept" | "Demo";
  filterCategory: Exclude<WorkCategory, "All">;
  divisionSlug: DivisionSlug;
  title: string;
  description: string;
  overview: string;
  gradientClass: string;
  scopePoints: string[];
  deliverables: string[];
  demoCaption: string;
}

export const WORK_CATEGORIES: WorkCategory[] = [
  "All",
  "AI & Automation",
  "Creative & Branding",
  "Web & Digital Experiences",
  "Digital Growth",
];

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: "brand-identity-system",
    badge: "Concept",
    filterCategory: "Creative & Branding",
    divisionSlug: "creative-branding",
    title: "Brand Identity System",
    description: "A concept exploring a cohesive logo, colour and type system.",
    overview:
      "An illustrative concept exploring how disciplined typography, a crisp blue-and-navy palette, and clean grid geometry unify brand touchpoints across digital and print.",
    gradientClass: "from-[#CBE2FF] via-[#7EB7FF] to-[#2B7FFF]",
    scopePoints: [
      "Minimalist wordmark and responsive monogram lockups",
      "White, pale-blue, and deep-navy contrast rules",
      "Consistent typographic scale across headers and cards",
    ],
    deliverables: [
      "Primary & secondary logo system",
      "Color palette & accessibility ratios",
      "Typography & layout guidelines",
    ],
    demoCaption: "Illustrative identity system concept — not a paid client project.",
  },
  {
    id: "business-website",
    badge: "Concept",
    filterCategory: "Web & Digital Experiences",
    divisionSlug: "web-digital",
    title: "Business Website",
    description: "A concept for a clear, fast small-business website.",
    overview:
      "A conceptual layout study focused on immediate value clarity, streamlined service discovery, and effortless inquiry capture for service businesses.",
    gradientClass: "from-[#CFE4FF] via-[#83BAFF] to-[#2F82FF]",
    scopePoints: [
      "Scannable above-the-fold headline and dual CTA hierarchy",
      "Modular division and service detail routing",
      "Responsive layout verified from mobile to desktop",
    ],
    deliverables: [
      "Information architecture & wireframes",
      "Responsive React / Next.js UI system",
      "Validated project inquiry workflow",
    ],
    demoCaption: "Illustrative website architecture concept — not a paid client project.",
  },
  {
    id: "ai-workflow-automation",
    badge: "Demo",
    filterCategory: "AI & Automation",
    divisionSlug: "ai-automation",
    title: "AI Workflow Automation",
    description: "A demonstration of an inquiry-handling automation flow.",
    overview:
      "A working demonstration model illustrating how incoming project inquiries can be categorized, summarized, and routed cleanly with human oversight.",
    gradientClass: "from-[#061128] via-[#0B2452] to-[#13469E]",
    scopePoints: [
      "Structured intake parsing by service division",
      "Automated brief summary preparation for team review",
      "Routing triggers with human-in-the-loop approval",
    ],
    deliverables: [
      "Intake classification schema",
      "Routing & notification workflow",
      "Operator review checklist",
    ],
    demoCaption: "Interactive workflow demonstration — not a paid client deployment.",
  },
  {
    id: "visual-storytelling-reel",
    badge: "Concept",
    filterCategory: "Creative & Branding",
    divisionSlug: "creative-branding",
    title: "Visual Storytelling Reel",
    description:
      "A concept reel mixing motion, video and aerial-style visuals.",
    overview:
      "An illustrative production concept combining rhythmic editing, clean title cards, and elevated visual framing to tell brand stories succinctly.",
    gradientClass: "from-[#B4C8E8] via-[#6B88BA] to-[#2E4E86]",
    scopePoints: [
      "Narrative arc structured for 45–60 second attention",
      "Clean motion typography integrated into live footage",
      "Cohesive color balance across varied lighting",
    ],
    deliverables: [
      "Story treatment & pacing board",
      "Edited widescreen & vertical masters",
      "Graded color pass",
    ],
    demoCaption: "Illustrative motion direction concept — not a paid client project.",
  },
  {
    id: "digital-campaign-plan",
    badge: "Concept",
    filterCategory: "Digital Growth",
    divisionSlug: "digital-growth",
    title: "Digital Campaign Plan",
    description:
      "A concept campaign plan with content and measurement outline.",
    overview:
      "A structured growth concept uniting launch creative, focused landing destinations, and clean conversion tracking without vanity metrics.",
    gradientClass: "from-[#CFDDF0] via-[#83A7DB] to-[#3B71C4]",
    scopePoints: [
      "Focused 2-channel distribution mapped to audience stage",
      "Consistent creative hooks across social and landing page",
      "Simple conversion & inquiry signal tracking",
    ],
    deliverables: [
      "Channel & messaging roadmap",
      "Creative asset specification",
      "Measurement & review framework",
    ],
    demoCaption: "Illustrative campaign blueprint — not a paid client project.",
  },
  {
    id: "interactive-web-experience",
    badge: "Concept",
    filterCategory: "Web & Digital Experiences",
    divisionSlug: "web-digital",
    title: "Interactive Web Experience",
    description: "A concept for a scroll-driven product story.",
    overview:
      "A web interaction concept exploring calm, responsive transitions and guided step-by-step product exploration without heavy bloat.",
    gradientClass: "from-[#C0D4EE] via-[#6893D2] to-[#1F55AD]",
    scopePoints: [
      "Progressive section reveal tied to user exploration",
      "Accessible keyboard & reduced-motion fallbacks",
      "Clean component architecture with fast frame times",
    ],
    deliverables: [
      "Interactive state prototype",
      "Responsive desktop & mobile layout",
      "Accessible UI primitives",
    ],
    demoCaption: "Illustrative interaction study — not a paid client project.",
  },
];

export const ABOUT_BELIEFS = [
  {
    title: "Creativity needs intelligence",
    description:
      "Good ideas land harder when they are informed and well built.",
  },
  {
    title: "Technology should feel human",
    description: "Tools should make work clearer, not more complicated.",
  },
  {
    title: "Small teams move well",
    description: "Close collaboration keeps quality high and decisions quick.",
  },
];

export const ABOUT_FOUNDERS = [
  {
    role: "Founder — AI and Technology",
    description:
      "AI agents, integrations, automation, intelligent systems and technical development.",
  },
  {
    role: "Founder — Creative and Digital",
    description:
      "Branding, graphic design, creative direction, video production, content creation, web development and digital experiences.",
  },
];

export const ABOUT_WORKING_PRINCIPLES = [
  "Be honest about what we can deliver today.",
  "Keep you involved at every important step.",
  "Make things clear, fast and easy to maintain.",
  "Measure what matters, then improve it.",
];

export const CONTACT_NEXT_STEPS = [
  {
    step: "01",
    title: "We listen",
    description: "We read your inquiry and learn your goals.",
  },
  {
    step: "02",
    title: "We discuss",
    description: "We talk through ideas, scope and fit.",
  },
  {
    step: "03",
    title: "We propose",
    description: "You receive a clear plan and proposal.",
  },
  {
    step: "04",
    title: "We begin",
    description: "We start building together.",
  },
];

export function getWorkProjectById(id: string): WorkProject | undefined {
  return WORK_PROJECTS.find((project) => project.id === id);
}
