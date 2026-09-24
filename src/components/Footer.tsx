import Link from "next/link";
import Image from "next/image";
import { FOOTER_COLUMNS, SITE, SOCIAL_LINKS } from "@/lib/site";
import { LOGO } from "@/lib/brand";

function SocialIcon({ icon }: { icon: string }) {
  const paths: Record<string, React.ReactNode> = {
    linkedin: (
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-12h4v-2a4 4 0 014 0v2h4v-7a6 6 0 00-6-6zM2 9h4v12H2V9zM4 6a2 2 0 100-4 2 2 0 000 4z" />
    ),
    x: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
    facebook: (
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    ),
  };

  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      {paths[icon]}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white text-[#232322]">
      <div className="border-t border-[#232322]/10 bg-[#f4f4f4] px-5 py-6 md:px-10 lg:px-16">
        <div className="section-inner space-y-3 text-center text-sm text-[#727272]">
          <p>{SITE.legalName} | Wyoming, USA | FinCEN MSB Registration pending.</p>
          <p>
            See our{" "}
            <Link href="/privacy-policy/" className="text-brand-blue underline transition hover:text-brand-green">
              Privacy Policy
            </Link>
            , Risk Disclosures, and Important Disclaimers for forward-looking statements.
          </p>
          <p className="text-xs">
            Disclaimer: This website does not constitute an offer to sell or a solicitation to buy securities.
            {SITE.legalName}&apos;s offerings are available only to accredited or offshore investors under Regulation D,
            Rule 506(b).
          </p>
        </div>
      </div>

      <div className="section-wrap !py-12">
        <div className="section-inner">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <Link href="/" className="inline-block">
                <Image src={LOGO} alt={SITE.name} width={140} height={56} className="h-14 w-auto object-contain" />
              </Link>
              <div className="mt-6 space-y-1 text-sm">
                <p className="font-normal">{SITE.address.line1}</p>
                <p>{SITE.address.line2}</p>
                <p className="mt-3">
                  T.{" "}
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="transition hover:text-brand-green">
                    {SITE.phone}
                  </a>
                </p>
              </div>
              <Link href="/contact/" className="btn-primary mt-6 inline-flex text-sm">
                Send Us Inquiry
              </Link>
              <div className="mt-6 flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#727272] transition hover:text-brand-orange"
                    aria-label={social.label}
                  >
                    <SocialIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {[
                { title: "About", links: FOOTER_COLUMNS.about },
                { title: "Business", links: FOOTER_COLUMNS.business },
                { title: "Legal", links: FOOTER_COLUMNS.legal },
              ].map((col) => (
                <div key={col.title}>
                  <h6 className="mb-4 text-sm font-normal uppercase tracking-wider">{col.title}</h6>
                  <ul className="space-y-2 text-sm">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="transition hover:text-brand-green">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="divider-line mt-12" />
          <p className="mt-8 text-center text-sm text-[#727272]">
            &copy; {new Date().getFullYear()} by {SITE.legalName}
          </p>
        </div>
      </div>
    </footer>
  );
}
