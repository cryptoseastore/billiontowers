import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import ContactSection from "@/components/ContactSection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Billion Towers - pioneering transparent Web3 finance. Our team, approach, and vision for tokenized real-world assets.",
};

const team = [
  {
    name: "Gilles A. Trahan",
    role: "Founder - Director, CEO",
    bio: "Founded Symphony Telecom, scaling to $200M in 2.5 years. Leads BT's Web3 finance vision, with our DAT (including Bitcoin, SOL, LINK, PYTH, AVAX) driving double-digit returns. Pioneers BT-USD and nodes for a $2T market by 2027.",
    image: images.teamGilles,
  },
  {
    name: "John S. Wilkes",
    role: "Director, CFO",
    bio: "M.B.A., C.P.A. with 25+ years in M&A and finance. Drives BT's $5M Preferred offering and Q1 2026 $50M Reg A+ for NYSE listing. Ensures fiscal discipline for DAT and BT-USD growth.",
    image: images.teamJohn,
  },
  {
    name: "Daniel G. Cullen",
    role: "CTO",
    bio: "P.Eng. with Ethereum expertise. Oversees BT-USD's Q4 2025 Sonic/Cardano launch and node deployment (4–6% yields). Shapes Web3 finance with Testnet-proven scalability for a $2T market.",
    image: images.teamDaniel,
  },
];

const stats = [
  { value: "8.5M+", label: "Wallets across Sonic Labs and Cardano ecosystems planned for BT-USD access in 2026" },
  { value: "$16+ Trillion", label: "RWA tokenization market opportunity driving our long-term growth strategy" },
  { value: "$3.9T+", label: "Crypto market capitalization supporting our diversified treasury and RWA strategy" },
  { value: "$5M", label: "Current Convertible Perpetual Preferred offering fueling RWA treasury expansion and tokenized real estate growth" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="Our Story" subtitle="Pioneering Transparent Web3 Finance" image={images.heroCity} />

      <AnimatedSection className="section-padding">
        <div className="container-max max-w-4xl">
          <p className="prose-muted text-lg">
            Born in Wyoming to leverage the most progressive crypto jurisdiction in the U.S., Billion Towers Inc. is
            executing a clear evolution from digital asset treasury management to a full-stack tokenized future.
          </p>
          <p className="prose-muted mt-6">
            Our actively managed Digital Asset Treasury holds strategic positions in Bitcoin, Solana, Chainlink, Pyth,
            AVAX, and other high-conviction assets. The current $5 million Convertible Preferred offering is fueling
            growth in our RWA treasury—particularly tokenized real estate, fractional ownership platforms, and
            high-value equities.
          </p>
          <p className="prose-muted mt-6">We are now extending the same institutional discipline into three trillion-dollar markets:</p>
          <ul className="prose-muted mt-4 list-inside list-disc space-y-2">
            <li>$16 trillion RWA tokenization – launching tokenized real estate, equities (Apple, Tesla, Nvidia), and more</li>
            <li>Banking the 1.7 billion unbanked via BT Vault self-custody wallet</li>
            <li>Regulated fair-launch infrastructure via BT Launchpad on Sonic Labs, Base, and Polygon L2</li>
          </ul>
          <p className="prose-muted mt-6">
            Led by Gilles A. Trahan ($200M Symphony Telecom exit), John S. Wilkes (M.B.A., C.P.A.), and Daniel G. Cullen
            (P.Eng.), we are on track for a $50 million Reg A+ and NYSE American listing in 2026, with strategic
            partnership support from publicly traded DLT Resolution Corp.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding section-alt">
        <div className="container-max">
          <h2 className="heading-lg text-center">Our Team</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="overflow-hidden bg-white">
                <div className="relative aspect-[3/4] max-h-72">
                  <Image src={member.image} alt={member.name} fill className="object-cover object-top" sizes="33vw" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="heading-card text-left">{member.name}</h3>
                  <p className="text-label-green mt-1 text-sm">{member.role}</p>
                  <p className="prose-muted mt-3 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container-max">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="heading-lg">Our Approach</h2>
              <p className="mt-2 font-medium text-brand-green">Transparent, Trusted, Transformative</p>
              <p className="prose-muted mt-6">
                Billion Towers is building institutional-grade infrastructure for the tokenized future. We combine
                actively managed treasury strategies with regulated tokenization platforms to bring real-world assets
                (RWAs)—including fractionalized real estate, equities, and other high-value holdings—on-chain.
              </p>
              <p className="prose-muted mt-4">
                Our approach emphasizes transparency, security, and accessibility: BT Vault provides self-custody for
                individuals and institutions, BT Launchpad enables fair and compliant project launches, and our upcoming
                BT-USD stablecoin (planned for 2026 rollout on Sonic Labs and Cardano) will support seamless on-chain
                transactions and liquidity for RWA ecosystems.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden">
              <Image src={images.blockchain} alt="Blockchain infrastructure" fill className="object-cover" sizes="50vw" loading="lazy" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding section-alt">
        <div className="container-max">
          <h2 className="heading-lg text-center">Us in Numbers</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <p className="text-3xl font-normal text-brand-orange sm:text-4xl">{stat.value}</p>
                <p className="text-body-muted mt-3 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container-max text-center">
          <h2 className="heading-lg">Powered by Industry Leaders</h2>
          <p className="prose-muted mt-4">Chainlink | Pyth | Sonic Labs | Cardano | DLT Resolution</p>
          <p className="prose-muted mx-auto mt-6 max-w-3xl">
            BT-USD is planned for rollout in 2026 with transparent mint/burn tracking and real-time dashboard visibility.
            Our Digital Asset Treasury supports RWA growth, while strategic partnerships accelerate our path to NYSE
            American listing.
          </p>
        </div>
      </AnimatedSection>

      <ContactSection />
    </>
  );
}
