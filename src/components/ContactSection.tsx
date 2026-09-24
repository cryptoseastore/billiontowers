import ContactForm from "./ContactForm";
import { Section, SectionTitle } from "./Layout";

export default function ContactSection() {
  return (
    <Section id="contact">
      <SectionTitle subtitle="Questions about BT-USD, BT Vault, RWA tokenization, Launchpad, or investment opportunities?">
        Have Questions?
      </SectionTitle>
      <p className="text-body mx-auto max-w-2xl text-center">
        Contact us to shape the future of tokenized finance.
      </p>
      <p className="text-body-muted mx-auto mt-2 max-w-2xl text-center text-sm">
        For investment opportunities, please contact us to request private offering materials.
      </p>
      <div className="mx-auto mt-10 max-w-xl">
        <ContactForm compact />
      </div>
    </Section>
  );
}
