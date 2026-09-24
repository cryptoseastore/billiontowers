import Image from "next/image";
import Link from "next/link";
import { AccentArrow } from "./motion";

interface CtaLink {
  label: string;
  href: string;
}

interface HeroProps {
  title: string;
  tagline?: string;
  subtitle?: string;
  description?: string;
  extra?: string;
  image?: string;
  ctas?: CtaLink[];
  centered?: boolean;
}

export default function Hero({
  title,
  tagline,
  subtitle,
  description,
  extra,
  image,
  ctas,
  centered = true,
}: HeroProps) {
  return (
    <section className="relative min-h-[520px] overflow-hidden md:min-h-[600px] lg:min-h-[680px]">
      {image && (
        <div className="absolute inset-0">
          <Image src={image} alt="" fill priority className="object-cover object-top opacity-80" sizes="100vw" />
        </div>
      )}
      <div className="hero-overlay absolute inset-0" />

      <div className="relative flex min-h-[520px] flex-col justify-center px-6 py-20 md:min-h-[600px] lg:min-h-[680px] lg:px-12">
        <div className={`mx-auto w-full ${centered ? "max-w-4xl text-center" : "max-w-3xl"}`}>
          <h1 className={`heading-hero ${centered ? "" : "text-left"}`}>{title}</h1>

          {tagline && <h4 className={`heading-tagline mt-5 md:mt-6 ${centered ? "" : "text-left"}`}>{tagline}</h4>}

          {subtitle && <h5 className={`heading-sub mt-4 ${centered ? "" : "text-left"}`}>{subtitle}</h5>}

          {description && (
            <p className={`text-body mt-6 text-white/90 ${centered ? "mx-auto max-w-3xl" : ""}`}>{description}</p>
          )}

          {extra && (
            <p className={`text-body mt-4 text-white/85 ${centered ? "mx-auto max-w-3xl" : ""}`}>{extra}</p>
          )}

          {ctas && ctas.length > 0 && (
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {ctas.map((btn) => (
                <Link key={btn.label} href={btn.href} className="btn-primary group">
                  {btn.label}
                  <AccentArrow />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  title,
  subtitle,
  tagline,
  description,
  image,
}: {
  title: string;
  subtitle?: string;
  tagline?: string;
  description?: string;
  image?: string;
}) {
  return (
    <Hero
      title={title}
      subtitle={subtitle}
      tagline={tagline}
      description={description}
      image={image}
      centered={false}
    />
  );
}
