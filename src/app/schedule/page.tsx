import type { Metadata } from "next";
import { DATA } from "@/data/resume";
import { CalendlyScheduleEmbed } from "@/components/calendly-schedule-embed";

export const metadata: Metadata = {
  title: "Schedule a consultation",
  description:
    "Book an initial advisory conversation with Roylan Martinez Vargas.",
};

export default function SchedulePage() {
  return (
    <main className="min-h-dvh">
      <section className="space-y-6">
        <header className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Schedule a consultation
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            This conversation is for risk officers, treasury and payments leads,
            and research collaborators evaluating advisory support on quantitative
            risk, clearing optimization, and AI systems in banking. We use the
            call to understand your current priorities and define whether there is
            a clear fit for a focused engagement.
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
            <li>No cost for an initial conversation.</li>
            <li>
              If there is a fit, I will follow up with a written scope for next
              steps.
            </li>
          </ul>
        </section>

        <CalendlyScheduleEmbed email={DATA.contact.email} />
      </section>
    </main>
  );
}