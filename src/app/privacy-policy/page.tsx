import type { Metadata } from "next";
import { PageHero } from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { images } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy and Disclaimer",
  description: `Read ${SITE.name}'s privacy policy and disclaimer for BT-USD stablecoin. Learn about data protection and investment risks.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy and Disclaimer" image={images.abstract} />

      <AnimatedSection className="section-padding">
        <div className="container-max max-w-4xl">
          <h2 className="heading-md">Privacy Policy</h2>
          <p className="prose-muted mt-4">
            At {SITE.legalName}, we are committed to protecting the privacy of our website visitors, including node
            operators, exchanges, developers, and investors engaging with our BT-USD stablecoin platform. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your data when you visit our website, sign up
            for our pilot, or inquire about investment opportunities.
          </p>

          <h3 className="heading-md mt-10">Information We Collect</h3>
          <p className="prose-muted mt-4">We collect:</p>
          <ul className="prose-muted mt-4 list-inside list-disc space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email, and contact details provided via our contact form,
              pilot signup, or investor inquiries.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> Browser type, IP address, and website usage data through
              cookies and analytics tools to improve user experience.
            </li>
            <li>
              <strong>Pilot and Investor Data:</strong> Details related to node operations, exchange partnerships,
              developer contributions, or investment interest.
            </li>
          </ul>

          <h3 className="heading-md mt-10">How We Use Your Information</h3>
          <ul className="prose-muted mt-4 list-inside list-disc space-y-2">
            <li>Respond to inquiries and provide updates on our BT-USD testnet and mainnet launch.</li>
            <li>Facilitate partnerships with exchanges, nodes, and developers for Sonic, Cardano, and L2 integration.</li>
            <li>Process investor requests for private offering materials, subject to SEC compliance.</li>
            <li>Enhance our website&apos;s functionality and tailor content.</li>
            <li>Comply with legal obligations, such as FinCEN MSB registration and custodial partnerships.</li>
          </ul>

          <h3 className="heading-md mt-10">How We Share Your Information</h3>
          <p className="prose-muted mt-4">
            We do not sell your personal data. We may share it with service providers (e.g., Chainlink, Pyth for
            dashboard; Etana for custody) under strict confidentiality to support BT-USD operations, with legal authorities
            if required by law, and anonymized for analytics to improve our platform.
          </p>

          <h3 className="heading-md mt-10">Your Rights</h3>
          <p className="prose-muted mt-4">
            You can request access to or deletion of your personal data by{" "}
            <Link href="/contact/" className="text-brand-green hover:underline">
              contacting us
            </Link>
            . Opt out of marketing emails via the unsubscribe link in our communications. Disable cookies through your
            browser, though this may limit site functionality.
          </p>

          <h3 className="heading-md mt-10">Data Protection</h3>
          <p className="prose-muted mt-4">
            We implement industry-standard measures (e.g., encryption, secure servers) to protect your data, compliant
            with Wyoming data protection laws. However, no online platform is 100% secure—we strive to minimize risks
            and promptly address breaches.
          </p>

          <h3 className="heading-md mt-10">Contact Us</h3>
          <p className="prose-muted mt-4">
            For questions about this Privacy Policy, email{" "}
            <a href={`mailto:${SITE.email}`} className="text-brand-green hover:underline">
              {SITE.email}
            </a>{" "}
            or use our{" "}
            <Link href="/contact/" className="text-brand-green hover:underline">
              contact form
            </Link>
            .
          </p>

          <hr className="my-12 border-slate-200" />

          <h2 className="heading-md">Disclaimer</h2>

          <h3 className="heading-md mt-8">NOT A SOLICITATION</h3>
          <p className="prose-muted mt-4">
            The information on this website, including discussions of BT-USD, private offerings, or planned Regulation
            A+ offering, is not a solicitation to buy or sell securities. No offer to buy securities is made without a
            qualified Regulation A+ offering statement filed with the SEC or private offering materials for accredited or
            offshore investors under Regulation D, Rule 506(b).
          </p>

          <h3 className="heading-md mt-8">Investment Risks</h3>
          <p className="prose-muted mt-4">
            Investing in {SITE.legalName} involves significant risks, including potential total loss. Prospective
            investors must review our Regulation A+ statement, when filed, or private offering materials for detailed
            risks, available by emailing {SITE.email}. Risks include:
          </p>
          <ul className="prose-muted mt-4 list-inside list-disc space-y-2">
            <li>
              <strong>Speculative Investment:</strong> No assurance of achieving BT-USD launch or market share, with
              potential total loss.
            </li>
            <li>
              <strong>No Operating History:</strong> Formed April 22, 2025, with no revenue or profits.
            </li>
            <li>
              <strong>Stablecoin Competition:</strong> Competing with Tether ($143B market cap) and USDC ($58B).
            </li>
            <li>
              <strong>Regulatory Risks:</strong> Delays in FinCEN MSB, custodial/SPDI partnerships, or SEC approvals may
              impact mainnet launch or NYSE listing.
            </li>
            <li>
              <strong>Crypto Volatility:</strong> Planned treasury allocations (e.g., Bitcoin, Solana) are high-risk.
            </li>
            <li>
              <strong>Illiquidity:</strong> No public market until NYSE listing, if achieved. Consult with financial and
              legal advisors before investing.
            </li>
          </ul>

          <h3 className="heading-md mt-8">Forward-Looking Statements</h3>
          <p className="prose-muted mt-4">
            Statements about BT-USD&apos;s plans are forward-looking under the Private Securities Litigation Reform Act
            of 1995. These involve risks—actual results may differ due to blockchain adoption, SEC approval, or economic
            conditions.
          </p>

          <h3 className="heading-md mt-8">No Guarantee</h3>
          <p className="prose-muted mt-4">
            Past performance, such as our founder&apos;s $200M+ ventures, does not guarantee future results. Projections
            are estimates, not assurances. Investors bear all risks of loss.
          </p>

          <h3 className="heading-md mt-8">Regulatory Compliance</h3>
          <p className="prose-muted mt-4">
            {SITE.legalName} pursues FinCEN MSB registration, custodial/SPDI partnerships, and SEC compliance for a
            Regulation A+ offering. Private offerings are limited to accredited or offshore investors under Regulation D.
            Until approvals, no securities are offered.
          </p>

          <p className="text-body-muted mt-8 text-sm">Last updated: May 1, 2025</p>
        </div>
      </AnimatedSection>
    </>
  );
}
