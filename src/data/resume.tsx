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
const SPEC_URL = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7431638";
const SPEC_CODE_URL = "https://github.com/roylanmartinez/heterogeneity-by-design";

export const DATA = {
  regionToggleEnabled: false,
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
      eyebrow: "Roylan Martinez Vargas · Liquidity management on FedNow and RTP",
      pill: "Heterogeneity by design · FedNow · RTP · ISO 20022",
      headline:
        "Your liquidity management runs on the same defaults as the bank next door. Under stress, you move together.",
      description:
        "On FedNow and RTP, prefunding, intraday transfers and thresholds are increasingly set by automated agents. Most come from a few providers and ship with similar defaults, so institutions that never coordinated react to stress the same way, and none of them can see it from inside. I design liquidity-management and clearing methods that keep those agents mathematically different by construction, publish them as an open technical specification, and put them in place through advisory and implementation-oversight engagements.",
      primaryCta: { label: "See the scoping study", href: "#scoping-study" },
      secondaryCta: { label: "Read the specification", href: "#specification" },
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
    "). After the master's I began a doctorate in optimization and statistics at the Polytechnic University of Valencia, working on stochastic and optimization models for payment systems. Today I work in Model Risk Management at Banco Sabadell, governing the lifecycle of quantitative models, machine learning and agentic AI systems. I work across U.S. and EU supervisory expectations, including SR 11-7 / OCC 2011-12 and ECB/EBA guidance. I am based in Barcelona, where SEPA Instant and TIPS have run continuous settlement for several years. I design heterogeneous liquidity-management and clearing methods for FedNow and RTP, publish them as the [specification](/#specification), and embed them through advisory and implementation-oversight engagements.",
  summary:
    "I work in Model Risk Management at Banco Sabadell in Barcelona, where I am responsible for lifecycle governance of the bank's quantitative and AI models: IRB and capital models, IRRBB, traditional machine learning, and agentic AI systems. The work covers model inventory, validation and monitoring standards, and the adaptation of the model risk framework to AI use cases under [ECB and EBA expectations](https://www.eba.europa.eu/regulation-and-policy).\n\n" +
    "Before Sabadell I spent three years at Allianz in Madrid and Barcelona as a data scientist: first in fraud and quality analytics, then in technical pricing, and finally in the Center of Excellence in Automation & AI, where I built LLM and document-processing capabilities into production pipelines.\n\n" +
    "My academic background is in economics (BSc, Autonomous University of Barcelona) and mathematics (research MSc, awarded jointly by the University of Valencia and the Polytechnic University of Valencia), followed by a doctorate in Optimization and Statistics at the Polytechnic University of Valencia, working on stochastic and optimization models for payment systems. My [published research](" +
    PAPER_URL +
    ") applies graph theory and optimization to interbank payment clearing. My master's thesis analyzed the stochastic modeling of EURIBOR and SOFR.",

  // U.S. version only.
  specification: {
    label: "The method",
    heading:
      "Heterogeneity by Design for AI Liquidity Management Agents on Instant Payment Rails: A Conformance Specification",
    statement:
      "The specification applies to software agents that generate or execute Liquidity Management Transfer recommendations on an instant-payment rail such as FedNow. It defines three things. A population-level index of correlated behavior, built from the net internal debt of a payment network under a common rate shock. Design requirements that keep agent behavior different across institutions by construction. And a conformance test that an institution, or a Service Provider acting for many institutions, can run to verify heterogeneity without disclosing proprietary models. Heterogeneity is a property of the population, not of any single institution; it cannot be purchased by one participant alone. Version 1.0 was published on SSRN on September 7, 2026, with a public reference implementation that reproduces every number in it. Thresholds in this version are provisional. Advisory and implementation-oversight engagements are how it reaches an institution. The engagement delivers the method; the method is the object.",
    version: "Version 1.0 · September 7, 2026",
    links: [
      { label: "Specification (SSRN)", href: SPEC_URL },
      { label: "Reference implementation (GitHub)", href: SPEC_CODE_URL },
    ],
    whyHeterogeneity: [
      "Continuous settlement removes the batch windows that liquidity management was built around. The gap is being filled by automated agents.",
      "Those agents are increasingly sourced from a small number of providers and tuned to similar defaults.",
      "Correlated behavior across agents is a liquidity-risk source no single institution can observe from its own position. The specification is written to keep it from arising by construction.",
    ],
  },
  audience: {
    heading: "Who this is for",
    items: [
      {
        title: "Banks",
        body:
          "Treasury and payments teams that automate prefunding, intraday transfers or thresholds on FedNow or RTP, and the model risk function that has to validate those agents under SR 11-7 / OCC 2011-12. The scoping study shows where your configuration coincides with common defaults and what to change.",
      },
      {
        title: "Credit unions",
        body:
          "Institutions that reach the rail through a Service Provider and run settings they did not choose. The study gives you an inventory of the decisions being made on your behalf and the questions to put to your provider.",
      },
      {
        title: "FedNow Service Providers",
        body:
          "You connect and operate the rail for many institutions at once. Adopting the method once covers your whole client base, with no separate project at each institution. The conformance test runs across the institutions you serve without disclosing your models or theirs.",
      },
    ],
  },
  positioning: {
    heading: "Basis for the work",
    items: [
      {
        title: "Model risk governance at Banco Sabadell",
        body:
          "In Model Risk Management I govern the lifecycle of the bank's quantitative and AI models, including agentic AI, under ECB and EBA expectations. Writing validation standards for automated decision systems inside a regulated bank is the daily work the specification's conformance test draws on. I map that test to SR 11-7 / OCC 2011-12 so a U.S. model risk function can use it without translation.",
        links: [],
      },
      {
        title: "Published work on payment clearing",
        body:
          "Optimization proposals to the payment clearing (Data Science in Finance and Economics, 2023) applies graph theory and optimization to multilateral netting and the capital held against settlement. The specification takes its payment network and its net internal debt measure from this paper. Code accompanying the paper is public on GitHub.",
        links: [
          { label: "Paper", href: PAPER_URL },
          { label: "Code", href: CLEARING_CODE_URL },
        ],
      },
      {
        title: "Stochastic modeling of SOFR and EURIBOR",
        body:
          "My master's thesis (Polytechnic University of Valencia, 2025) analyzes how the construction of SOFR and EURIBOR changes the stochastic models that describe them. The specification takes its rate-shock engine, a Hull-White short rate with a bounded perturbation, from this thesis.",
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
      "A fixed-scope study for one bank, one credit union, or one Service Provider. You get a clear picture of the liquidity decisions you have automated on FedNow or RTP, where your settings match everyone else's, and what to change first.",
    deliverables: [
      "An inventory of the liquidity-management decisions you automate or plan to automate on FedNow or RTP, mapped to the specification's decision functions.",
      "A heterogeneity assessment: where your prefunding, threshold and netting settings coincide with common defaults and where they do not.",
      "A written memo with findings, recommended changes and sequencing.",
      "One working session with treasury, payments and model risk, with a readout and decision options.",
      "Optional: if your case informs a section of the specification, I draft that section and you choose whether to be named or kept confidential. Offered, not required.",
    ],
    price: "$7,500 fixed fee",
    termsLine: "Fixed scope · Two weeks · Remote · No long-term commitment",
    terms:
      "Scope and terms are agreed in writing before work starts. Working sessions are scheduled in U.S. Eastern business hours.",
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
    americas: "The specification, and the publications and thesis work it builds on.",
  },
  researchProfile: {
    label: "Google Scholar profile",
    href: SCHOLAR_URL,
  },
  // Rendered by the timeline in hackathons-section.tsx. `location` is the status label.
  hackathons: [
    {
      title:
        "Heterogeneity by Design for AI Liquidity Management Agents on Instant Payment Rails: A Conformance Specification",
      dates: "2026",
      location: "Working paper, version 1.0 · SSRN, September 7, 2026 · Reference implementation on GitHub",
      description:
        "Defines a population-level index of correlated behavior among liquidity-management agents on an instant-payment rail, design requirements that keep agent behavior heterogeneous by construction, and a conformance test an institution or a Service Provider can run without disclosing proprietary models. Builds on the 2023 clearing paper and the 2025 thesis.",
      image: "/icons/stochastic.PNG",
      links: [
        {
          title: "SSRN",
          icon: <Icons.globe className="h-4 w-4" />,
          href: SPEC_URL,
        },
        {
          title: "Code",
          icon: <Icons.github className="h-4 w-4" />,
          href: SPEC_CODE_URL,
        },
      ],
    },
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
