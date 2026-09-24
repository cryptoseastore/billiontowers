import type { Metadata } from "next";
import { PageHero } from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureCard from "@/components/FeatureCard";
import ContactSection from "@/components/ContactSection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "BT-USD Stablecoin",
  description:
    "BT-USD is Billion Towers' upcoming stablecoin planned for 2026 rollout on Sonic Labs, Polygon, and Base L2 with on-chain transparency.",
};

const ecosystem = [
  {
    title: "What is Web3 Finance?",
    description:
      "Web1: read-only internet. Web2: interactive but centralized. Web3: decentralized, user-owned finance. BT-USD is Web3's trusted stable currency.",
  },
  {
    title: "Empower Users",
    quote: "Web3 empowers users; BT delivers its financial future.",
    author: "Gilles A. Trahan, CEO",
  },
  {
    title: "Developers",
    description:
      "Build mint/burn contracts, RWA wrappers (fractional real estate via Apex Terra), and Launchpad tools with planned 2026 SDKs on Sonic Labs, Polygon, and Base L2.",
  },
  {
    title: "Exchanges & Partners",
    description:
      "List BT-USD and tokenized RWAs. Earn revenue share from Launchpad deployments and RWA trading volume.",
  },
  {
    title: "Merchants & Businesses",
    description:
      "Accept BT-USD and eliminate $33+ B annual chargeback losses. Instant finality, near-zero fees, T-Bill security.",
  },
];

export default function BtUsdPage() {
  return (
    <>
      <PageHero
        title="BT-USD:"
        subtitle="Digital cash, Redefined"
        description="BT-USD is our upcoming stablecoin, planned for rollout in 2026 on Sonic Labs, Polygon, and Base L2. Designed with on-chain transparency and instant finality, it will support BT Vault self-custody, tokenized RWAs, and BT Launchpad fair launches."
        image={images.cover}
      />

      <AnimatedSection className="section-padding">
        <div className="container-max">
          <h2 className="heading-lg text-center">Roadmap to Revolution</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Trusted Stablecoin at Scale"
              description="BT-USD is planned for 2026 rollout on Sonic Labs, Polygon, and Base L2 ecosystems. Backed by reserves with Tier 1 custody, real-time proof-of-reserves dashboard, and strategic partnerships. It will serve as the trusted foundation for BT Vault, Apex Terra tokenized real estate, and BT Launchpad."
              image={images.dashboard}
            />
            <FeatureCard
              title="Transparency Built"
              description="BT-USD (2026 rollout) will deliver transparent, on-chain mint/burn tracking and reserve visibility. FinCEN registration pursuit and DLT Resolution partnership support compliance. The secure backbone for BT Vault self-custody and tokenized RWAs."
              image={images.screenshotDashboard}
            />
            <FeatureCard
              title="Secure Self-Custody"
              description="BT Vault provides biometric-secured self-custody for tokenized assets, digital holdings, and stablecoins. Planned 2026 mainnet launch on Sonic Labs, Polygon, and Base L2. Secure your fractional real estate (Apex Terra), equities, and Launchpad tokens with full user control."
              image={images.screenshotMobile}
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding section-alt">
        <div className="container-max">
          <h2 className="heading-lg text-center">Ecosystem Impact</h2>
          <p className="prose-muted mx-auto mt-4 max-w-2xl text-center">
            Powering Web3 with BT-USD—Here&apos;s Who Wins:
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                {item.quote ? (
                  <blockquote className="prose-muted mt-3 text-sm italic">
                    &ldquo;{item.quote}&rdquo; ~ {item.author}
                  </blockquote>
                ) : (
                  <p className="prose-muted mt-3 text-sm">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <ContactSection />
    </>
  );
}
