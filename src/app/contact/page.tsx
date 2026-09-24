import type { Metadata } from "next";
import { PageHero } from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { images } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${SITE.name} for inquiries about BT-USD, BT Vault, RWA tokenization, Launchpad, or investment opportunities.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="Get in Touch" image={images.financeHero} />

      <AnimatedSection className="section-padding">
        <div className="container-max">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="heading-lg">Reach Out</h2>
              <p className="prose-muted mt-4">
                Questions about BT-USD, BT Vault, RWA tokenization, Launchpad, or investment opportunities? We&apos;d
                love to hear from you.
              </p>
              <p className="prose-muted mt-4">
                For investment opportunities, please use the form to request private offering materials.
              </p>

              <div className="mt-10 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Address</h3>
                  <p className="mt-2 text-slate-900">{SITE.address.line1}</p>
                  <p className="text-slate-900">{SITE.address.line2}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Phone</h3>
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="mt-2 block text-brand-green hover:text-brand-green">
                    {SITE.phone}
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Email</h3>
                  <a href={`mailto:${SITE.email}`} className="mt-2 block text-brand-green hover:text-brand-green">
                    {SITE.email}
                  </a>
                </div>
              </div>

              <p className="mt-8 text-sm text-slate-500">Please use the contact form for inquiries.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
