import { Icons } from "@/components/icons";
import { FileDownIcon, HomeIcon } from "lucide-react";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Dax } from "@/components/ui/svgs/dax";
import { ROfficial } from "@/components/ui/svgs/rOfficial";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Azure } from "@/components/ui/svgs/azure";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { PowerBi } from "@/components/ui/svgs/powerbi";
import { Sas } from "@/components/ui/svgs/sas";
import { Celonis } from "@/components/ui/svgs/celonis";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  regionToggleEnabled: false,
  name: "Roylan Martinez",
  initials: "RM",
  url: "https://roylanmartinez.com",
  location: "Barcelona, Spain",
  locationLink: "https://www.google.com/maps/place/barcelona",
  description:
    "Data Specialist focused on AI/agentic model risk, FedNow expansion readiness, liquidity management and payment-clearing optimization.",
  description_us:
    "Independent advisory for U.S. financial institutions on AI/agentic model risk, FedNow expansion readiness, liquidity management and payment-clearing optimization.",
  credibility: [
    "Model Risk Management at a major European bank",
    "Former AI Data Scientist in Center of Excellence in Automation & AI",
    "Doctoral researcher in Optimization & Statistics",
    "Published researcher on payment clearing and benchmark-rate modeling",
  ],
  cta: {
    label: "Request a 20-minute intro call",
    href: "mailto:hello@roylanmartinez.com?subject=20-minute%20intro%20call",
  },
summary_us:
    "Most of my work sits where financial risk, regulation and AI engineering meet. I started in economics with [published research](https://www.aimspress.com/article/id/6422c7dcba35de6516dcac98) on interbank payment clearing and continued with a research [master's in mathematics](/#education) on stochastic differential equations and [benchmark-rate modeling](https://panorama.upv.es/en/ipublic/item/10956963). Today I work in Model Risk Management at a major European bank, governing the lifecycle of quantitative models, machine learning and agentic AI systems. I work across both U.S. and EU supervisory expectations, including SR 11-7 / OCC 2011-12 and ECB/EBA guidance. I bring that practitioner perspective to [independent advisory work](/#how-i-can-help) for regulated financial institutions on adversarial-resilient AI systems, [FedNow and RTP liquidity management](/#how-i-can-help) under ISO 20022 messaging and systemic/herding risk in model-driven decisions.",
  summary:
