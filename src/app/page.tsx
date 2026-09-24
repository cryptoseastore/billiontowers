import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import {
  Section,
  Split,
  Btn,
  IconCard,
  AudienceCard,
  EcosystemCard,
  SectionTitle,
  IllustrationRow,
  CenterBlock,
} from "@/components/Layout";
import BlurImage from "@/components/motion";
import { images } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Web3 Finance & Stablecoin Investment",
  description:
    "Billion Towers - Institutional Web3 Treasury & Tokenization Innovator. BT-USD stablecoin, BT Vault, BT Launchpad, and RWA tokenization.",
};

export default function HomePage() {
  return (
    <>
      <Hero
        title={SITE.name}
        tagline={SITE.tagline}
        subtitle="Pioneering Transparent Finance for Institutions and the Unbanked"
        description="Evolving from digital asset treasury management to lead the $16T RWA tokenization wave—fractionalizing real estate in premium high-growth international markets, stocks (Apple, Tesla, Nvidia), and more on-chain. Powered by BT Vault biometric self-custody and BT Launchpad for regulated fair token launches on Sonic Labs, Base & Polygon L2s."
        extra="BT-USD stablecoin planned for 2026 on Sonic/Cardano (8.5M+ wallets). Now we unlock tokenized real-world assets for global liquidity and deliver accessible finance to the 1.7B unbanked."
        image={images.teamGilles}
        ctas={[
          { label: "Explore Stablecoin", href: "/bt-usd/" },
          { label: "Partner Now", href: "/for-partners/" },
          { label: "Investor Inquiry", href: "/for-investors/" },
        ]}
      />

      <Section>
        <SectionTitle subtitle="Institutional Yield & Global Scale">DAT + Stablecoin</SectionTitle>
        <CenterBlock>
          <p className="text-body">
            Our Digital Asset Treasury manages strategic positions in Bitcoin, Solana, Chainlink, Pyth, AVAX, and other
            high-conviction assets.
          </p>
          <p className="text-body mt-4">
            BT-USD — our upcoming stablecoin — is planned for rollout in 2026 on Sonic Labs and Cardano, offering
            near-zero fees and instant finality.
          </p>
          <p className="text-body mt-4">
            The foundation for tokenized RWAs—including fractionalized real estate—and accessible finance for the
            unbanked.
          </p>
          <Btn href="/bt-usd/" className="mt-8">
            Explore Stablecoin
          </Btn>
        </CenterBlock>
        <div className="relative mx-auto mt-10 aspect-[16/9] max-w-3xl overflow-hidden">
          <BlurImage src={images.dashboard} alt="Real-Time Dashboard shows Reserves" fill sizes="768px" />
        </div>
      </Section>

      <Section alt>
        <SectionTitle>Trust Transparency</SectionTitle>
        <CenterBlock>
          <p className="text-body">
            From day one we commit to publishing CPA-attested reserves. In 2026 we plan to launch a live Chainlink +
            Pyth dashboard showing every mint, burn, and reserve position — verifiable on-chain.
          </p>
          <p className="text-body mt-4">
            Institutional assurance • 100% backed reserves • SOC 2 Type II audited • Full on-chain proof of reserves •
            Reg D / Reg S compliant tokenized offerings
          </p>
          <Btn href="/roadmap/" className="mt-8">
            View Roadmap
          </Btn>
        </CenterBlock>
        <IllustrationRow
          images={[
            { src: images.dashboard, alt: "Real-Time Dashboard shows Reserves", w: 160, h: 96 },
            { src: images.image11, alt: "Cardano Logo", w: 112, h: 64 },
            { src: images.dashboard, alt: "Real-Time Dashboard shows Reserves", w: 160, h: 96 },
          ]}
        />
      </Section>

      <Section>
        <CenterBlock>
          <p className="text-body text-lg">Why the Future Belongs to {SITE.name}</p>
          <p className="text-body mt-4">We are building the full-stack tokenized future:</p>
          <ul className="text-body mt-6 list-disc space-y-3 pl-5 text-left">
            <li>
              $16 trillion RWA tokenization – fractionalized real estate, equities (Apple, Tesla, Nvidia), and more
              on-chain
            </li>
            <li>BT Vault – self-custody wallet serving the 1.7 billion unbanked</li>
            <li>BT Launchpad – regulated fair launches on Sonic, Base, and Polygon L2</li>
            <li>NYSE American listing target post $50M Reg A+</li>
          </ul>
          <p className="text-label-orange mt-6 text-lg">One treasury. Multiple trillion-dollar markets.</p>
          <Btn href="/for-investors/" className="mt-6">
            Investors
          </Btn>
        </CenterBlock>
        <div className="relative mx-auto mt-10 h-32 w-48">
          <BlurImage src={images.sonicCover} alt="Sonic logo" fill sizes="192px" objectFit="contain" />
        </div>
      </Section>

      <Section alt>
        <Split>
          <div className="relative aspect-[4/3] overflow-hidden">
            <BlurImage src={images.building} alt="Billion Towers" fill sizes="50vw" />
          </div>
          <div>
            <h2 className="heading-section text-left">About Us</h2>
            <p className="text-label-green mt-2">Pioneering Transparent Web 3 Finance</p>
            <p className="text-body mt-6">
              Born in Wyoming to leverage the most progressive crypto jurisdiction in the U.S., Billion Towers Inc. is
              evolving from digital asset treasury management to a full-stack tokenized future.
            </p>
            <ul className="text-body mt-4 list-disc space-y-2 pl-5">
              <li>$16 trillion RWA tokenization (real estate, equities like Apple, Tesla, Nvidia)</li>
              <li>Banking the 1.7 billion unbanked via BT Vault self-custody wallet</li>
              <li>Regulated fair-launch infrastructure via BT Launchpad</li>
              <li>BT-USD stablecoin planned for rollout in 2026 on Sonic Labs and Cardano</li>
            </ul>
            <p className="text-body mt-4">
              Led by Gilles A. Trahan ($200M Symphony Telecom), John S. Wilkes (M.B.A., C.P.A.), and Daniel G. Cullen
              (P.Eng.), we target NYSE American listing post $50M Reg A+.
            </p>
            <Btn href="/about/" className="mt-8">
              Read More
            </Btn>
          </div>
        </Split>
      </Section>

      <Section>
        <SectionTitle>Our Future: Beyond USD</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            {
              icon: images.launchpad,
              title: "Launchpad",
              description:
                "BT Vault: self-custody wallet designed to provide secure access for the 1.7 billion unbanked. BT Launchpad: regulated fair-launch infrastructure on Sonic Labs and Polygon L2 – targeted live Q2 2026.",
            },
            {
              icon: images.icon1,
              title: "Treasury Yields",
              description:
                "Actively managed Digital Asset Treasury holds strategic positions in BTC, SOL, Chainlink, Pyth, AVAX, and other high-conviction assets to support long-term RWA ecosystem growth and treasury stability.",
            },
            {
              icon: images.icon1b,
              title: "Euro",
              description:
                "BT-EUR: Planned Q2 2026 assessment for Euro stablecoin via Lithuania's MiCA framework, building on testnet development for potential Solana/Ethereum expansion by late 2026.",
            },
            {
              icon: images.icon4,
              title: "Exchange Listings",
              description:
                "NASDAQ Private Markets liquidity targeted Q2 2026. $50M Reg A+ targeting NYSE American listing Q4 2026.",
            },
            {
              icon: images.rwaIcon,
              title: "Tokenization",
              description:
                "Enabling tokenized exposure to blue-chip equities (Apple, Tesla, Nvidia, etc.) and fractionalized real estate through regulated partners – offering ownership, 24/7 liquidity, and stablecoin dividend flows.",
            },
          ].map((card) => (
            <IconCard key={card.title} icon={card.icon} title={card.title} description={card.description} />
          ))}
        </div>
      </Section>

      <Section alt>
        <Split>
          <div>
            <h2 className="heading-section text-left">Our Growth Plan</h2>
            <ul className="text-body mt-8 space-y-6">
              <li>
                <strong>2024–2025</strong> — Commenced Digital Asset Treasury (DAT) strategy. Completed substantial
                testnet development and minting.
              </li>
              <li>
                <strong>Q4 2025 - Q1 2026</strong> — BT Vault mainnet launch. BT Launchpad fair-launch infrastructure
                mainnet. Initial RWA tokenization partnerships.
              </li>
              <li>
                <strong>2026</strong> — BT-USD stablecoin rollout. Real-time Chainlink/Pyth dashboard. $50M Reg A+
                offering. Target NYSE American listing.
              </li>
              <li>
                <strong>2026 onward</strong> — Expand tokenized RWA portfolio and global liquidity access.
              </li>
            </ul>
            <Btn href="/roadmap/" className="mt-8">
              Road Map
            </Btn>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <BlurImage src={images.marketAnalysis} alt="Market Analysis chart" fill sizes="50vw" />
          </div>
        </Split>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          <AudienceCard
            image={images.code}
            title="Build With Us"
            description="Developers: Build on BT-USD, BT Vault, and Launchpad with planned 2026 SDKs/APIs for Sonic Labs, Cardano, Base & Polygon L2."
            cta={{ label: "Join Developers", href: "/for-developers/" }}
          />
          <AudienceCard
            image={images.blockchain}
            title="Grow Your Reach"
            description="Exchanges & nodes: Join our 2026 mainnet pilot to integrate Sonic/Cardano wallets. Offer BT-USD with low fees and white-label BT Vault self-custody."
            cta={{ label: "Partner With Us", href: "/for-partners/" }}
          />
          <AudienceCard
            image={images.stockMarket}
            title="Invest in Tomorrow"
            description="Accredited and offshore investors: Explore our $5M Perpetual Convertible Preferreds to accelerate growth in our RWA treasury."
            extra="BT-USD stablecoin is planned for rollout in 2026 to support RWA ecosystems and on-chain liquidity."
            cta={{ label: "Contact for Opportunities", href: "/contact/" }}
          />
        </div>
      </Section>

      <Section alt>
        <SectionTitle>Scalable Web3 Ecosystems</SectionTitle>
        <p className="text-body mx-auto mb-12 max-w-3xl text-center">
          BT-USD, powered by our Digital Asset Treasury, leverages Sonic and Cardano for planned 2026 rollout, enabling
          efficient DeFi and RWA infrastructure.
        </p>
        <div className="grid divide-y divide-[#232322]/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          <EcosystemCard
            title="Polygon/Base Expansion"
            description="Polygon/Base L2 integration for low-cost RWA tokenization—including fractional real estate—BT Vault transactions, and Launchpad deployments."
            cta={{ label: "Partner With Us", href: "/for-partners/" }}
          />
          <EcosystemCard
            title="Cardano Trust"
            description="BT-USD enables Cardano payments and RWA transactions (5M+ wallets) planned for 2026. Contribute to network stability through node operations."
            cta={{ label: "Join Nodes", href: "/for-partners/" }}
          />
          <EcosystemCard
            title="Sonic Scalability"
            description="BT-USD + Launchpad on Sonic (1M+ wallets, 720 ms finality, 10K+ TPS) targeted for 2026. Support ecosystem growth through node participation."
            cta={{ label: "Join Nodes", href: "/for-partners/" }}
          />
        </div>
      </Section>

      <ContactSection />
    </>
  );
}
