import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} - Web3 Finance & Stablecoin Investment`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Billion Towers is an institutional Web3 treasury and tokenization innovator. BT-USD stablecoin, BT Vault, BT Launchpad, and RWA tokenization.",
  keywords: [
    "Billion Towers",
    "BT-USD",
    "Web3 finance",
    "stablecoin",
    "RWA tokenization",
    "BT Vault",
    "BT Launchpad",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} - Web3 Finance & Stablecoin Investment`,
    description: SITE.tagline,
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: SITE.name }],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={questrial.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
