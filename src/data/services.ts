export type DivisionSlug =
  | "ai-automation"
  | "creative-branding"
  | "web-digital"
  | "digital-growth";

export interface SubServiceDetail {
  id: string;
  name: string;
  divisionSlug: DivisionSlug;
  divisionTitle: string;
  shortTag: string;
  summary: string;
  overview: string;
  demoType: "ai-flow" | "brand-system" | "web-preview" | "growth-metrics";
  demoHighlight: string;
  demoSteps: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
}

export interface ServiceDivision {
  slug: DivisionSlug;
  index: string;
  title: string;
  shortDescription: string;
  tagline: string;
  summary: string;
  href: string;
  icon: "bot" | "star" | "layout" | "trendingUp";
  subservices: SubServiceDetail[];
}

export const SERVICE_DIVISIONS: ServiceDivision[] = [
  {
    slug: "ai-automation",
    index: "DIVISION 01",
    title: "AI & Automation",
    shortDescription:
      "Intelligent systems that take repetitive work off your plate.",
    tagline:
      "AI agents, assistants and automation designed around how your business actually works.",
    summary:
      "Practical AI systems, connected workflows, and dependable integrations built to eliminate repetitive manual tasks without adding complexity.",
    href: "/services/ai-automation",
    icon: "bot",
    subservices: [
      {
        id: "ai-agent-development",
        name: "AI Agent Development",
        divisionSlug: "ai-automation",
        divisionTitle: "AI & Automation",
        shortTag: "Autonomous Task Routing",
        summary:
          "Goal-driven AI agents engineered to research, triage requests, and coordinate multi-step tasks reliably.",
        overview:
          "We design task-focused agents with clear guardrails, structured tool access, and human-in-the-loop checkpoints so routine coordination runs accurately.",
        demoType: "ai-flow",
        demoHighlight: "Triage -> Context Lookup -> Draft & Route",
        demoSteps: [
          "Receive structured request or incoming lead",
          "Look up relevant rules and knowledge context",
          "Prepare summary and trigger next team step",
        ],
        benefits: [
          {
            title: "Structured reliability",
            description:
              "Built around clear inputs, tool permissions, and predictable outputs rather than open-ended guesswork.",
          },
          {
            title: "Less manual coordination",
            description:
              "Handles repetitive sorting, drafting, and routing while keeping final decisions in your hands.",
          },
          {
            title: "Fits existing tools",
            description:
              "Connects cleanly to your forms, inbox, and internal workspace without forcing a full rebuild.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Map the task",
            description:
              "Define exact inputs, decision rules, and where human review belongs.",
          },
          {
            step: "02",
            title: "Design agent logic",
            description:
              "Structure prompts, tool schemas, and fallback handling cleanly.",
          },
          {
            step: "03",
            title: "Test edge cases",
            description:
              "Validate accuracy against real scenarios before putting it live.",
          },
          {
            step: "04",
            title: "Deploy & refine",
            description:
              "Monitor output quality and tighten prompts as your workflow evolves.",
          },
        ],
      },
      {
        id: "ai-chatbots-and-virtual-assistants",
        name: "AI Chatbots and Virtual Assistants",
        divisionSlug: "ai-automation",
        divisionTitle: "AI & Automation",
        shortTag: "Grounded Conversational UI",
        summary:
          "Helpful assistants grounded in your brand knowledge base for customer questions and internal support.",
        overview:
          "We build conversational assistants that answer accurately from approved documentation, qualify inquiries clearly, and hand off seamlessly to your team.",
        demoType: "ai-flow",
        demoHighlight: "Question -> Verified Docs -> Guided Answer",
        demoSteps: [
          "Match visitor question to approved knowledge base",
          "Respond in clear, on-brand language",
          "Capture lead details or escalate to human support",
        ],
        benefits: [
          {
            title: "Answers grounded in facts",
            description:
              "Draws directly from your approved documentation and service details to minimize off-script answers.",
          },
          {
            title: "Instant first response",
            description:
              "Helps visitors find answers and scope their needs at any hour.",
          },
          {
            title: "Clean inquiry capture",
            description:
              "Turns casual chat questions into structured briefs your team can act on.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Curate knowledge",
            description:
              "Organize your FAQs, service rules, and brand tone clearly.",
          },
          {
            step: "02",
            title: "Build assistant",
            description:
              "Connect retrieval, conversation boundaries, and escalation rules.",
          },
          {
            step: "03",
            title: "Verify responses",
            description:
              "Test tone, edge questions, and handoff paths thoroughly.",
          },
          {
            step: "04",
            title: "Launch & tune",
            description:
              "Review real questions and keep knowledge entries up to date.",
          },
        ],
      },
      {
        id: "business-process-automation",
        name: "Business Process Automation",
        divisionSlug: "ai-automation",
        divisionTitle: "AI & Automation",
        shortTag: "End-to-End Operations",
        summary:
          "Digitizing recurring operational workflows across intake, approvals, reporting, and team handoffs.",
        overview:
          "We identify slow, error-prone manual processes and replace copy-paste bottlenecks with clean, auditable automated flows.",
        demoType: "ai-flow",
        demoHighlight: "Form Intake -> Validation -> Approval Log",
        demoSteps: [
          "Collect standardized intake from clients or staff",
          "Validate fields and generate formatted records",
          "Notify owners and update tracking status",
        ],
        benefits: [
          {
            title: "Fewer manual errors",
            description:
              "Eliminates repeated re-typing across spreadsheets, emails, and documents.",
          },
          {
            title: "Faster turnaround",
            description:
              "Keeps approvals, briefs, and handoffs moving without waiting on manual reminders.",
          },
          {
            title: "Maintainable setup",
            description:
              "Clear architecture your team can understand, inspect, and extend over time.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Audit bottlenecks",
            description:
              "Trace where time is lost across your daily operational steps.",
          },
          {
            step: "02",
            title: "Simplify steps",
            description:
              "Remove redundant handoffs before automating the clean flow.",
          },
          {
            step: "03",
            title: "Automate & log",
            description:
              "Build dependable triggers with clear visibility on every run.",
          },
          {
            step: "04",
            title: "Handover",
            description:
              "Provide clear documentation and support for your team.",
          },
        ],
      },
      {
        id: "workflow-automation",
        name: "Workflow Automation",
        divisionSlug: "ai-automation",
        divisionTitle: "AI & Automation",
        shortTag: "Connected App Triggers",
        summary:
          "Automated triggers linking your forms, CRM, inbox, and internal productivity tools in real time.",
        overview:
          "From lead intake to follow-up reminders, we wire together reliable multi-step workflows so every tool stays in sync automatically.",
        demoType: "ai-flow",
        demoHighlight: "Webhook Trigger -> Enrich -> Sync Tools",
        demoSteps: [
          "Trigger immediately on new form or booking event",
          "Classify inquiry category and priority",
          "Sync record to workspace and alert team",
        ],
        benefits: [
          {
            title: "Zero dropped leads",
            description:
              "Every inquiry is logged, categorized, and routed within seconds.",
          },
          {
            title: "Connected stack",
            description:
              "Bridges gaps between forms, calendars, email, and project boards.",
          },
          {
            title: "Quiet dependability",
            description:
              "Runs cleanly in the background with clear alerts if anything needs attention.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Identify triggers",
            description:
              "Pinpoint the events and tools that need to stay synchronized.",
          },
          {
            step: "02",
            title: "Configure flows",
            description:
              "Connect webhooks, conditions, and clean data formatting.",
          },
          {
            step: "03",
            title: "Run dry tests",
            description:
              "Verify each branch and error path with sample payloads.",
          },
          {
            step: "04",
            title: "Activate",
            description:
              "Move to live traffic and monitor initial workflow runs.",
          },
        ],
      },
      {
        id: "ai-integrations",
        name: "AI Integrations",
        divisionSlug: "ai-automation",
        divisionTitle: "AI & Automation",
        shortTag: "Embedded Intelligence",
        summary:
          "Clean integration of modern language, vision, and reasoning capabilities into your existing software.",
        overview:
          "Instead of replacing tools that already work, we add targeted AI capabilities—such as smart summarization, classification, or search—directly inside them.",
        demoType: "ai-flow",
        demoHighlight: "Existing App -> API Layer -> Structured Output",
        demoSteps: [
          "Send app payload through secure server endpoint",
          "Process with typed schema validation",
          "Return structured data directly into your UI",
        ],
        benefits: [
          {
            title: "No disruptive rebuild",
            description:
              "Upgrades the software and websites your team and customers already know.",
          },
          {
            title: "Server-side security",
            description:
              "Keeps credentials, rate limits, and prompt rules safely behind clean API routes.",
          },
          {
            title: "Predictable data formats",
            description:
              "Returns structured JSON tailored cleanly to your interface.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Review stack",
            description:
              "Assess where an AI capability adds genuine value to your current product.",
          },
          {
            step: "02",
            title: "Architect endpoint",
            description:
              "Design clean server routes, schemas, and safety checks.",
          },
          {
            step: "03",
            title: "Integrate UI",
            description:
              "Surface helpful outputs with clear loading and fallback states.",
          },
          {
            step: "04",
            title: "Measure usage",
            description:
              "Track latency, accuracy, and real user adoption.",
          },
        ],
      },
      {
        id: "custom-ai-solutions",
        name: "Custom AI Solutions",
        divisionSlug: "ai-automation",
        divisionTitle: "AI & Automation",
        shortTag: "Tailored Utilities",
        summary:
          "Bespoke AI tools, document analyzers, and decision-support interfaces scoped to specific domain needs.",
        overview:
          "When off-the-shelf software doesn't fit, we design and build focused custom utilities tailored to your exact content, data, and team workflow.",
        demoType: "ai-flow",
        demoHighlight: "Custom Input -> Domain Logic -> Actionable View",
        demoSteps: [
          "Ingest specialized briefs, specs, or media",
          "Apply tailored extraction and validation rules",
          "Present clear outputs ready for team decisions",
        ],
        benefits: [
          {
            title: "Built around your problem",
            description:
              "Focused on the exact feature set you need without bloated subscription software.",
          },
          {
            title: "Clean user interface",
            description:
              "Pair capable AI logic with thoughtful UX so anyone on your team can use it.",
          },
          {
            title: "Honest scope",
            description:
              "Clear milestones from small proof-of-concept to reliable production tool.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Define use case",
            description:
              "Clarify what problem the custom tool should solve and how success is judged.",
          },
          {
            step: "02",
            title: "Build prototype",
            description:
              "Validate feasibility early with real examples and fast feedback.",
          },
          {
            step: "03",
            title: "Refine interface",
            description:
              "Polish speed, error handling, and usability for everyday use.",
          },
          {
            step: "04",
            title: "Deliver & iterate",
            description:
              "Launch with documentation and clear paths for future upgrades.",
          },
        ],
      },
    ],
  },
  {
    slug: "creative-branding",
    index: "DIVISION 02",
    title: "Creative & Branding",
    shortDescription: "Brands and visual stories people remember.",
    tagline:
      "From strategy and identity to video and content, we shape how your brand looks, sounds and feels.",
    summary:
      "Cohesive brand strategy, unmistakable visual identities, graphic design, video production, and storytelling crafted with clarity.",
    href: "/services/creative-branding",
    icon: "star",
    subservices: [
      {
        id: "brand-strategy",
        name: "Brand Strategy",
        divisionSlug: "creative-branding",
        divisionTitle: "Creative & Branding",
        shortTag: "Positioning & Direction",
        summary:
          "Clear positioning, audience insight, and brand architecture defining what you stand for and how you communicate.",
        overview:
          "Before designing a single asset, we clarify your market position, audience priorities, and core message so every visual choice has purpose.",
        demoType: "brand-system",
        demoHighlight: "Audience Clarity · Positioning · Voice",
        demoSteps: [
          "Define what sets your offering apart clearly",
          "Align visual mood and verbal tone",
          "Create a practical decision filter for future campaigns",
        ],
        benefits: [
          {
            title: "Sharp differentiation",
            description:
              "Helps customers immediately understand why your brand exists and who it is for.",
          },
          {
            title: "Aligned creative output",
            description:
              "Gives designers, writers, and marketers one shared foundation.",
          },
          {
            title: "Practical, not bloated",
            description:
              "Concise direction your team will actually reference day to day.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Discover",
            description:
              "Explore your business goals, audience, and competitive landscape.",
          },
          {
            step: "02",
            title: "Synthesize",
            description:
              "Distill core positioning, tone pillars, and key messages.",
          },
          {
            step: "03",
            title: "Structure",
            description:
              "Translate strategy into clear creative guardrails.",
          },
          {
            step: "04",
            title: "Activate",
            description:
              "Carry the direction straight into identity, web, and campaigns.",
          },
        ],
      },
      {
        id: "brand-identity-design",
        name: "Brand Identity Design",
        divisionSlug: "creative-branding",
        divisionTitle: "Creative & Branding",
        shortTag: "Logo, Color & Type System",
        summary:
          "Complete visual identity systems covering wordmarks, typography, color palettes, and practical brand guidelines.",
        overview:
          "We craft timeless, scalable visual identities engineered to hold their clarity across websites, social feeds, packaging, and print.",
        demoType: "brand-system",
        demoHighlight: "Wordmark · Navy/Blue Palette · Typography",
        demoSteps: [
          "Logo mark & responsive lockup variations",
          "Cohesive typography scale & spacing rhythm",
          "Accessible light/dark color system",
        ],
        benefits: [
          {
            title: "Instant recognition",
            description:
              "A cohesive visual signature that makes every touchpoint unmistakably yours.",
          },
          {
            title: "Built for real screens",
            description:
              "Tested across favicons, mobile headers, decks, and dark/light surfaces.",
          },
          {
            title: "Ready-to-use kit",
            description:
              "Delivered with clean vector files and simple usage guidelines.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Explore directions",
            description:
              "Establish visual territory aligned with your brand personality.",
          },
          {
            step: "02",
            title: "Craft the system",
            description:
              "Develop logo marks, typography pairings, and color balance.",
          },
          {
            step: "03",
            title: "Test touchpoints",
            description:
              "Preview the identity on real web, social, and stationery formats.",
          },
          {
            step: "04",
            title: "Deliver guidelines",
            description:
              "Package vector assets and concise identity rules.",
          },
        ],
      },
      {
        id: "graphic-design",
        name: "Graphic Design",
        divisionSlug: "creative-branding",
        divisionTitle: "Creative & Branding",
        shortTag: "Campaign & Print Collateral",
        summary:
          "Purposeful campaign artwork, posters, pitch decks, packaging, and digital collateral designed with visual discipline.",
        overview:
          "We design visual assets that communicate clearly at a glance—balancing typography, hierarchy, and restraint across every format.",
        demoType: "brand-system",
        demoHighlight: "Posters · Decks · Digital Collateral",
        demoSteps: [
          "Structured grid and clear focal hierarchy",
          "Crisp typography calibrated for readability",
          "Exported cleanly for print and social specs",
        ],
        benefits: [
          {
            title: "Clarity at first glance",
            description:
              "Guides the viewer's eye directly to the message that matters.",
          },
          {
            title: "Consistent craft",
            description:
              "Keeps every flyer, deck, and campaign visual aligned with your brand.",
          },
          {
            title: "Production ready",
            description:
              "Supplied in crisp print and digital formats without last-minute fixes.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Brief & format",
            description:
              "Confirm dimensions, key message, and where the piece will appear.",
          },
          {
            step: "02",
            title: "Layout concepts",
            description:
              "Explore hierarchy, typography, and visual balance.",
          },
          {
            step: "03",
            title: "Refine details",
            description:
              "Polish spacing, contrast, and asset quality.",
          },
          {
            step: "04",
            title: "Final exports",
            description:
              "Deliver print-ready and web-optimized files.",
          },
        ],
      },
      {
        id: "creative-direction",
        name: "Creative Direction",
        divisionSlug: "creative-branding",
        divisionTitle: "Creative & Branding",
        shortTag: "Unified Artistic Vision",
        summary:
          "Cohesive creative oversight across shoots, product launches, and campaigns so every frame feels unified.",
        overview:
          "We guide visual concepts, moodboards, styling, and execution across photography, video, and digital touchpoints so nothing feels stitched together.",
        demoType: "brand-system",
        demoHighlight: "Concept -> Shoot Direction -> Final Cut",
        demoSteps: [
          "Curate visual mood, lighting, and framing rules",
          "Coordinate designers, shoots, and motion assets",
          "Review final output for cohesive brand feel",
        ],
        benefits: [
          {
            title: "Unified aesthetic",
            description:
              "Prevents disconnected visuals across multiple channels and contributors.",
          },
          {
            title: "Stronger storytelling",
            description:
              "Connects every creative choice back to a clear narrative idea.",
          },
          {
            title: "Higher perceived quality",
            description:
              "Delivers the calm polish expected from standout modern brands.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Set creative north star",
            description:
              "Define concept theme, visual references, and emotional tone.",
          },
          {
            step: "02",
            title: "Build treatments",
            description:
              "Prepare shot lists, visual boards, and creative briefs.",
          },
          {
            step: "03",
            title: "Guide production",
            description:
              "Oversee execution across design, filming, and editing.",
          },
          {
            step: "04",
            title: "Final polish",
            description:
              "Ensure every deliverable aligns cleanly before release.",
          },
        ],
      },
      {
        id: "social-media-content-creation",
        name: "Social Media Content Creation",
        divisionSlug: "creative-branding",
        divisionTitle: "Creative & Branding",
        shortTag: "Platform-Native Formats",
        summary:
          "Engaging reels, carousels, photography, and branded visual templates tailored to modern feeds.",
        overview:
          "We create original visual content engineered for how people actually scroll—combining clean design systems with sharp hooks and storytelling.",
        demoType: "brand-system",
        demoHighlight: "Reels · Carousels · Branded Templates",
        demoSteps: [
          "Hook-first framing built for mobile viewports",
          "Repeatable template system for brand consistency",
          "Balanced mix of product, story, and educational posts",
        ],
        benefits: [
          {
            title: "Native feed polish",
            description:
              "Designed specifically for vertical video, carousels, and clean mobile legibility.",
          },
          {
            title: "Consistent cadence",
            description:
              "Modular formats make keeping an active presence practical.",
          },
          {
            title: "Earns real attention",
            description:
              "Focuses on clear ideas and craft rather than noisy clutter.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Format planning",
            description:
              "Choose the right mix of video, carousels, and static pieces.",
          },
          {
            step: "02",
            title: "Shoot & design",
            description:
              "Produce assets and reusable brand templates together.",
          },
          {
            step: "03",
            title: "Edit for pacing",
            description:
              "Tighten visual hooks, captions, and framing for mobile.",
          },
          {
            step: "04",
            title: "Deliver pack",
            description:
              "Supply organized assets ready for publishing.",
          },
        ],
      },
      {
        id: "video-editing-and-production",
        name: "Video Editing and Production",
        divisionSlug: "creative-branding",
        divisionTitle: "Creative & Branding",
        shortTag: "Capture, Pacing & Color",
        summary:
          "End-to-end filming, aerial perspectives, rhythmic editing, color grading, and sound polish.",
        overview:
          "From field capture to the final timeline cut, we shape footage into focused brand films, product stories, and aerial showcases.",
        demoType: "brand-system",
        demoHighlight: "Capture -> Timeline Cut -> Color & Sound",
        demoSteps: [
          "Story-first shot planning and stabilization",
          "Clean rhythmic assembly and motion titles",
          "Balanced tonal color grade and audio mix",
        ],
        benefits: [
          {
            title: "Holds viewer attention",
            description:
              "Thoughtful pacing and clear visual storytelling from opening second to end.",
          },
          {
            title: "Cohesive finish",
            description:
              "Consistent color, typography, and audio across every deliverables cut.",
          },
          {
            title: "Multi-format ready",
            description:
              "Delivered in widescreen and vertical ratios where needed.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Story & shot plan",
            description:
              "Outline narrative beats and capture requirements.",
          },
          {
            step: "02",
            title: "Capture & assemble",
            description:
              "Organize footage and build the core story edit.",
          },
          {
            step: "03",
            title: "Grade & polish",
            description:
              "Refine color balance, motion graphics, and sound.",
          },
          {
            step: "04",
            title: "Master export",
            description:
              "Deliver crisp web and social masters.",
          },
        ],
      },
      {
        id: "visual-storytelling",
        name: "Visual Storytelling",
        divisionSlug: "creative-branding",
        divisionTitle: "Creative & Branding",
        shortTag: "Narrative & Perspective",
        summary:
          "Narrative-driven visual concepts pairing imagery, motion, and design to express ideas clearly.",
        overview:
          "We craft visual narratives that turn abstract products, places, and missions into stories audiences immediately feel and understand.",
        demoType: "brand-system",
        demoHighlight: "Concept -> Visual Arc -> Audience Resonance",
        demoSteps: [
          "Anchor the story in a clear human insight",
          "Sequence scenes and design for emotional flow",
          "Distill complex themes into memorable imagery",
        ],
        benefits: [
          {
            title: "Memorable framing",
            description:
              "Gives your brand a distinct perspective rather than generic stock visuals.",
          },
          {
            title: "Emotional clarity",
            description:
              "Connects the purpose behind your work with the people who care.",
          },
          {
            title: "Adaptable across media",
            description:
              "Works seamlessly across web hero sections, films, and campaign series.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Find the angle",
            description:
              "Uncover the human or visual truth at the heart of your project.",
          },
          {
            step: "02",
            title: "Visual treatment",
            description:
              "Map sequence, framing, and design language.",
          },
          {
            step: "03",
            title: "Produce",
            description:
              "Bring photography, motion, and typography together.",
          },
          {
            step: "04",
            title: "Share",
            description:
              "Roll out across your flagship channels cleanly.",
          },
        ],
      },
    ],
  },
  {
    slug: "web-digital",
    index: "DIVISION 03",
    title: "Web & Digital Experiences",
    shortDescription:
      "Fast, considered websites and interactive experiences.",
    tagline:
      "Modern websites and digital experiences that are clear to use, easy to maintain and built to perform.",
    summary:
      "Responsive business websites, e-commerce stores, focused landing pages, interactive experiences, and dependable maintenance.",
    href: "/services/web-digital",
    icon: "layout",
    subservices: [
      {
        id: "website-design-and-development",
        name: "Website Design and Development",
        divisionSlug: "web-digital",
        divisionTitle: "Web & Digital Experiences",
        shortTag: "Custom Full-Stack Web",
        summary:
          "Bespoke responsive websites uniting refined interface design with fast, modern engineering.",
        overview:
          "We design and build custom websites from the ground up—combining clear visual hierarchy, clean TypeScript/Next.js architecture, and smooth responsiveness.",
        demoType: "web-preview",
        demoHighlight: "UI Design · Clean Code · Responsive Grid",
        demoSteps: [
          "Structure clear navigation and page hierarchy",
          "Design tailored components in brand palette",
          "Ship fast, accessible responsive code",
        ],
        benefits: [
          {
            title: "Fast page loads",
            description:
              "Clean semantic markup and lean assets for instant responsiveness.",
          },
          {
            title: "Built for all screens",
            description:
              "Carefully balanced layouts across mobile, tablet, and widescreen displays.",
          },
          {
            title: "Easy to extend",
            description:
              "Modular React components that grow cleanly alongside your business.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Information map",
            description:
              "Organize pages, sections, and primary conversion paths.",
          },
          {
            step: "02",
            title: "Interface design",
            description:
              "Shape typography, layout rhythm, and interactive details.",
          },
          {
            step: "03",
            title: "Engineering",
            description:
              "Build responsive, accessible components with clean code.",
          },
          {
            step: "04",
            title: "Launch & QA",
            description:
              "Verify performance, metadata, and mobile polish before release.",
          },
        ],
      },
      {
        id: "business-websites",
        name: "Business Websites",
        divisionSlug: "web-digital",
        divisionTitle: "Web & Digital Experiences",
        shortTag: "Clear Credibility & Leads",
        summary:
          "Structured studio and company websites built to present services clearly and turn visitors into inquiries.",
        overview:
          "Your website should explain what you do in seconds. We build calm, authoritative business websites centered on clarity, trust, and easy contact.",
        demoType: "web-preview",
        demoHighlight: "Value Prop -> Services -> Direct Inquiry",
        demoSteps: [
          "Communicate what you do clearly above the fold",
          "Present services without overwhelming visitors",
          "Guide qualified prospects straight to inquiry",
        ],
        benefits: [
          {
            title: "Immediate clarity",
            description:
              "Visitors understand your value and next step within seconds.",
          },
          {
            title: "Credible presentation",
            description:
              "Clean design and disciplined typography earn trust naturally.",
          },
          {
            title: "Frictionless contact",
            description:
              "Thoughtful inquiry flows capture the right project details upfront.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Clarify positioning",
            description:
              "Align key headlines and service structure around buyer questions.",
          },
          {
            step: "02",
            title: "Design layout",
            description:
              "Create calm, balanced sections with clear calls to action.",
          },
          {
            step: "03",
            title: "Build & validate",
            description:
              "Implement responsive pages and validated contact forms.",
          },
          {
            step: "04",
            title: "Deploy",
            description:
              "Launch with clean SEO metadata and analytics readiness.",
          },
        ],
      },
      {
        id: "e-commerce-websites",
        name: "E-commerce Websites",
        divisionSlug: "web-digital",
        divisionTitle: "Web & Digital Experiences",
        shortTag: "Focused Online Storefronts",
        summary:
          "Streamlined online storefronts with clear product discovery, responsive catalogs, and dependable checkout.",
        overview:
          "We design storefronts that keep the focus on your products—making browsing, variant selection, and mobile checkout effortless.",
        demoType: "web-preview",
        demoHighlight: "Catalog Discovery -> Product View -> Checkout",
        demoSteps: [
          "Clean category filtering and product cards",
          "Clear variant, sizing, and pricing display",
          "Streamlined mobile-friendly cart drawer",
        ],
        benefits: [
          {
            title: "Smooth product browsing",
            description:
              "Clean grids and quick filters help shoppers find what they want fast.",
          },
          {
            title: "Mobile checkout clarity",
            description:
              "Reduces friction on smaller screens where most purchases happen.",
          },
          {
            title: "Brand-first storefront",
            description:
              "Tailored visual polish rather than generic cookie-cutter templates.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Catalog architecture",
            description:
              "Structure categories, collections, and key product details.",
          },
          {
            step: "02",
            title: "Storefront UI",
            description:
              "Design high-clarity product pages and cart interactions.",
          },
          {
            step: "03",
            title: "Store integration",
            description:
              "Connect inventory, payments, and order notifications reliably.",
          },
          {
            step: "04",
            title: "Test & open",
            description:
              "Run full end-to-end checkout checks across devices.",
          },
        ],
      },
      {
        id: "landing-pages",
        name: "Landing Pages",
        divisionSlug: "web-digital",
        divisionTitle: "Web & Digital Experiences",
        shortTag: "High-Focus Conversion",
        summary:
          "Focused campaign and product launch pages structured around a single clear proposition and action.",
        overview:
          "When launching a campaign, event, or new offering, a dedicated landing page eliminates distractions and walks visitors smoothly toward one action.",
        demoType: "web-preview",
        demoHighlight: "Hook -> Proof / Demo -> Single CTA",
        demoSteps: [
          "Sharp headline matched to campaign message",
          "Concise visual demonstration of value",
          "Focused signup or inquiry conversion block",
        ],
        benefits: [
          {
            title: "Message match",
            description:
              "Aligns seamlessly with ads, emails, or social links for higher relevance.",
          },
          {
            title: "Fast turnaround",
            description:
              "Focused scope lets you launch campaigns cleanly and quickly.",
          },
          {
            title: "Clear conversion focus",
            description:
              "Every section supports one clear user action without clutter.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Define single goal",
            description:
              "Agree on the core offer and target conversion action.",
          },
          {
            step: "02",
            title: "Wireframe flow",
            description:
              "Sequence headline, visual demonstration, and CTA cleanly.",
          },
          {
            step: "03",
            title: "Design & build",
            description:
              "Ship responsive, fast-loading code tuned for mobile traffic.",
          },
          {
            step: "04",
            title: "Track & refine",
            description:
              "Verify conversion events and iterate on copy or layout.",
          },
        ],
      },
      {
        id: "interactive-web-experiences",
        name: "Interactive Web Experiences",
        divisionSlug: "web-digital",
        divisionTitle: "Web & Digital Experiences",
        shortTag: "Thoughtful Micro-Interactions",
        summary:
          "Engaging product explorers, interactive stories, and subtle motion crafted cleanly for modern browsers.",
        overview:
          "We design purposeful interactions—like live previews, step-by-step explorers, and responsive transitions—that help visitors understand your idea faster.",
        demoType: "web-preview",
        demoHighlight: "Interactive States · Smooth Feedback · Fast",
        demoSteps: [
          "Accessible keyboard and touch-ready controls",
          "Instant visual response with zero layout shift",
          "Graceful behavior with reduced-motion support",
        ],
        benefits: [
          {
            title: "Show, don't just tell",
            description:
              "Lets visitors explore how your product or service works directly.",
          },
          {
            title: "Calm restraint",
            description:
              "Uses subtle, meaningful interaction rather than distracting visual noise.",
          },
          {
            title: "Accessible by design",
            description:
              "Respects keyboard navigation and reduced-motion preferences.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Identify interaction",
            description:
              "Choose where hands-on exploration clarifies your message best.",
          },
          {
            step: "02",
            title: "Prototype states",
            description:
              "Test transitions and responsive behavior on mobile and desktop.",
          },
          {
            step: "03",
            title: "Polish performance",
            description:
              "Keep animations lightweight and frame-smooth.",
          },
          {
            step: "04",
            title: "Ship",
            description:
              "Integrate cleanly into your main web presence.",
          },
        ],
      },
      {
        id: "website-maintenance",
        name: "Website Maintenance",
        divisionSlug: "web-digital",
        divisionTitle: "Web & Digital Experiences",
        shortTag: "Ongoing Care & Updates",
        summary:
          "Ongoing performance checks, dependency updates, content refinements, and reliable technical support.",
        overview:
          "Websites work best when they stay fresh and healthy. We provide steady post-launch care so content stays current and issues never pile up.",
        demoType: "web-preview",
        demoHighlight: "Updates · Health Checks · Content Edits",
        demoSteps: [
          "Routine dependency and security hygiene",
          "Fast updates to pages, copy, and offers",
          "Broken link, speed, and uptime checks",
        ],
        benefits: [
          {
            title: "Peace of mind",
            description:
              "Updates and technical checks handled by the same team that understands the site.",
          },
          {
            title: "Always current",
            description:
              "New services, team updates, and campaign tweaks shipped cleanly.",
          },
          {
            title: "Sustained speed",
            description:
              "Keeps performance, accessibility, and SEO hygiene sharp over time.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Baseline audit",
            description:
              "Review codebase health, hosting setup, and update cadence.",
          },
          {
            step: "02",
            title: "Regular checkups",
            description:
              "Apply framework updates and verify critical user flows.",
          },
          {
            step: "03",
            title: "Fast edits",
            description:
              "Handle content updates and small feature additions smoothly.",
          },
          {
            step: "04",
            title: "Clear reporting",
            description:
              "Concise summaries of improvements completed.",
          },
        ],
      },
    ],
  },
  {
    slug: "digital-growth",
    index: "DIVISION 04",
    title: "Digital Growth",
    shortDescription:
      "Strategy and measurement that help you reach the right people.",
    tagline:
      "Marketing strategy, content and analysis that connect your creative work to business growth.",
    summary:
      "Focused marketing strategy, social management, search visibility, content systems, campaigns, and honest performance measurement.",
    href: "/services/digital-growth",
    icon: "trendingUp",
    subservices: [
      {
        id: "digital-marketing-strategy",
        name: "Digital Marketing Strategy",
        divisionSlug: "digital-growth",
        divisionTitle: "Digital Growth",
        shortTag: "Channel & Funnel Focus",
        summary:
          "Channel selection, audience targeting, and practical campaign planning aligned with realistic goals.",
        overview:
          "We help you focus energy on the channels and messages most likely to reach your actual buyers—avoiding scattershot activity.",
        demoType: "growth-metrics",
        demoHighlight: "Audience -> Core Channels -> Measurement",
        demoSteps: [
          "Prioritize 2–3 highest-leverage channels",
          "Align creative messaging with buyer stage",
          "Set clear review checkpoints and KPIs",
        ],
        benefits: [
          {
            title: "Focused effort",
            description:
              "Stops wasted time trying to be everywhere with no clear goal.",
          },
          {
            title: "Connected creative",
            description:
              "Links brand storytelling directly to measurable business outcomes.",
          },
          {
            title: "Clear next steps",
            description:
              "Delivered as an actionable roadmap rather than generic theory.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Review baseline",
            description:
              "Examine current channels, audience fit, and conversion path.",
          },
          {
            step: "02",
            title: "Select priorities",
            description:
              "Choose channels and offers with the clearest leverage.",
          },
          {
            step: "03",
            title: "Plan cadence",
            description:
              "Map campaign phases, content themes, and measurement.",
          },
          {
            step: "04",
            title: "Review & adapt",
            description:
              "Refine priorities based on real signal, not assumptions.",
          },
        ],
      },
      {
        id: "social-media-management",
        name: "Social Media Management",
        divisionSlug: "digital-growth",
        divisionTitle: "Digital Growth",
        shortTag: "Consistent Channel Presence",
        summary:
          "Consistent publishing calendars, channel optimization, and thoughtful audience engagement.",
        overview:
          "We keep your core social profiles active, cohesive, and aligned with your wider brand and product announcements.",
        demoType: "growth-metrics",
        demoHighlight: "Content Pillars -> Schedule -> Engagement",
        demoSteps: [
          "Maintain balanced weekly publishing rhythm",
          "Keep visual grid and captions on-brand",
          "Review post performance to refine formats",
        ],
        benefits: [
          {
            title: "Steady brand presence",
            description:
              "Builds ongoing familiarity with prospects between buying moments.",
          },
          {
            title: "Zero scramble",
            description:
              "Planned calendars replace last-minute posting.",
          },
          {
            title: "Consistent voice",
            description:
              "Captions and replies stay thoughtful and aligned with your brand.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Profile alignment",
            description:
              "Refresh bios, highlights, and visual consistency across channels.",
          },
          {
            step: "02",
            title: "Content calendar",
            description:
              "Plan monthly themes paired with creative production.",
          },
          {
            step: "03",
            title: "Publish & engage",
            description:
              "Schedule posts and keep community interactions responsive.",
          },
          {
            step: "04",
            title: "Monthly review",
            description:
              "Identify top-performing formats and adjust the next cycle.",
          },
        ],
      },
      {
        id: "seo",
        name: "SEO",
        divisionSlug: "digital-growth",
        divisionTitle: "Digital Growth",
        shortTag: "Organic Search Visibility",
        summary:
          "Technical site health, semantic structure, and search-intent optimization for lasting organic discovery.",
        overview:
          "We structure your pages, headings, metadata, and core service content so search engines and real people find you cleanly.",
        demoType: "growth-metrics",
        demoHighlight: "Technical Health · Search Intent · Structure",
        demoSteps: [
          "Clean URL, heading, and metadata hierarchy",
          "Service and topic pages matched to real queries",
          "Fast mobile page speed and crawl hygiene",
        ],
        benefits: [
          {
            title: "Compounding traffic",
            description:
              "Brings high-intent visitors consistently without paying for every click.",
          },
          {
            title: "Clean technical foundation",
            description:
              "Ensures fast rendering, valid sitemaps, and structured headings.",
          },
          {
            title: "Human-readable content",
            description:
              "Helpful pages written for people first, never keyword-stuffed.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Technical & intent audit",
            description:
              "Check crawl health, speed, and how buyers search your services.",
          },
          {
            step: "02",
            title: "Page structure",
            description:
              "Optimize headings, metadata, internal linking, and page copy.",
          },
          {
            step: "03",
            title: "Content alignment",
            description:
              "Strengthen dedicated pages for key service queries.",
          },
          {
            step: "04",
            title: "Monitor trends",
            description:
              "Track search impressions and refine based on real queries.",
          },
        ],
      },
      {
        id: "content-strategy",
        name: "Content Strategy",
        divisionSlug: "digital-growth",
        divisionTitle: "Digital Growth",
        shortTag: "Editorial Pillars & Voice",
        summary:
          "Clear messaging frameworks, editorial pillars, and content roadmaps matched to your customer journey.",
        overview:
          "Good content answers real customer questions before they ever reach out. We organize what you should publish, why it matters, and how it sounds.",
        demoType: "growth-metrics",
        demoHighlight: "Core Pillars -> Topics -> Multi-Channel Use",
        demoSteps: [
          "Define 3–4 focused editorial themes",
          "Map topics to real buyer questions",
          "Repurpose flagship ideas cleanly across channels",
        ],
        benefits: [
          {
            title: "Purposeful publishing",
            description:
              "Every article, video, and post serves a clear audience question.",
          },
          {
            title: "Clear brand voice",
            description:
              "Consistent tone that builds credibility without corporate jargon.",
          },
          {
            title: "Repeatable system",
            description:
              "Makes planning and creating content straightforward each month.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Audience questions",
            description:
              "Gather the real questions prospects ask before working with you.",
          },
          {
            step: "02",
            title: "Build pillars",
            description:
              "Define core topic areas and format guidelines.",
          },
          {
            step: "03",
            title: "Editorial roadmap",
            description:
              "Sequence flagship pieces and supporting social formats.",
          },
          {
            step: "04",
            title: "Refine voice",
            description:
              "Iterate based on audience feedback and search interest.",
          },
        ],
      },
      {
        id: "digital-campaigns",
        name: "Digital Campaigns",
        divisionSlug: "digital-growth",
        divisionTitle: "Digital Growth",
        shortTag: "Coordinated Launches",
        summary:
          "Multi-channel launch and promotion campaigns combining sharp creative assets with targeted distribution.",
        overview:
          "When launching a new product, seasonal offer, or milestone, we coordinate landing pages, creative visuals, and channel distribution together.",
        demoType: "growth-metrics",
        demoHighlight: "Creative Hook -> Landing Page -> Conversion",
        demoSteps: [
          "Align campaign creative and landing destination",
          "Run coordinated launch across key channels",
          "Track conversions cleanly from click to inquiry",
        ],
        benefits: [
          {
            title: "Aligned execution",
            description:
              "Creative, copy, and landing page built by one team for tight message match.",
          },
          {
            title: "Focused momentum",
            description:
              "Concentrates visibility around launches that matter most.",
          },
          {
            title: "Measurable flow",
            description:
              "Clear conversion tracking from first click to completed inquiry.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Campaign brief",
            description:
              "Define target audience, core offer, and campaign window.",
          },
          {
            step: "02",
            title: "Create assets",
            description:
              "Produce campaign visuals, copy, and landing page together.",
          },
          {
            step: "03",
            title: "Launch",
            description:
              "Roll out across selected channels with clean tracking.",
          },
          {
            step: "04",
            title: "Evaluate",
            description:
              "Review reach, engagement, and conversion learnings.",
          },
        ],
      },
      {
        id: "performance-analysis",
        name: "Performance Analysis",
        divisionSlug: "digital-growth",
        divisionTitle: "Digital Growth",
        shortTag: "Signal Over Noise",
        summary:
          "Clear tracking of traffic, conversion paths, and campaign performance translated into practical next steps.",
        overview:
          "Analytics shouldn't be a wall of confusing charts. We track the few metrics that genuinely reflect user behavior and highlight what to improve next.",
        demoType: "growth-metrics",
        demoHighlight: "Clean Tracking -> Funnel View -> Clear Actions",
        demoSteps: [
          "Verify clean event and conversion tracking",
          "Spot where visitors engage or drop off",
          "Prioritize practical UX or messaging fixes",
        ],
        benefits: [
          {
            title: "Actionable clarity",
            description:
              "Plain-language insights showing what is working and why.",
          },
          {
            title: "Reliable data",
            description:
              "Clean event setup so decisions aren't based on broken numbers.",
          },
          {
            title: "Continuous improvement",
            description:
              "Turns post-launch observations into concrete refinements.",
          },
        ],
        process: [
          {
            step: "01",
            title: "Verify events",
            description:
              "Confirm forms, CTAs, and key page views track accurately.",
          },
          {
            step: "02",
            title: "Analyze funnel",
            description:
              "Review acquisition sources, engagement, and conversion drops.",
          },
          {
            step: "03",
            title: "Recommend fixes",
            description:
              "Prioritize high-impact adjustments to copy, UX, or targeting.",
          },
          {
            step: "04",
            title: "Iterate",
            description:
              "Test improvements and measure change over time.",
          },
        ],
      },
    ],
  },
];

export const ALL_SUBSERVICES: SubServiceDetail[] = SERVICE_DIVISIONS.flatMap(
  (division) => division.subservices
);

export function getDivisionBySlug(slug: string): ServiceDivision | undefined {
  return SERVICE_DIVISIONS.find((division) => division.slug === slug);
}

export function getSubserviceBySlug(
  slug: string
): SubServiceDetail | undefined {
  return ALL_SUBSERVICES.find((sub) => sub.id === slug);
}
