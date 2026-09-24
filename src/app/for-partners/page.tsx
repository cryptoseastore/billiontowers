import type { Metadata } from "next";
import { PageHero } from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureCard from "@/components/FeatureCard";
import ContactSection from "@/components/ContactSection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "For Partners",
  description:
    "Partner with Billion Towers. Integrate BT-USD, white-label BT Vault, co-list tokenized RWAs, and host fair launches via BT Launchpad.",
};

const whyPartner = [
  {
    title: "Low Fees",
    description:
      "BT-USD (planned 2026 rollout) offers efficient on-chain transactions with instant finality. Eliminate traditional intermediaries and support tokenized asset volume across Sonic Labs, Polygon, and Base L2s.",
  },
  {
    title: "Node Yields",
    description:
      "Run nodes on Sonic Labs and Cardano ecosystems to support BT-USD transactions, BT Launchpad deployments, and RWA infrastructure growth. Contribute to network stability and decentralized adoption.",
  },
  {
    title: "Scalability",
    description:
      "Leverage scalable infrastructure on Sonic Labs, Polygon, and Base L2s for tokenized RWAs—including fractional real estate via Apex Terra—and fair-launch projects.",
  },
  {
    title: "Transparency",
    description:
      "Planned 2026 Chainlink/Pyth dashboard provides real-time visibility into mint/burn and reserves. Full on-chain auditability for all partners and tokenized assets.",
  },
  {
    title: "Market Reach",
    description:
      "Access growing ecosystems across Sonic Labs, Cardano, Polygon, and Base L2s. Co-list tokenized real estate (Apex Terra), equities, and Launchpad projects with secure, compliant infrastructure.",
  },
  {
    title: "RWA Revenue",
    description:
      "Earn from tokenized fractional real estate via Apex Terra, blue-chip equities, and BT Vault integrations. Tap into the $16T+ RWA market opportunity.",
  },
];

export default function ForPartnersPage() {
  return (
    <>
      <PageHero
        title="For Partners"
        subtitle="Grow Big with Billion Towers"
        description="Exchanges, nodes, and enterprises: integrate BT-USD (planned 2026 rollout), white-label BT Vault biometric self-custody, co-list tokenized RWAs, and host fair launches via BT Launchpad."
        image={images.cityscape}
      />

      <AnimatedSection className="section-padding">
        <div className="container-max">
          <h2 className="heading-lg text-center">Swap Surge</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Drive Trades, Earn More"
              description="List BT-USD and tokenized assets (fractional real estate, blue-chip equities like Apple, Tesla, Nvidia) with on-chain transparency and instant finality. Earn revenue share from BT Launchpad deployments and RWA trading volume on Sonic Labs, Polygon, and Base L2s."
              image={images.stockMarket}
            />
            <FeatureCard
              title="Node Power"
              description="Run nodes on Sonic Labs and Cardano ecosystems to support BT-USD transactions, BT Launchpad deployments, and RWA infrastructure growth. Contribute to network stability and decentralized adoption with scalable, testnet-proven technology."
              image={images.sonicCover}
            />
            <FeatureCard
              title="Trusted Ecosystem"
              description="BT-USD (2026 rollout) provides transparent, on-chain mint/burn tracking. Partner for BT Vault white-labeling, Apex Terra RWA co-issuance, and BT Launchpad revenue share. We pursue compliance (Reg D/S) and ecosystem transparency to build lasting value together."
              image={images.earthData}
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding section-alt">
        <div className="container-max">
          <h2 className="heading-lg text-center">Why Partner</h2>
          <p className="prose-muted mx-auto mt-4 max-w-2xl text-center">
            Join Billion Towers – Here&apos;s Why
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyPartner.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="prose-muted mt-3 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <ContactSection />
    </>
  );
}
