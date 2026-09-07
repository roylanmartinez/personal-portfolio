import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import RegionAwareAmericas from "@/components/region-aware-americas";
import RegionAwareEurope from "@/components/region-aware-europe";

const linkClassName =
  "text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm";

export default function ContactSection() {
  const scopingEmailHref = `mailto:${DATA.contact.email}?subject=${encodeURIComponent(
    DATA.scopingStudy.emailSubject
  )}`;

  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <RegionAwareEurope>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact</h2>
          <p className="mx-auto max-w-lg text-muted-foreground text-balance">
            For professional or research matters, write to{" "}
            <Link href={`mailto:${DATA.contact.email}`} className={linkClassName}>
              {DATA.contact.email}
            </Link>{" "}
            or connect on{" "}
            <Link
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              LinkedIn
            </Link>
            .
          </p>
        </RegionAwareEurope>
        <RegionAwareAmericas>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
          <p className="mx-auto max-w-lg text-muted-foreground text-balance">
            For a scoping study, or to discuss the specification, write to{" "}
            <Link href={scopingEmailHref} className={linkClassName}>
              {DATA.contact.email}
            </Link>{" "}
            (subject: &ldquo;{DATA.scopingStudy.emailSubject}&rdquo;) or{" "}
            <Link href={DATA.callCta.href} className={linkClassName}>
              book a 20-minute call
            </Link>
            . I reply within two business days.
          </p>
          <p className="mx-auto max-w-lg text-muted-foreground text-sm text-balance">
            Based in Barcelona. Working sessions in U.S. Eastern business hours, typically 8am to 1pm ET.
          </p>
          <p className="mx-auto max-w-lg text-muted-foreground/80 text-xs text-balance">
            Professional and academic references available on request.
          </p>
        </RegionAwareAmericas>
      </div>
    </div>
  );
}
