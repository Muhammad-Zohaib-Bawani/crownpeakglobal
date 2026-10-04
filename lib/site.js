// Single source of truth for nav, services, portfolio, testimonials, FAQ.
// Pages import from here so copy never diverges between home and detail pages.
// ponytail: plain module, no CMS — content changes are one-file edits.

export const site = {
  name: "Crown Peak Global",
  tagline: "Digital Solutions for Business Growth",
  founded: 2016,
  phone: "+44 7400 759644",
  tel: "tel:+447400759644",
  whatsapp: "https://wa.me/447400759644",
  regions: "United Kingdom · Worldwide",
  blurb:
    "Crown Peak Global is a full-service digital studio. We design brands, build web and mobile products, and run the marketing that grows them — one team, one roadmap, one point of contact.",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "graphic-designing",
    icon: "palette",
    title: "Graphic Designing",
    short:
      "Identity systems, brand kits and campaign creative that make you the obvious choice in a crowded feed.",
    outcome: "A brand that looks like the category leader",
    body: [
      "We start with positioning, not pixels. Once we know who you are talking to and what you want them to feel, we build the visual system that carries it — logo, type scale, colour, layout rules and the templates your team uses every day.",
      "You get an asset library that stays consistent whether it is a pitch deck, a storefront sign or a paid social ad — so every touchpoint compounds instead of competing.",
    ],
    deliverables: [
      "Logo & identity system",
      "Brand guidelines",
      "Packaging & print",
      "Social & ad creative",
      "Pitch decks and sales collateral",
      "Design system handoff",
    ],
  },
  {
    slug: "web-development",
    icon: "code",
    title: "Web Design & Development",
    short:
      "Fast, accessible, search-ready websites and web apps — designed and engineered by the same team.",
    outcome: "A site that loads fast and converts",
    body: [
      "Design and engineering happen together, so nothing gets lost in a handoff. We build on modern frameworks with clean, documented code, then measure it against Core Web Vitals before it ships.",
      "Marketing sites, storefronts, portals, dashboards — you own the code and the content, and the whole thing stays editable by non-developers.",
    ],
    deliverables: [
      "UX & UI design",
      "Next.js / React builds",
      "Headless CMS setup",
      "E-commerce & payments",
      "Performance & Core Web Vitals",
      "Analytics and event tracking",
    ],
  },
  {
    slug: "app-development",
    icon: "device",
    title: "App Development",
    short:
      "iOS, Android and cross-platform apps built to Apple and Google guidelines from the first wireframe.",
    outcome: "One codebase, both stores, no surprises",
    body: [
      "We scope a real MVP instead of a wish list, ship it to TestFlight and Play Console early, and iterate on what users actually do. Strategy, design and development sit in one team.",
      "Offline behaviour, push, auth, payments and store review requirements are planned up front — the parts that usually delay a launch.",
    ],
    deliverables: [
      "Product discovery & scoping",
      "iOS & Android delivery",
      "Cross-platform builds",
      "API & backend integration",
      "Store submission support",
      "Post-launch iteration",
    ],
  },
  {
    slug: "video-animation",
    icon: "play",
    title: "Video Animation",
    short:
      "Explainers, product motion and social cutdowns that hold attention past the first three seconds.",
    outcome: "A story people finish watching",
    body: [
      "Script, storyboard, voice, animation, sound. We write for the platform first, because a 15-second vertical cut and a 90-second homepage explainer are different films with the same message.",
      "Everything is delivered in the aspect ratios and formats you need, with source files handed over.",
    ],
    deliverables: [
      "Scripting & storyboards",
      "2D & motion graphics",
      "Product & UI animation",
      "Voiceover and sound design",
      "Platform cutdowns",
      "Source file handover",
    ],
  },
  {
    slug: "social-media-management",
    icon: "share",
    title: "Social Media Management",
    short:
      "Always-on content, community management and reporting that ties posts back to pipeline.",
    outcome: "A feed that earns attention weekly",
    body: [
      "We run a monthly content calendar built on themes, not one-off posts, and manage the comments and DMs that turn followers into enquiries.",
      "Reporting is short and honest: what we published, what moved, what we are changing next month.",
    ],
    deliverables: [
      "Channel strategy",
      "Monthly content calendar",
      "Creative production",
      "Community management",
      "Influencer & partnership outreach",
      "Monthly performance reporting",
    ],
  },
  {
    slug: "content-management",
    icon: "pen",
    title: "Content Management",
    short:
      "Original, research-backed writing for websites, blogs, products and email — written by people.",
    outcome: "Copy that ranks and reads well",
    body: [
      "We build a content plan around the questions your buyers actually search, then write it in your voice with an editor in the loop.",
      "Every piece gets internal links, metadata and a clear next action, so content works as a channel and not a chore.",
    ],
    deliverables: [
      "Content strategy & briefs",
      "Website & landing page copy",
      "Long-form articles",
      "Product descriptions",
      "Email sequences",
      "Editing & content refreshes",
    ],
  },
  {
    slug: "search-engine-optimization",
    icon: "search",
    title: "Search Engine Optimization",
    short:
      "Technical fixes, on-page work and clean link building — white hat only, reported transparently.",
    outcome: "Compounding organic traffic",
    body: [
      "We start with a technical audit — crawlability, index bloat, speed, structured data — because on-page work on a broken site is wasted effort.",
      "Then keyword mapping, content, and earned links. No private networks, no rented links, nothing that risks a penalty.",
    ],
    deliverables: [
      "Technical SEO audit",
      "Keyword & intent mapping",
      "On-page optimisation",
      "Local & Maps visibility",
      "Authority & link building",
      "Rank and traffic reporting",
    ],
  },
  {
    slug: "digital-marketing",
    icon: "target",
    title: "Digital Marketing",
    short:
      "Paid search, paid social and lifecycle campaigns managed against cost per acquisition, not clicks.",
    outcome: "Spend you can defend",
    body: [
      "Creative, targeting and landing pages are built as one unit, then tested weekly. We track to revenue where the data allows and to qualified leads where it does not.",
      "You see the same dashboard we do, and you keep every ad account.",
    ],
    deliverables: [
      "Google & Meta ads",
      "Landing pages & CRO",
      "Funnel and lifecycle email",
      "Marketing automation",
      "Conversion tracking setup",
      "Weekly optimisation & reporting",
    ],
  },
];

