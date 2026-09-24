import type { Metadata } from "next";
import { PageHero } from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureCard from "@/components/FeatureCard";
import ContactSection from "@/components/ContactSection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "For Developers",
  description:
    "Build on BT-USD, BT Vault, BT Launchpad, and tokenized RWAs with Billion Towers. SDKs/APIs for Sonic Labs, Base, and Polygon L2.",
};

const whyBuild = [
  {
    title: "Scalable Infrastructure",
    description:
      "Build on Sonic Labs, Base, and Polygon L2 with scalable, testnet-proven infrastructure. Deploy wallets, tokens, and RWAs—including fractionalized real estate via Apex Terra—for broad adoption and seamless user experience.",
  },
  {
    title: "Low-Cost Execution",
    description:
      "Leverage efficient on-chain transactions with instant finality on Sonic Labs, Polygon, and Base L2s. Enable cost-effective DeFi apps, tokenized assets, and RWA platforms with streamlined infrastructure.",
  },
  {
    title: "Node Opportunities",
    description:
      "Run nodes on Sonic Labs and Cardano ecosystems to support BT-USD transactions, BT Launchpad deployments, and RWA infrastructure growth. Contribute to network stability and decentralized adoption.",
  },
  {
    title: "Transparency Tools",
    description:
      "Integrate Chainlink/Pyth oracles for real-time verification of reserves, tokenized-asset flows, and RWA data—including fractional real estate via Apex Terra. Build dashboards and tools for full on-chain trust.",
  },
  {
    title: "RWA Innovation",
    description:
      "Build wrappers for tokenized Apple, Tesla, Nvidia stocks – fractional ownership, dividend flows, DeFi composability.",
  },
  {
    title: "Fair-Launch Leadership",
    description:
      "Develop fair-launch contracts and anti-snipe mechanics for BT Launchpad on Sonic, Base, and Polygon L2.",
  },
];

export default function ForDevelopersPage() {
  return (
    <>
      <PageHero
        title="For Developers"
        subtitle="Code the Future of Tokenized Finance"
        description="Build on BT-USD (planned 2026 rollout), BT Vault biometric self-custody wallet, BT Launchpad fair-launch infrastructure, and tokenized real-world assets with 2026 SDKs/APIs for Sonic Labs, Base, and Polygon L2."
        image={images.blockchainDev}
      />

      <AnimatedSection className="section-padding">
        <div className="container-max">
          <h2 className="heading-lg text-center">Smart Contracts, Big Impact</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Big Impact"
              description="Develop mint/burn contracts, staking modules, and RWA wrappers on Sonic Labs, Base, and Polygon L2. Leverage scalable infrastructure for tokenized real estate (Apex Terra), BT Vault self-custody, and BT Launchpad fair launches."
              image={images.code}
            />
            <FeatureCard
              title="Power The Network"
              description="Deploy nodes on Sonic Labs and Cardano ecosystems to support BT-USD transactions, BT Launchpad deployments, and RWA infrastructure growth. Contribute to network stability, decentralized adoption, and ecosystem security."
              image={images.blockchain}
            />
            <FeatureCard
              title="Craft Transparency"
              description="Integrate Chainlink + Pyth oracles for real-time verification of reserves, tokenized-asset flows, and RWA data. Develop dashboards and tools for BT-USD, BT Vault, and Launchpad transparency and trust."
              image={images.dashboard}
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding section-alt">
        <div className="container-max">
          <h2 className="heading-lg text-center">Why Build With Us</h2>
          <p className="prose-muted mx-auto mt-4 max-w-2xl text-center">Code BT and win big—here&apos;s why:</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyBuild.map((item) => (
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
