"use client";

import Image from "next/image";
import Link from "next/link";
import BlurImage, { AccentArrow } from "./motion";

export function Btn({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "link";
  className?: string;
}) {
  const classes = {
    primary: "btn-primary group",
    outline: "btn-outline",
    link: "btn-link",
  }[variant];

  return (
    <Link href={href} className={`${classes} ${className}`}>
      {children}
      {variant === "primary" && <AccentArrow />}
    </Link>
  );
}

export function Section({
  children,
  alt,
  id,
  className = "",
}: {
  children: React.ReactNode;
  alt?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`section-wrap ${alt ? "section-alt" : ""} ${className}`}>
      <div className="section-inner">{children}</div>
    </section>
  );
}

export function Split({
  children,
  reverse,
  className = "",
}: {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${reverse ? "lg:[&>*:first-child]:order-2" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function IconCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="card-icon h-full">
      <div className="relative mb-4 h-16 w-16 md:h-20 md:w-20">
        <Image src={icon} alt="" fill className="object-contain" sizes="80px" loading="lazy" />
      </div>
      <h3 className="heading-card">{title}</h3>
      <p className="text-body-muted mt-3 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export function AudienceCard({
  image,
  title,
  description,
  cta,
  extra,
}: {
  image: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  extra?: string;
}) {
  return (
    <div className="card-audience">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <BlurImage src={image} alt={title} fill sizes="33vw" />
      </div>
      <div className="flex flex-1 flex-col p-6 text-center md:p-8">
        <h3 className="heading-card">{title}</h3>
        <p className="text-body mt-4 flex-1 text-sm">{description}</p>
        {extra && <p className="text-body-muted mt-3 text-sm">{extra}</p>}
        <Btn href={cta.href} className="mx-auto mt-6">
          {cta.label}
        </Btn>
      </div>
    </div>
  );
}

export function EcosystemCard({
  title,
  description,
  cta,
}: {
  title: string;
  description: string;
  cta: { label: string; href: string };
}) {
  return (
    <div className="flex flex-col p-6 text-center md:p-8">
      <h5 className="text-lg font-normal text-[#232322] md:text-xl">{title}</h5>
      <p className="text-body-muted mt-4 flex-1 text-sm">{description}</p>
      <Btn href={cta.href} variant="link" className="mx-auto mt-4 justify-center">
        {cta.label}
      </Btn>
    </div>
  );
}

export function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mb-10 text-center md:mb-12">
      <h2 className="heading-section">{children}</h2>
      {subtitle && <p className="text-label-green mt-3">{subtitle}</p>}
    </div>
  );
}

export function IllustrationRow({ images: imgs }: { images: { src: string; alt: string; w: number; h: number }[] }) {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10">
      {imgs.map((img, i) => (
        <div key={img.alt + i} className="relative" style={{ width: img.w, height: img.h }}>
          <BlurImage src={img.src} alt={img.alt} fill sizes={`${img.w}px`} objectFit="contain" />
        </div>
      ))}
    </div>
  );
}

/** Centered content block — matches Wix section text layout */
export function CenterBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`section-narrow text-center ${className}`}>{children}</div>;
}
