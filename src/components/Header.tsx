"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/site";
import { LOGO } from "@/lib/brand";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_4px_rgba(0,0,0,0.15)]" : ""
        }`}
        style={{ height: "var(--header-height)" }}
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 lg:px-10">
          <Link href="/" className="relative z-50 shrink-0">
            <Image src={LOGO} alt="Billion Towers" width={120} height={48} priority className="h-12 w-auto object-contain" />
          </Link>

          <nav className="hidden items-center lg:flex">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="relative z-50 p-2 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="block text-sm font-normal uppercase tracking-wider text-[#232322]">
              {open ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-black lg:hidden">
          <div className="flex justify-center pt-20">
            <Image src={LOGO} alt="Billion Towers" width={100} height={100} />
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-4 text-xl text-white transition hover:text-brand-orange"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
