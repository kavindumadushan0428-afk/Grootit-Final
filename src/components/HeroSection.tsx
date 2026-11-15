"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bot, Star } from "lucide-react";

export function HeroSection() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [allowParallax, setAllowParallax] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const finePointer = window.matchMedia("(pointer: fine)");

    const updateCapability = () => {
      setAllowParallax(!reducedMotion.matches && finePointer.matches);
    };

    updateCapability();
    reducedMotion.addEventListener("change", updateCapability);
    finePointer.addEventListener("change", updateCapability);
    return () => {
      reducedMotion.removeEventListener("change", updateCapability);
      finePointer.removeEventListener("change", updateCapability);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!allowParallax) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    setOffset({
      x: Math.max(-1, Math.min(1, nx)),
      y: Math.max(-1, Math.min(1, ny)),
    });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const layerTransform = (multiplier: number) =>
    allowParallax
      ? {
          transform: `translate3d(${(offset.x * multiplier).toFixed(2)}px, ${(
            offset.y * multiplier
          ).toFixed(2)}px, 0)`,
        }
      : undefined;

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-gradient-to-b from-white via-[#F6FAFF] to-[#E9F2FF]/85 pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-24 lg:pb-10"
    >
      {/* Subtle ambient background continuity behind the enlarged illustration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-8%] h-[540px] w-[540px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(191,219,254,0.35),_transparent_68%)]"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[45fr_55fr] lg:gap-10 xl:gap-14">
          {/* Left Copy Column (45% on desktop) */}
          <div className="min-w-0">
            <p
              className="hero-stagger text-[11px] font-semibold tracking-[0.14em] text-[#0D6EFF]"
              style={{ animationDelay: "0ms" }}
            >
              CREATIVE &times; TECHNOLOGY &times; AI
            </p>

            <h1
              className="hero-stagger mt-3.5 font-display text-[clamp(2.45rem,5vw,4.5rem)] font-bold leading-[1.03] tracking-[-0.032em] text-[#091326] text-balance"
              style={{ animationDelay: "70ms" }}
            >
              Creativity Meets Intelligence.
            </h1>

            <p
              className="hero-stagger mt-5 max-w-[460px] text-base leading-relaxed text-[#5A6578] sm:text-[17px] lg:text-[18px]"
              style={{ animationDelay: "140ms" }}
            >
              We build brands, craft digital experiences, and develop
              intelligent solutions that drive business growth.
            </p>

            <div
              className="hero-stagger mt-8 flex flex-wrap items-center gap-3.5"
              style={{ animationDelay: "210ms" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap shrink-0 rounded-full bg-[#0D6EFF] px-6 py-3 text-sm font-medium text-white shadow-[0_6px_18px_rgba(13,110,255,0.22)] transition-colors duration-150 hover:bg-[#0058DD] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6EFF]"
              >
                Start a Project
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center whitespace-nowrap shrink-0 rounded-full border border-[#DCE6F2] bg-white px-6 py-3 text-sm font-medium text-[#091326] transition-colors duration-150 hover:border-[#B8CCE6] hover:bg-[#F8FBFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6EFF]"
              >
                See Our Work
              </Link>
            </div>
          </div>

          {/* Right Illustration Column (55% on desktop, ~35–40% enlarged, layered parallax) */}
          <div className="min-w-0 flex items-center justify-center lg:justify-end">
            <div className="relative flex aspect-square w-full max-w-[310px] items-center justify-center sm:max-w-[390px] lg:max-w-[540px] xl:max-w-[580px]">
              {/* Layer 1: Soft Pale-Blue Sphere Aura */}
              <div
                aria-hidden="true"
                style={layerTransform(5)}
                className="absolute inset-4 rounded-full bg-gradient-to-br from-[#EDF5FF] via-[#DCEBFF] to-[#B7D6FF] transition-transform duration-300 ease-out will-change-transform"
              />

              {/* Layer 2: Main Minimal Browser Card */}
              <div
                aria-hidden="true"
                style={layerTransform(10)}
                className="relative z-0 w-[82%] rounded-2xl border border-white/85 bg-white/95 p-5 shadow-[0_18px_46px_rgba(13,110,255,0.09)] transition-transform duration-300 ease-out will-change-transform sm:p-6 lg:p-7"
              >
                <div className="flex items-center gap-1.5 border-b border-[#EEF3FA] pb-3.5 sm:pb-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#DCE6F5]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#DCE6F5]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#DCE6F5]" />
                </div>
                <div className="mt-5 space-y-3 pb-10 sm:mt-6 sm:pb-14">
                  <div className="h-3.5 w-3/4 rounded-full bg-[#EBF2FC]" />
                  <div className="h-3.5 w-1/2 rounded-full bg-[#F2F6FC]" />
                  <div className="mt-5 grid grid-cols-3 gap-3 pt-2">
                    <div className="h-14 rounded-xl bg-[#F4F8FF] sm:h-16 lg:h-20" />
                    <div className="h-14 rounded-xl bg-[#EAF2FF] sm:h-16 lg:h-20" />
                    <div className="h-14 rounded-xl bg-[#F4F8FF] sm:h-16 lg:h-20" />
                  </div>
                </div>
              </div>

              {/* Layer 3: Top-Right Floating AI Tile */}
              <div
                aria-hidden="true"
                style={layerTransform(16)}
                className="absolute top-7 right-5 z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E7EEF7] bg-white text-[#0D6EFF] shadow-[0_10px_26px_rgba(9,19,38,0.08)] transition-transform duration-300 ease-out will-change-transform sm:top-9 sm:right-7 sm:h-14 sm:w-14"
              >
                <Bot className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>

              {/* Layer 4: Bottom-Right Growth Chart Mini-Card */}
              <div
                aria-hidden="true"
                style={layerTransform(14)}
                className="absolute right-3 bottom-8 z-10 w-[45%] rounded-2xl border border-[#E7EEF7] bg-white p-4 shadow-[0_14px_32px_rgba(9,19,38,0.08)] transition-transform duration-300 ease-out will-change-transform sm:right-5 sm:bottom-11 sm:p-5"
              >
                <div className="flex h-14 items-end justify-between gap-2 px-1 sm:h-16 lg:h-20">
                  <span className="h-5 w-2.5 rounded-t-md bg-[#DCEBFF] sm:h-7 sm:w-3" />
                  <span className="h-8 w-2.5 rounded-t-md bg-[#BBD6FF] sm:h-11 sm:w-3" />
                  <span className="h-11 w-2.5 rounded-t-md bg-[#7CB2FF] sm:h-14 sm:w-3" />
                  <span className="h-14 w-2.5 rounded-t-md bg-[#0D6EFF] sm:h-16 lg:h-20 sm:w-3" />
                </div>
              </div>

              {/* Layer 5: Bottom-Left Floating Creative Tile */}
              <div
                aria-hidden="true"
                style={layerTransform(18)}
                className="absolute bottom-12 left-4 z-10 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E7EEF7] bg-white text-[#0D6EFF] shadow-[0_10px_24px_rgba(9,19,38,0.08)] transition-transform duration-300 ease-out will-change-transform sm:bottom-16 sm:left-6 sm:h-13 sm:w-13"
              >
                <Star className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