export const serviceBySlug = (slug) => services.find((s) => s.slug === slug);

// Capability tabs — mirrors the "across multiple platforms" showcase pattern.
export const capabilities = [
  {
    key: "Brand",
    heading: "Identity that survives contact with the market",
    copy:
      "Positioning, naming direction, logo systems and the templates your team reuses. Built to hold up at 16px and on a billboard.",
    points: ["Identity systems", "Brand guidelines", "Campaign creative", "Design systems"],
  },
  {
    key: "Web",
    heading: "Sites engineered around speed and search",
    copy:
      "Design and build in one team, on modern frameworks, measured against Core Web Vitals before launch.",
    points: ["UX & UI", "Next.js builds", "Headless CMS", "E-commerce"],
  },
  {
    key: "Apps",
    heading: "Mobile products scoped to actually ship",
    copy:
      "A real MVP, early builds in TestFlight and Play Console, and store requirements handled up front.",
    points: ["iOS & Android", "Cross-platform", "APIs & backends", "Store submission"],
  },
  {
    key: "Growth",
    heading: "Acquisition measured to cost per customer",
    copy:
      "Paid search, paid social, SEO and lifecycle email run as one plan with one report you can act on.",
    points: ["Paid media", "SEO", "Lifecycle email", "CRO"],
  },
  {
    key: "Content",
    heading: "Words and video that carry the message",
    copy:
      "Research-led writing and motion built for the platform it runs on, in your voice, with an editor in the loop.",
    points: ["Editorial", "Video & motion", "Social content", "Sales collateral"],
  },
];

export const stats = [
  { value: "2016", label: "Building since" },
  { value: "400+", label: "Projects delivered" },
  { value: "8", label: "Service lines" },
  { value: "4", label: "Specialist teams" },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    copy: "We learn the business, the buyer and the numbers that matter before proposing anything.",
  },
  {
    step: "02",
    title: "Plan",
    copy: "A scoped roadmap with milestones, owners and what success looks like at each one.",
  },
  {
    step: "03",
    title: "Design",
    copy: "Concepts, prototypes and reviews in the open — you see the work as it forms, not at the end.",
  },
  {
    step: "04",
    title: "Build",
    copy: "Weekly builds on clean, documented code. Nothing ships without QA on real devices.",
  },
  {
    step: "05",
    title: "Grow",
    copy: "Measure, iterate, expand. The launch is the start of the engagement, not the end of it.",
  },
];

export const industries = [
  "Automobile",
  "Real Estate",
  "Construction",
  "Spa & Salon",
  "Catering",
  "Restaurants",
  "Supermarket",
  "Retail",
  "Finance",
  "Healthcare",
  "Education",
  "Logistics",
];

