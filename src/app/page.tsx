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
  const credibilityTickerItems = [...DATA.credibility, ...DATA.credibility];

  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <RegionAwareDescription
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                europeDescription={DATA.description}
                americasDescription={DATA.description_us}
              />
              <BlurFade
                delay={BLUR_FADE_DELAY * 1.2}
                className="flex flex-col items-start gap-3 pt-1"
              >
                <div className="credibility-ticker w-full max-w-[640px] overflow-hidden py-1">
                  <div className="credibility-ticker-track flex w-max items-center gap-2 pr-2">
                    {credibilityTickerItems.map((item, idx) => (
                      <span
                        key={`${item}-${idx}`}
                        className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-border/70 bg-background/85 px-3 py-1 text-xs text-muted-foreground sm:text-sm"
                      >
                        <span
                          aria-hidden
                          className="size-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 shadow-[0_0_0_3px_rgba(34,197,94,0.22)]"
                        />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <RegionAwareAmericas>
                  <div className="mt-3 flex flex-col items-start gap-3 rounded-2xl border border-border/60 bg-background/70 px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:gap-4">
                    <Button asChild size="sm" className="shrink-0">
                      <Link
                        href={DATA.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {DATA.cta.label}
                      </Link>
                    </Button>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Accepting a limited number of advisory engagements · booking for Q4 2026
                    </p>
                  </div>
                </RegionAwareAmericas>
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
      <section id="services">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">How I can help</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5.2}>
            <p className="text-sm font-medium text-foreground">
              Entry-point offer: FedNow liquidity readiness assessment - fixed scope, 2 weeks.
            </p>
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
                  "24/7 prefunding, liquidity-management transfers and netting design under continuous settlement. Europe solved this with SEPA Instant and TIPS; I bring that playbook to FedNow participants.",
                logo: "/icons/fednow.png",
                logoAlt: "FedNow instant payments",
                featured: true,
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
                className={`rounded-xl border p-4 transition-colors ${
                  service.featured
                    ? "border-blue-300/70 bg-blue-50/40 dark:border-blue-500/50 dark:bg-blue-950/20"
                    : "bg-background/70"
                }`}
              >
                {service.logo && (
                  <div
                    className={`mb-4 h-12 overflow-hidden rounded-md ${
                      service.featured ? "bg-[#3b57a4]" : "bg-white"
                    }`}
                  >
                    <img
                      src={service.logo}
                      alt={service.logoAlt ?? service.title}
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                )}
                {service.featured && (
                  <p className="mb-2 inline-flex rounded-full border border-blue-300/80 bg-blue-100/80 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-blue-800 dark:border-blue-400/60 dark:bg-blue-900/40 dark:text-blue-200">
                    Featured
                  </p>
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
