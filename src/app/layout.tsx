import RegionReadyShell from "@/components/region-ready-shell";
import { RegionProvider } from "@/components/region-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.metaDescription,
  openGraph: {
    title: DATA.name,
    description: DATA.metaDescription,
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
          <RegionProvider showRegionToggle={DATA.regionToggleEnabled}>
            <TooltipProvider delayDuration={0}>
              <RegionReadyShell>{children}</RegionReadyShell>
            </TooltipProvider>
          </RegionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