"Most of my work sits where financial risk, regulation and AI engineering meet. I started in economics with [published research](https://www.aimspress.com/article/id/6422c7dcba35de6516dcac98) on interbank payment clearing and continued with a research [master's in mathematics](/#education) on stochastic differential equations and benchmark-rate modeling. Today I work in Model Risk Management at a major European bank, governing the lifecycle of quantitative models, machine learning and agentic AI systems. I work across EU supervisory expectations, including [ECB/EBA guidance](https://www.eba.europa.eu/regulation-and-policy).",
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
      GoogleScholar: {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=2oaaaeQAAAAJ&hl=en",
        icon: Icons.globe,
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
      title: "Risk Data Specialist | Model Risk Management",
      logoUrl: "/sabadell.png",
      start: "Apr 2026",
      end: "Present",
      description:
        "Governing the end-to-end lifecycle of the bank's quantitative and AI models - IRB, capital, IRRBB, machine learning and agentic AI - and shaping how the model risk framework evolves to cover emerging AI use cases.",
    },
    {
      company: "Allianz",
      href: "https://allianz.com/",
      badges: [],
      location: "Barcelona, Spain",
      title: "AI Data Scientist | Center of Excellence in Automation & AI",
      logoUrl: "/allianz.png",
      start: "Nov 2025",
      end: "Apr 2026",
      description:
        "Built AI and LLM capabilities into production pipelines; engineered a byte-stream document-processing method that reduced reliance on costly OCR services and increased throughput.",
    },
    {
      company: "Allianz",
      href: "https://allianz.com/",
      badges: [],
      location: "Madrid, Spain",
      title: "Pricing Data Scientist | Technical Pricing",
      logoUrl: "/allianz.png",
      start: "May 2024",
      end: "Nov 2025",
      description:
        "My responsabilities have to do with the refinement and the contribution to the development of pricing policies and portfolio defense using machine learning models.",
    },
    {
      company: "Allianz",
      href: "https://allianz.com/",
      badges: [],
      location: "Madrid, Spain",
      title: "Data Scientist | Quality & Fraud",
      logoUrl: "/allianz.png",
      start: "Apr 2023",
      end: "May 2024",
      description:
        "Delivered machine-learning, ETL and process-mining solutions for payment analysis and fraud detection; automated review workflows and saved one full FTE of manual work.",
    },
  ],
  education: [
    {
      school: "Polytechnic University of Valencia",
      href: "https://www.upv.es",
      degree: "Phd in Optimization & Statistics",
      logoUrl: "/upv.png",
      start: "2026",
      end: "Present",
    },
    {
      school: "University of Valencia",
      href: "https://www.uv.es",
      degree: "MSc in Mathematics research",
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
  projects: [
    {
      title: "In-house project at Allianz: fraud detection for payments",
      href: "https://www.allianz.com/",
      dates: "2023",
      active: true,
      description:
        "Built an end-to-end ML solution for payment analysis and fraud flagging, covering data modeling, ETL and deployment so the team could automate review work that had previously required one full FTE.",
      technologies: ["Python", "Azure", "ML", "ETL"],
      label: "In-house project at Allianz",
      links: [
        {
          type: "Employer",
          href: "https://www.allianz.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/allianz.gif",
      video: "",
    },
    {
      title: "Clearing optimization, open-sourced",
      href: "https://github.com/roylanmartinez/Payment_Clearing",
      dates: "2023 - Present",
      active: true,
      description:
        "Released an implementation of the netting and clearing-optimization methods from my published research as an open-source library, giving practitioners a practical entry point into the mathematics behind payment clearing.",
      technologies: ["Python", "Graph theory", "Optimization"],
      label: "Open-source proof asset",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/roylanmartinez/Payment_Clearing",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Paper",
          href: "https://www.aimspress.com/article/id/6422c7dcba35de6516dcac98",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/graph.gif",
      video: "",
    },
    {
      title: "In-house project at Allianz: replacing cloud OCR with a leaner LLM pipeline",
      href: "https://www.allianz.com/",
      dates: "2025",
      active: true,
      description:
        "Engineered a raw byte-stream chunking approach that fed documents directly into LLM workflows, removing a costly OCR dependency and improving throughput for document-heavy operations.",
      technologies: ["Python", "LLM", "Azure", "Pipelines"],
      label: "In-house project at Allianz",
      links: [
        {
          type: "Employer",
          href: "https://www.allianz.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/allianz.gif",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Analysis of the Stochastic Modeling of EURIBOR and SOFR",
      dates: "Sep 2025",
      location: "Working paper",
      description:
        "Examines how structural differences between EURIBOR and SOFR break conventional modeling assumptions and what that means for benchmark-rate modeling.",
      image: "",
      links: [
        {
          title: "Paper",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://panorama.upv.es/en/ipublic/item/10956963",
        },
      ],
    },
    {
      title: "Discrete Markov Chain Applications in Clearing Optimization",
      dates: "Mar 2023",
      location: "Working paper",
      description:
        "Extends the clearing-optimization framework using discrete Markov chain methods and discusses practical implications for interbank netting.",
      image: "",
      links: [],
    },
    {
      title: "Optimization Proposals to the Payment Clearing",
      dates: "Feb 2023",
      location: "Published research",
      description:
        "Applies graph theory and mathematical optimization to interbank clearing, showing how alternative netting methods improve traditional compensation logic.",
      image: "",
      links: [
        {
          title: "Paper",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.aimspress.com/article/id/6422c7dcba35de6516dcac98",
        },
      ],
    },
  ],
  proofAssets: [
    {
      title: "Published paper: Optimization Proposals to the Payment Clearing",
      description: "Published research on graph-theoretic optimization approaches to interbank clearing.",
      href: "https://www.aimspress.com/article/id/6422c7dcba35de6516dcac98",
      cta: "Read paper",
    },
    {
      title: "Published Paper: Stochastic Modeling of EURIBOR and SOFR",
      description: "Working paper on benchmark-rate modeling assumptions and structural differences.",
      href: "https://panorama.upv.es/en/ipublic/item/10956963",
      cta: "Find on Scholar",
    },
    {
      title: "Numlet: numbers to words, in Spanish",
      description: "Developed in 2019, Numlet is an open-source Python library that spells out any number, up to 10^1200, handling negatives and arbitrary-precision decimals. Published on PyPI, MIT-licensed.",
      href: "https://github.com/roylanmartinez/Numlet",
      cta: "View on GitHub",
    },
    {
      title: "Google Scholar profile",
      description: "Public citation profile and publication index.",
      href: "https://scholar.google.com/citations?user=2oaaaeQAAAAJ&hl=en",
      cta: "Open profile",
    },
  ],
} as const;
