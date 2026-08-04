/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RegionAwareDescription from "@/components/region-aware-description";
import RegionAwareAmericas from "../components/region-aware-americas";
import RegionAwareMarkdown from "@/components/region-aware-markdown";

const BLUR_FADE_DELAY = 0.04;
export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFade
                delay={BLUR_FADE_DELAY * 0.8}
                className="inline-flex w-fit rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground"
              >
                FedNow and instant-payment advisory
              </BlurFade>
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text="FedNow settles 24/7. Your liquidity management was built for batch windows."
              />
              <RegionAwareDescription
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                europeDescription="Data Specialist focused on AI/agentic model risk, FedNow expansion readiness, liquidity management and payment-clearing optimization."
                americasDescription="Europe already solved continuous settlement with SEPA Instant and TIPS. I help US banks and credit unions apply that playbook: prefunding, liquidity transfers, and netting design grounded in model risk work at a major European bank and published research on payment clearing."
              />
              <BlurFade
                delay={BLUR_FADE_DELAY * 1.2}
                className="flex flex-col items-start gap-3 pt-1"
              >
                <RegionAwareAmericas>
                  <div className="flex flex-wrap items-center gap-2">
                    <Button asChild size="sm" className="shrink-0">
                      <Link
                        href={DATA.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book a 20-minute intro call
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="shrink-0">
                      <Link href="#assessment-offer">See the 2-week assessment</Link>
                    </Button>
                  </div>
                </RegionAwareAmericas>
                <p className="text-sm text-muted-foreground">
                  Model risk management at a major European bank · Published in payment clearing · PhD researcher, optimization and statistics
                </p>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <RegionAwareAmericas>
        <section id="assessment-offer">
          <div className="mx-auto w-full max-w-2xl">
            <BlurFade delay={BLUR_FADE_DELAY * 2.1}>
              <div className="rounded-2xl border border-blue-300/70 bg-blue-50/40 p-5 shadow-sm dark:border-blue-500/50 dark:bg-blue-950/20 sm:p-6">
                <p className="mb-2 inline-flex rounded-full border border-blue-300/80 bg-blue-100/80 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-blue-800 dark:border-blue-400/60 dark:bg-blue-900/40 dark:text-blue-200">
                  FedNow liquidity readiness assessment
                </p>
                <h2 className="text-xl font-bold sm:text-2xl">A fixed-scope first step before bigger transformation work</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  You receive a practical blueprint for prefunding, liquidity transfers and netting design in a continuous-settlement operating model.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>- Current-state and gap memo against 24/7 operating requirements</li>
                  <li>- Written report with prioritized recommendations and sequencing</li>
                  <li>- 60-minute executive readout with Q&amp;A and decision options</li>
                </ul>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-semibold text-foreground">From $7,500 fixed fee</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Fixed scope · 2 weeks · remote · no long-term commitment
                  </p>
                </div>
                <div className="mt-4">
                  <Button asChild size="sm">
                    <Link
                      href={DATA.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a 20-minute intro call
                    </Link>
                  </Button>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
      </RegionAwareAmericas>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <RegionAwareMarkdown
                europeMarkdown={DATA.summary}
                americasMarkdown={DATA.summary_us}
              />
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="how-i-can-help">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">How I can help</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5.3}>
            <p className="text-sm text-muted-foreground">
              Focused engagements, typically 2-12 weeks, in three areas.
            </p>
          </BlurFade>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              {
                title: "AI & Agentic Model Risk",
                description:
                  "Validation frameworks for adversarial-resilient AI systems and agentic workflows in regulated environments, including inventory, challenge and control design.",
                logo: "/mitigation.png",
                logoAlt: "AI and agentic risk mitigation",
              },
              {
                title: "FedNow & Instant-Payment Liquidity",
                description:
                  "24/7 prefunding, liquidity-management transfers and netting design under continuous settlement, adapted from SEPA Instant and TIPS operating patterns.",
                logo: "/icons/fednow.png",
                logoAlt: "FedNow instant payments",
              },
              {
                title: "Data & AI Engineering pipelines",
                description:
                  "Production-grade pipelines for risk analytics, document workflows and systemic/herding risk monitoring in model-driven decisions.",
                logo: "/generative.png",
                logoAlt: "Generative AI and data engineering",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-xl border bg-background/70 p-4 transition-colors"
              >
                {service.logo && (
                  <div className="mb-4 h-12 overflow-hidden rounded-md bg-white">
                    <img
                      src={service.logo}
                      alt={service.logoAlt ?? service.title}
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                )}
                <h3 className="font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="proof-assets">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <h2 className="text-xl font-bold">Proof assets</h2>
          </BlurFade>
          <div className="grid gap-3 md:grid-cols-2">
            {DATA.proofAssets.map((asset, idx) => (
              <BlurFade key={asset.title} delay={BLUR_FADE_DELAY * 6.2 + idx * 0.05}>
                <div className="rounded-xl border bg-background/70 p-4">
                  <h3 className="font-semibold">{asset.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{asset.description}</p>
                  <Link
                    href={asset.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center text-sm font-medium text-blue-600 hover:underline underline-offset-4"
                  >
                    {asset.cta}
                  </Link>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                  {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="hackathons">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <HackathonsSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
