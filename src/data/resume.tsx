import { Icons } from "@/components/icons";
import { CalendarIcon, FileDownIcon, HomeIcon } from "lucide-react";
import { Dax } from "@/components/ui/svgs/dax";
import { ROfficial } from "@/components/ui/svgs/rOfficial";
import { Python } from "@/components/ui/svgs/python";
import { Azure } from "@/components/ui/svgs/azure";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { PowerBi } from "@/components/ui/svgs/powerbi";
import { Sas } from "@/components/ui/svgs/sas";
import { Celonis } from "@/components/ui/svgs/celonis";
import { Docker } from "@/components/ui/svgs/docker";
import { Csharp } from "@/components/ui/svgs/csharp";

const PAPER_URL = "https://doi.org/10.3934/DSFE.2023005";
const THESIS_URL = "https://panorama.upv.es/en/ipublic/item/10956963";
const SCHOLAR_URL = "https://scholar.google.com/citations?user=2oaaaeQAAAAJ&hl=en";
const CLEARING_CODE_URL = "https://github.com/roylanmartinez/Payment_Clearing";

export const DATA = {
  regionToggleEnabled: true,
  name: "Roylan Martinez Vargas",
  initials: "RMV",
  url: "https://roylanmartinez.com",
  location: "Barcelona, Spain",
  locationLink: "https://www.google.com/maps/place/barcelona",

  // Shared surfaces. `description` is rendered into the Open Graph image and
  // therefore reaches every visitor; it must stay neutral.
  description:
    "Model Risk Management, Banco Sabadell · Optimization and Statistics · Payment clearing research",
  metaDescription:
    "Roylan Martinez Vargas. Risk Data Specialist in Model Risk Management at Banco Sabadell, doctoral researcher in optimization and statistics, and author of published work on payment clearing and benchmark-rate modeling.",
  credibilityLine:
    "Model Risk Management, Banco Sabadell · Published in Data Science in Finance and Economics · PhD candidate, Optimization and Statistics",

  // Hero, per region.
  hero: {
    europe: {
      eyebrow: "Risk Data Specialist, Model Risk Management · Banco Sabadell",
      headline: "Governance of quantitative and AI models.",
      description:
        "Risk Data Specialist in Model Risk Management at Banco Sabadell, Barcelona. Doctoral researcher in optimization and statistics at the Polytechnic University of Valencia.",
    },
    americas: {
      eyebrow: "Roylan Martinez Vargas · Liquidity-management agents on instant-payment rails",
      pill: "Heterogeneity by design · FedNow · RTP · ISO 20022",
      headline:
        "Heterogeneity by design for liquidity-management agents on FedNow and RTP.",
      description:
        "I am producing a named, publishable specification for how automated liquidity-management agents on FedNow, RTP and ISO 20022 rails should be designed so that a population of them does not converge on the same behavior under stress. Banks, credit unions and certified FedNow Service Providers validate and adopt it through scoped engagements.",
    },
  },

  cta: {
    label: "Request a scoping study",
    href: "#scoping-study",
  },
  callCta: {
    label: "Book a 20-minute call",
    href: "/schedule",
  },

  summary_us:
    "Most of my work sits where financial risk, regulation and AI engineering meet. I started in economics with [published research](" +
    PAPER_URL +
    ") on interbank payment clearing and continued with a research [master's in mathematics](/#education) on stochastic differential equations and [benchmark-rate modeling](" +
    THESIS_URL +
    "). Today I work in Model Risk Management at Banco Sabadell, governing the lifecycle of quantitative models, machine learning and agentic AI systems, and I am a doctoral researcher in optimization and statistics at the Polytechnic University of Valencia. I work across U.S. and EU supervisory expectations, including SR 11-7 / OCC 2011-12 and ECB/EBA guidance. I am based in Barcelona, where SEPA Instant and TIPS have operated continuous settlement for several years, and I write the [specification](/#specification) for the U.S. rails that are converging on the same operating model.",
  summary:
    "I work in Model Risk Management at Banco Sabadell in Barcelona, where I am responsible for lifecycle governance of the bank's quantitative and AI models: IRB and capital models, IRRBB, traditional machine learning, and agentic AI systems. The work covers model inventory, validation and monitoring standards, and the adaptation of the model risk framework to AI use cases under [ECB and EBA expectations](https://www.eba.europa.eu/regulation-and-policy).\n\n" +
    "Before Sabadell I spent three years at Allianz in Madrid and Barcelona as a data scientist: first in fraud and quality analytics, then in technical pricing, and finally in the Center of Excellence in Automation & AI, where I built LLM and document-processing capabilities into production pipelines.\n\n" +
    "My academic background is in economics (BSc, Autonomous University of Barcelona) and mathematics (research MSc, awarded jointly by the University of Valencia and the Polytechnic University of Valencia). My [published research](" +
    PAPER_URL +
    ") applies graph theory and optimization to interbank payment clearing. My master's thesis analyzed the stochastic modeling of EURIBOR and SOFR. I am now a doctoral student in Optimization and Statistics at the Polytechnic University of Valencia.",

  // U.S. version only.
  specification: {
    label: "Deliverable",
    heading:
      "A heterogeneity-by-design specification for liquidity-management agents on instant-payment rails",
    statement:
      "The deliverable is a written, versioned specification for liquidity-management agents operating on 24/7 instant-payment rails: FedNow, RTP, and the ISO 20022 message set they share. It defines the decision functions such an agent performs (prefunding, intraday liquidity transfers, netting and queue management, threshold and alert logic) and, for each function, the design constraints that keep a population of agents heterogeneous: diversity in objective functions, parameterization, data windows and triggers, so that institutions running similar tools do not act in lockstep when conditions change. It includes a validation protocol that a model risk function can run against an agent before deployment, mapped to SR 11-7 / OCC 2011-12 expectations, and a conformance checklist that a Service Provider can apply across its client base. It is being written for publication and will carry a version number, a change log and public references. Engagements are how the specification is validated and delivered; they are not the product.",
    whyHeterogeneity: [
      "Continuous settlement removes the batch windows that liquidity management was built around. The gap is being filled by automated agents.",
      "Those agents are increasingly sourced from a small number of providers and tuned to similar defaults.",
      "Correlated behavior across agents is a liquidity-risk source that no single institution can observe from its own position. The specification is written to keep it from arising by construction.",
    ],
  },
  propagation: {
    heading: "How it reaches institutions",
    intro:
      "Certified FedNow Service Providers connect and operate the rail on behalf of many institutions at once. A specification adopted at the provider level reaches every institution on that provider's platform without a separate project at each one.",
    // Placeholders. Fill from the same sources as the petition exhibits before publishing.
    points: [
      "[N] certified FedNow Service Providers [source].",
      "[M] banks and credit unions served through those providers, in [K] states [source].",
      "Engagements with individual banks and credit unions validate the specification against real operating constraints. Engagements with providers put it into their product and conformance process.",
    ],
  },
  positioning: {
    heading: "Basis for the work",
    items: [
      {
        title: "Model risk governance at Banco Sabadell",
        body:
          "In Model Risk Management I govern the lifecycle of the bank's quantitative and AI models, including agentic AI, under ECB and EBA expectations. Writing validation standards for automated decision systems inside a regulated bank is the daily work the specification's validation protocol draws on. I map that protocol to SR 11-7 / OCC 2011-12 so a U.S. model risk function can use it without translation.",
        links: [],
      },
      {
        title: "Published work on payment clearing",
        body:
          "Optimization proposals to the payment clearing (Data Science in Finance and Economics, 2023) applies graph theory and optimization to multilateral netting and the capital held against settlement. The netting and queue-management sections of the specification build on it. Code accompanying the paper is public on GitHub.",
        links: [
          { label: "Paper", href: PAPER_URL },
          { label: "Code", href: CLEARING_CODE_URL },
        ],
      },
      {
        title: "Stochastic modeling of SOFR and EURIBOR",
        body:
          "My master's thesis (Polytechnic University of Valencia, 2025) analyzes how the construction of SOFR and EURIBOR changes the stochastic models that describe them. Intraday funding cost on an instant rail is a function of those rate dynamics.",
        links: [{ label: "Thesis", href: THESIS_URL }],
      },
      {
        title: "Production AI at Allianz",
        body:
          "Three years building fraud-detection models and LLM document pipelines that ran in production, which is the level at which agent behavior has to be specified.",
        links: [],
      },
    ],
  },
  scopingStudy: {
    label: "First engagement",
    heading: "Scoping study",
    intro:
      "A fixed-scope study for one bank, one credit union, or one Service Provider. It produces something you keep and something the specification needs.",
    deliverables: [
      "An inventory of the liquidity-management decisions you currently automate or plan to automate on FedNow or RTP, mapped to the specification's decision functions.",
      "A heterogeneity assessment: where your configuration coincides with common defaults and where it does not.",
      "A written memo with findings and recommended next steps, and a draft of the specification section your case informs. You choose whether to be named as a validation partner or kept confidential.",
      "One working session with treasury, payments and model risk.",
    ],
    // Placeholder duration. Set before publishing.
    terms:
      "Scope and terms are agreed in writing before work starts. Duration is [2 to 3] weeks. Working sessions are scheduled in U.S. Eastern business hours.",
    emailSubject: "Scoping study",
  },

  avatarUrl: "/me.png",
  skills: [
    { name: "Python (6+ years)", icon: Python },
    { name: "SQL (Transact-SQL, PROC SQL)", icon: Postgresql },
    { name: "DAX", icon: Dax },
    { name: "R", icon: ROfficial },
    { name: "C", icon: Csharp },
    { name: "Microsoft Azure (Cloud Services, Synapse, Foundry)", icon: Azure },
    { name: "Docker", icon: Docker },
    { name: "SAS", icon: Sas },
    { name: "Celonis", icon: Celonis },
    { name: "Power BI", icon: PowerBi },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/schedule", icon: CalendarIcon, label: "Schedule", region: "americas" },
    {
      href: "/resume.pdf",
      icon: FileDownIcon,
      label: "Resume",
      region: "americas",
      download: true,
    },
  ],
  contact: {
    email: "hello@roylanmartinez.com",
    tel: "+34654608447",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/roylanmartinez",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/roylanmartinezvargas/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hello@roylanmartinez.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Banco Sabadell",
      href: "https://bancosabadell.com/",
      badges: [],
      location: "Barcelona, Spain",
      title: "Risk Data Specialist, Model Risk Management",
      logoUrl: "/sabadell.png",
      start: "Apr 2026",
      end: "Present",
      description:
        "Lifecycle governance of the bank's quantitative and AI models, including IRB and capital models, IRRBB, machine learning and agentic AI systems. Contributes to the evolution of the model risk management framework to cover emerging AI use cases.",
    },
    {
      company: "Allianz",
      href: "https://allianz.com/",
      badges: [],
      location: "Barcelona, Spain",
      title: "AI Data Scientist, Center of Excellence in Automation & AI",
      logoUrl: "/allianz.png",
      start: "Nov 2025",
      end: "Apr 2026",
      description:
        "Built LLM and AI capabilities into production data pipelines. Designed a byte-stream document-processing method that replaced a specialized cloud OCR service and increased throughput.",
    },
    {
      company: "Allianz",
      href: "https://allianz.com/",
      badges: [],
      location: "Madrid, Spain",
      title: "Pricing Data Scientist, Technical Pricing",
      logoUrl: "/allianz.png",
      start: "May 2024",
      end: "Nov 2025",
      description:
        "Development and refinement of technical pricing and portfolio-defense models using machine learning.",
    },
    {
      company: "Allianz",
      href: "https://allianz.com/",
      badges: [],
      location: "Madrid, Spain",
      title: "Data Scientist, Quality & Fraud",
      logoUrl: "/allianz.png",
      start: "Apr 2023",
      end: "May 2024",
      description:
        "Machine learning, ETL and process-mining work for fraud, quality and recoveries. Built an end-to-end system for payment analysis and fraud detection that removed one FTE of manual review.",
    },
  ],
  education: [
    {
      school: "Polytechnic University of Valencia",
      href: "https://www.upv.es",
      degree: "PhD candidate, Optimization and Statistics",
      logoUrl: "/upv.png",
      start: "2026",
      end: "Present",
    },
    {
      school: "University of Valencia and Polytechnic University of Valencia",
      href: "https://www.uv.es",
      degree: "MSc in Mathematics (research), joint degree",
      logoUrl: "/uv.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Autonomous University of Barcelona",
      href: "https://www.uab.cat",
      degree: "BSc in Economics",
      logoUrl: "/uab.jpg",
      start: "2018",
      end: "2022",
    },
  ],
  projectsIntro: {
    europe: "In-house projects at Allianz and code from my research.",
    americas: "In-house projects at Allianz and the code behind the payment-clearing paper.",
  },
  projects: [
    {
      title: "In-house project at Allianz: fraud detection for payments",
      href: "https://www.allianz.com/",
      dates: "2023",
      active: true,
      description:
        "End-to-end machine-learning solution for payment analysis and fraud flagging, covering data modeling, ETL and deployment. Automated review work that had previously required one full FTE.",
      technologies: ["Python", "Azure", "ML", "ETL"],
      label: "In-house project at Allianz",
      links: [
        {
          type: "Employer",
          href: "https://www.allianz.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fraud.gif",
      video: "",
    },
    {
      title: "Payment clearing: code accompanying the paper",
      href: CLEARING_CODE_URL,
      dates: "2023",
      active: true,
      description:
        "Notebook and source for the netting and clearing-optimization methods in *Optimization proposals to the payment clearing* (2023).",
      technologies: ["Python", "Graph theory", "Optimization"],
      label: "Research code",
      links: [
        {
          type: "GitHub",
          href: CLEARING_CODE_URL,
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Paper",
          href: PAPER_URL,
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/graph.gif",
      video: "",
    },
    {
      title: "In-house project at Allianz: replacing cloud OCR with an LLM pipeline",
      href: "https://www.allianz.com/",
      dates: "2025",
      active: true,
      description:
        "Raw byte-stream chunking approach that feeds documents directly into LLM workflows, removing a costly OCR dependency and improving throughput for document-heavy operations.",
      technologies: ["Python", "LLM", "Azure", "Pipelines"],
      label: "In-house project at Allianz",
      links: [
        {
          type: "Employer",
          href: "https://www.allianz.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/OCR.gif",
      video: "",
    },
  ],
  researchIntro: {
    europe:
      "Publications and thesis work in payment clearing and benchmark-rate modeling, continued as a doctoral researcher.",
    americas: "Publications and thesis work that the specification builds on.",
  },
  researchProfile: {
    label: "Google Scholar profile",
    href: SCHOLAR_URL,
  },
  // Rendered by the timeline in hackathons-section.tsx. `location` is the status label.
  hackathons: [
    {
      title: "Análisis de la modelización estocástica del EURIBOR y SOFR",
      dates: "2025",
      location: "Master's thesis · Polytechnic University of Valencia, RiUnet institutional repository",
      description:
        "Analysis of the stochastic modeling of EURIBOR and SOFR. Examines how the structural differences between EURIBOR and SOFR affect conventional stochastic modeling assumptions for benchmark rates.",
      image: "/icons/stochastic.PNG",
      links: [
        {
          title: "Thesis",
          icon: <Icons.globe className="h-4 w-4" />,
          href: THESIS_URL,
        },
      ],
    },
    {
      title: "Optimization proposals to the payment clearing",
      dates: "2023",
      location:
        "Published article · Data Science in Finance and Economics, 3(1), 76 to 100 · DOI 10.3934/DSFE.2023005",
      description:
        "Applies graph theory and mathematical optimization to multilateral interbank clearing and shows how alternative netting methods reduce the capital tied up in settlement.",
      image: "/icons/optimization_payment.PNG",
      links: [
        {
          title: "Paper",
          icon: <Icons.globe className="h-4 w-4" />,
          href: PAPER_URL,
        },
      ],
    },
  ],
} as const;
