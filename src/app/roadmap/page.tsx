import type { Metadata } from "next";
import { PageHero } from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import Timeline from "@/components/Timeline";
import ContactSection from "@/components/ContactSection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Billion Towers roadmap to Web3 finance. BT-USD, BT Vault, tokenized RWAs, and Launchpad timeline through 2026 and beyond.",
};

const timelineItems = [
  {
    period: "Q4 2025 – Q1 2026",
    title: "Foundation & Early Launch",
    description:
      "Completed testnet development and minting. Allocated $5M Convertible Perpetual Preferred proceeds to RWA treasury growth. Launched BT Vault self-custody wallet mainnet. BT Launchpad fair-launch infrastructure live on Sonic Labs, Polygon, and Base L2s. Initial Apex Terra tokenized real estate partnerships underway.",
  },
  {
    period: "Q2 2026",
    title: "Core Rollout",
    description:
      "BT-USD stablecoin mainnet launch on Sonic Labs and Cardano. Real-time Chainlink/Pyth dashboard for transparency. Expanded RWA tokenization (fractional real estate, equities) via Apex Terra. Continued $5M Preferred raise momentum. NASDAQ Private Markets liquidity.",
  },
  {
    period: "Q3 2026",
    title: "Expansion",
    description:
      "Scale Apex Terra fractionalized real estate offerings in premier international markets. Enhance BT Vault adoption for the unbanked. BT Launchpad supports regulated project launches across L2 ecosystems. Prepare $50M Reg A+ offering.",
  },
  {
    period: "Q4 2026",
    title: "Scale & Listing",
    description:
      "Target NYSE American listing post $50M Reg A+. Drive global liquidity and adoption of tokenized RWAs through Apex Terra, BT Vault, and BT Launchpad. Strategic partnerships and ecosystem growth.",
  },
  {
    period: "2026 & Beyond",
    title: "Scale",
    description:
      "NYSE American listing. Strategic acquisitions and partnerships. Global expansion of BT Vault and Apex Terra tokenized real estate. Ecosystem growth and liquidity across RWA platforms.",
  },
];

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        title="Our Roadmap to Web 3 Finance"
        subtitle="BT-USD | BT Vault | Tokenized RWAs | Launchpad"
        description="BT redefines Web3 finance through tokenized real-world assets, biometric self-custody with BT Vault, regulated fair-launch infrastructure via BT Launchpad, and our upcoming BT-USD stablecoin. We target NYSE American listing and sustainable growth in the $16T RWA market."
        image={images.highway}
      />

      <AnimatedSection className="section-padding">
        <div className="container-max">
          <h2 className="heading-lg text-center">Timeline</h2>
          <div className="mt-16">
            <Timeline items={timelineItems} />
          </div>
        </div>
      </AnimatedSection>

      <ContactSection />
    </>
  );
}
