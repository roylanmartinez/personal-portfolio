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
import RegionAwareAmericas from "@/components/region-aware-americas";
import RegionAwareEurope from "@/components/region-aware-europe";
import RegionAwareMarkdown from "@/components/region-aware-markdown";
import UsScrollHeader from "@/components/us-scroll-header";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const scopingEmailHref = `mailto:${DATA.contact.email}?subject=${encodeURIComponent(
    DATA.scopingStudy.emailSubject
  )}`;

  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <RegionAwareAmericas>
        <UsScrollHeader />
      </RegionAwareAmericas>

      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <RegionAwareEurope>
                <BlurFade
                  delay={BLUR_FADE_DELAY * 0.7}
                  className="text-xs font-medium tracking-wide text-muted-foreground"
                >
                  {DATA.hero.europe.eyebrow}
                </BlurFade>
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                  yOffset={8}
                  text={DATA.hero.europe.headline}
                />
              </RegionAwareEurope>
              <RegionAwareAmericas>
                <BlurFade
                  delay={BLUR_FADE_DELAY * 0.7}
                  className="text-xs font-medium tracking-wide text-muted-foreground"
                >
                  {DATA.hero.americas.eyebrow}
                </BlurFade>
                <BlurFade
                  delay={BLUR_FADE_DELAY * 0.8}
                  className="inline-flex w-fit rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground"
                >
                  {DATA.hero.americas.pill}
                </BlurFade>
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                  yOffset={8}
                  text={DATA.hero.americas.headline}
                />
              </RegionAwareAmericas>
              <RegionAwareDescription
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                europeDescription={DATA.hero.europe.description}
                americasDescription={DATA.hero.americas.description}
              />
              <BlurFade
                delay={BLUR_FADE_DELAY * 1.2}
                className="flex flex-col items-start gap-3 pt-1"
              >
                <RegionAwareAmericas>
                  <div className="flex flex-wrap items-center gap-2">
                    <Button asChild size="sm" className="shrink-0">
                      <Link href={DATA.cta.href}>{DATA.cta.label}</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="shrink-0">
                      <Link href="#specification">Read the specification outline</Link>
                    </Button>
                  </div>
                </RegionAwareAmericas>
                <p className="text-sm text-muted-foreground">{DATA.credibilityLine}</p>
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
        <section id="specification">
          <div className="mx-auto w-full max-w-2xl">
            <BlurFade delay={BLUR_FADE_DELAY * 2.1}>
              <div className="rounded-2xl border border-border bg-background/70 p-5 shadow-sm sm:p-6">
                <p className="mb-2 inline-flex rounded-full border border-border bg-muted px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {DATA.specification.label}
                </p>
                <h2 className="text-xl font-bold sm:text-2xl">{DATA.specification.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {DATA.specification.statement}
                </p>
                <h3 className="mt-5 text-sm font-semibold">Why heterogeneity</h3>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  {DATA.specification.whyHeterogeneity.map((line) => (
                    <li key={line}>- {line}</li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          </div>
        </section>

        <section id="propagation">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 2.4}>
              <h2 className="text-xl font-bold">{DATA.propagation.heading}</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 2.6}>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {DATA.propagation.intro}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {DATA.propagation.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>

        <section id="positioning">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 2.8}>
              <h2 className="text-xl font-bold">{DATA.positioning.heading}</h2>
            </BlurFade>
            <ol className="grid gap-3">
              {DATA.positioning.items.map((item, idx) => (
                <BlurFade key={item.title} delay={BLUR_FADE_DELAY * 3 + idx * 0.07}>
                  <li className="rounded-xl border bg-background/70 p-4">
                    <h3 className="font-semibold">
                      <span className="mr-2 text-muted-foreground tabular-nums">{idx + 1}.</span>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                    {item.links.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-3">
                        {item.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline underline-offset-4"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                </BlurFade>
              ))}
            </ol>
          </div>
        </section>

        <section id="scoping-study">
          <div className="mx-auto w-full max-w-2xl">
            <BlurFade delay={BLUR_FADE_DELAY * 3.4}>
              <div className="rounded-2xl border border-blue-300/70 bg-blue-50/40 p-5 shadow-sm dark:border-blue-500/50 dark:bg-blue-950/20 sm:p-6">
                <p className="mb-2 inline-flex rounded-full border border-blue-300/80 bg-blue-100/80 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-blue-800 dark:border-blue-400/60 dark:bg-blue-900/40 dark:text-blue-200">
                  {DATA.scopingStudy.label}
                </p>
                <h2 className="text-xl font-bold sm:text-2xl">{DATA.scopingStudy.heading}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {DATA.scopingStudy.intro}
                </p>
                <p className="mt-4 text-sm font-semibold">You receive:</p>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  {DATA.scopingStudy.deliverables.map((line) => (
                    <li key={line}>- {line}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {DATA.scopingStudy.terms}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Button asChild size="sm">
                    <a href={scopingEmailHref}>Email: {DATA.scopingStudy.emailSubject}</a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href={DATA.callCta.href}>{DATA.callCta.label}</Link>
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

      <section id="research">
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