export const testimonials = [
  {
    name: "Stephanie Kyle",
    role: "Founder, retail brand",
    photo: "/assets/images/testimonial-img1.png",
    quote:
      "I needed a cross-platform app for my business and the Crown Peak Global team delivered exactly that — every detail, minor to major, handled. I approved it right away.",
  },
  {
    name: "John Williams",
    role: "Operations lead",
    photo: "/assets/images/testimonial-img2.png",
    quote:
      "A comprehensive team of professionals who turned around my entire project inside the deadline. Creative solutions with genuinely good customer service.",
  },
  {
    name: "Kevin Ames",
    role: "Product owner",
    photo: "/assets/images/testimonial-img3.png",
    quote:
      "They designed my Android app within a tight time limit. Highly satisfied with the effort the team put into the development.",
  },
  {
    name: "Sara Scholes",
    role: "Marketing manager",
    photo: "/assets/images/testimonial-img4.png",
    quote:
      "The graphic design team was fantastic to work with. My business finally has an identity thanks to the logo they built for us.",
  },
  {
    name: "Simon Hudson",
    role: "E-commerce owner",
    photo: "/assets/images/testimonial-img5.png",
    quote:
      "I approached them for SEO and was amazed by the boost in ranking. The Crown Peak Global team does not disappoint.",
  },
];

export const work = {
  brands: [
    "/assets/images/logo1.png",
    "/assets/images/logo2.png",
    "/assets/images/logo3.png",
    "/assets/images/logo4.png",
    "/assets/images/logo5.png",
    "/assets/images/logo6.png",
    "/assets/images/logo7.png",
    "/assets/images/logo8.png",
    "/assets/images/logo9.png",
  ],
  websites: [
    "/assets/images/mockup-1.png",
    "/assets/images/mockup-2.png",
    "/assets/images/mockup-3.png",
    "/assets/images/mockup-4.png",
    "/assets/images/mockup-5.png",
    "/assets/images/mockup-6.png",
    "/assets/images/mockup-7.png",
    "/assets/images/mockup-8.png",
    "/assets/images/mockup-9.png",
  ],
  apps: [
    "/assets/images/mob-1.png",
    "/assets/images/mob-2.png",
    "/assets/images/mob-3.png",
    "/assets/images/mob-4.png",
    "/assets/images/mob-5.png",
    "/assets/images/mob-6.jpg",
  ],
};

export const faqs = [
  {
    q: "What does Crown Peak Global actually do?",
    a: "We are a full-service digital studio: branding and design, web and mobile development, content and video, and the paid, organic and lifecycle marketing that grows them. Most clients start with one service and expand.",
  },
  {
    q: "Do you work with small businesses and startups?",
    a: "Yes. Engagements are scoped to the stage you are at — a startup usually needs identity plus a fast marketing site, while an established business often needs a rebuild plus a growth engine.",
  },
  {
    q: "How does a project start?",
    a: "Send the contact form on this site. We reply by email with a few questions, then a short call if it looks like a fit. You get a scoped proposal with milestones and a fixed price before any work begins.",
  },
  {
    q: "How much does a project cost?",
    a: "There is no fixed price list, because a one-page site and a multi-market app are not comparable. Tell us the scope through the contact form and you will get a written estimate with the assumptions spelled out.",
  },
  {
    q: "Who owns the work when it is finished?",
    a: "You do — code, design source files, ad accounts, analytics and content. We hand over repositories and credentials at the end of every engagement.",
  },
  {
    q: "Do you redesign an existing site or start over?",
    a: "Whichever is cheaper for the outcome. We audit first: if the current stack is sound we rebuild the front end, and if it is fighting you we migrate to something maintainable.",
  },
  {
    q: "Can you take over a project someone else started?",
    a: "Often, yes. We review the existing code and design files and give you an honest read on what is reusable and what needs replacing before quoting.",
  },
  {
    q: "How do you report on marketing work?",
    a: "A short monthly report: what we shipped, what moved, what we are changing next. You have live dashboard access throughout, so nothing in the report is a surprise.",
  },
  {
    q: "How do we stay in touch during a project?",
    a: "One named point of contact, a shared board for the work, and weekly written updates by email. No chasing several people for a status.",
  },
  {
    q: "How quickly do you reply to an enquiry?",
    a: "Contact form submissions land in our inbox immediately and we reply within one business day.",
  },
];
