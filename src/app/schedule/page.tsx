import type { Metadata } from "next";
import { DATA } from "@/data/resume";
import { CalendlyScheduleEmbed } from "@/components/calendly-schedule-embed";
import RegionAwareAmericas from "@/components/region-aware-americas";
import RegionAwareEurope from "@/components/region-aware-europe";

export const metadata: Metadata = {
  title: "Schedule a call",
  description: `Book a 20-minute video call with ${DATA.name}.`,
  robots: {
    index: false,
    follow: true,
  },
};

export default function SchedulePage() {
  return (
    <main className="min-h-dvh">
      <RegionAwareEurope>
        <section className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            To get in touch, write to{" "}
            <a
              className="text-primary underline underline-offset-4"
              href={`mailto:${DATA.contact.email}`}
            >
              {DATA.contact.email}
            </a>
            .
          </p>
        </section>
      </RegionAwareEurope>
      <RegionAwareAmericas>
        <section className="space-y-6">
          <header className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Schedule a call
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A 20-minute video call for treasury, payments and model risk leads at
              banks, credit unions and FedNow Service Providers who want to discuss a
              scoping study or the specification.
            </p>
          </header>

          <section
            aria-labelledby="what-to-expect"
            className="rounded-xl border border-border bg-card/70 p-5"
          >
            <h2 id="what-to-expect" className="text-lg font-semibold">
              What to expect
            </h2>
            <ul className="mt-3 space-y-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <li>20 minutes.</li>
              <li>Video call.</li>
              <li>No cost.</li>
              <li>If there is a fit, I follow up with a written scope.</li>
            </ul>
          </section>

          <CalendlyScheduleEmbed email={DATA.contact.email} />
        </section>
      </RegionAwareAmericas>
    </main>
  );
}
