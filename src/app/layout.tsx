import Navbar from "@/components/navbar";
import { RegionProvider } from "@/components/region-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const cabinetGrotesk = localFont({
  src: "../../public/fonts/CabinetGrotesk-Medium.ttf",
  variable: "--font-sans",
  display: "swap",
});

const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Semibold.ttf",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} — AI Model Risk & Payments Advisory`,
    template: `%s | ${DATA.name}`,
  },
  description: "Independent advisor to financial institutions on adversarial-resilient AI model risk, FedNow and RTP liquidity management, and payment clearing optimization under ISO 20022.",
  openGraph: {
    title: `${DATA.name} — AI Model Risk & Payments Advisory`,
    description: "Independent advisor to financial institutions on adversarial-resilient AI model risk, FedNow and RTP liquidity management, and payment clearing optimization under ISO 20022.",
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          cabinetGrotesk.variable,
          clashDisplay.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light"  enableSystem={false}>
          <RegionProvider>
            <TooltipProvider delayDuration={0}>
              <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
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
              <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
                {children}
              </div>
              <Navbar />
            </TooltipProvider>
          </RegionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
