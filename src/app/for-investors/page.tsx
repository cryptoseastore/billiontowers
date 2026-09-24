import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureCard from "@/components/FeatureCard";
import ContactSection from "@/components/ContactSection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "For Investors",
  description:
    "Invest in Web3's future with Billion Towers. $5M Convertible Perpetual Preferreds for accredited and offshore investors.",
};

const whyInvest = [
  {
    title: "Realistic Market",
    quote: "In telecom, I founded & scaled Symphony Telecom to $200M against giants like Bell. BT is positioned to capture value in the $16T RWA tokenization market through fractionalized real estate and high-value assets.",
    author: "Gilles A. Trahan, CEO",
  },
  {
    title: "Support Growth",
    description:
      "Join our $5M Convertible Perpetual Preferred offering, with 90% of proceeds powering our RWA treasury—focused on tokenized real estate via Apex Terra, BT Vault self-custody, and BT Launchpad fair launches. Contact us for Reg D & Reg S details.",
  },
  {
    title: "Trusted Asset",
    description:
      "BT Vault provides biometric-secured self-custody for tokenized assets. BT Launchpad enables compliant fair launches on Sonic Labs, Polygon, and Base L2s. Our upcoming BT-USD stablecoin (planned for 2026) will support transparent RWA ecosystems.",
  },
  {
    title: "Huge Market",
    description:
      "Our $50M Reg A+ targets NYSE American listing in 2026. Back a Web3 platform positioned for the $16T RWA market, including fractionalized real estate and tokenized equities.",
  },
  {
    title: "Lead Web3",
    description:
      "Tokenized fractional real estate via Apex Terra, biometric self-custody with BT Vault for the unbanked, and regulated fair-launch infrastructure via BT Launchpad on Sonic Labs, Polygon, and Base L2s. One treasury powering multiple trillion-dollar markets.",
  },
  {
    title: "Maximize Returns",
    description:
      "Digital Asset Treasury manages strategic positions in Bitcoin, Solana, Chainlink, Pyth, AVAX, and other assets to support long-term RWA growth, including tokenized real estate revenue streams and ecosystem expansion.",
  },
];

export default function ForInvestorsPage() {
  return (
    <>
      <PageHero
        title="For Investors"
        subtitle="Invest in Web 3's Future"
        description="Join Billion Towers to build the next wave of tokenized real-world assets. Led by Gilles A. Trahan ($200M Symphony Telecom exit), we offer $5M Convertible Perpetual Preferreds to accredited and offshore investors."
        image={images.finance}
      />

      <AnimatedSection className="section-padding">
        <div className="container-max max-w-4xl">
          <p className="prose-muted text-lg">
            Our focus is on fractionalized real estate in premier international markets through Apex Terra, fair project
            launches via BT Launchpad on Sonic Labs, Polygon, and Base L2s, and biometric-secured self-custody with BT
            Vault.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding section-alt">
        <div className="container-max">
          <h2 className="heading-lg text-center">Growth Potential</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Scale to Billions"
              description="Our Apex Terra brings fractionalized real estate tokenization to international markets. BT Launchpad delivers regulated fair launches on Sonic Labs, Polygon, and Base L2s, while BT Vault provides secure biometric self-custody. BT-USD stablecoin is planned for 2026 to support the ecosystem."
              image={images.building}
            />
            <FeatureCard
              title="Invest with Confidence"
              description="BT Vault delivers biometric-secured self-custody for tokenized assets. BT Launchpad enables compliant fair launches on Sonic Labs, Polygon, and Base L2s. Apex Terra tokenizes fractional real estate in premier international markets with full on-chain transparency. 90% of Preferred proceeds directly support RWA expansion."
              image={images.dashboard}
            />
            <FeatureCard
              title="Market Traction"
              description="Testnet success and ecosystem partnerships are driving 2026 mainnet launches for BT Vault, BT Launchpad, and Apex Terra tokenized real estate. Our focus on fractional ownership in high-potential international markets positions us for regulated growth and NYSE American listing."
              image={images.marketAnalysis}
            />
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact/" className="btn-primary">
              Contact Us Directly for Eligibility
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container-max">
          <h2 className="heading-lg text-center">Why Invest</h2>
          <p className="prose-muted mx-auto mt-4 max-w-2xl text-center">
            The Full-Stack Tokenized Future – Here&apos;s Why
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyInvest.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                {item.quote ? (
                  <blockquote className="prose-muted mt-3 text-sm italic">&ldquo;{item.quote}&rdquo; ~ {item.author}</blockquote>
                ) : (
                  <p className="prose-muted mt-3 text-sm">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container-max relative aspect-[21/9] overflow-hidden">
          <Image src={images.nyse} alt="NYSE listing target" fill className="object-cover opacity-80" sizes="100vw" loading="lazy" />
          <div className="hero-overlay absolute inset-0 flex items-center justify-center">
            <p className="heading-section text-white">Target NYSE American Listing in 2026</p>
          </div>
        </div>
      </AnimatedSection>

      <ContactSection />
    </>
  );
}
