"use client";

import Image from "next/image";
import { useState } from "react";

interface BlurImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectFit?: "cover" | "contain";
}

/** Wix-style blur-up image reveal */
export default function BlurImage({
  src,
  alt,
  fill,
  width,
  height,
  className = "",
  sizes,
  priority,
  objectFit = "cover",
}: BlurImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${fill ? "h-full w-full" : ""}`}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        priority={priority}
        className={`transition-all duration-[800ms] ease-in ${loaded ? "blur-0" : "blur-[9px]"} ${objectFit === "contain" ? "object-contain" : "object-cover"} ${className}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export function AccentArrow() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
