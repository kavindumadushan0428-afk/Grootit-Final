import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  ABOUT_BELIEFS,
  ABOUT_FOUNDERS,
  ABOUT_WORKING_PRINCIPLES,
} from "@/data/pages";
import { SERVICE_DIVISIONS } from "@/data/services";

export const metadata: Metadata = {
  title: "About Us — GROOTIT",
  description:
    "GROOTIT is a two-founder hybrid Creative + AI agency uniting creative craft, modern technology, and intelligent automation.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#091326]">
      <Navbar />
      <main>
        {/* Hero Intro */}
        <section className="relative overflow-hidden bg-white pt-28 pb-12 sm:pt-32 sm:pb-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 h-[420px] w-[420px] bg-[radial-gradient(circle_at_top_right,_rgba(219,234,254,0.65),_transparent_70%)]"
          />

          <div className="relative mx-auto max-w-[1140px] px-4 sm:px-6">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[#0D6EFF]">
              ABOUT US
            </p>
            <h1 className="mt-3 max-w-[540px] font-display text-[clamp(2.25rem,4.3vw,3.5rem)] font-bold leading-[1.06] tracking-[-0.03em] text-[#091326] text-balance">
              Small team. Big creative thinking.
            </h1>
            <p className="mt-4 max-w-[460px] text-sm leading-relaxed text-[#5A6578] sm:text-[15px]">
              GROOTIT is a two-founder hybrid Creative + AI agency.
            </p>
          </div>
        </section>

        {/* Our Story Split */}
        <section className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <p className="text-[11px] font-semibold tracking-[0.14em] text-[#0D6EFF]">
                  OUR STORY
                </p>
                <h2 className="mt-2.5 font-display text-[clamp(1.75rem,3vw,2.35rem)] font-bold leading-[1.12] tracking-[-0.025em] text-[#091326]">
                  Where creativity and intelligence meet.
                </h2>
              </div>

              <div className="lg:col-span-7 lg:pt-4">
                <p className="max-w-[560px] text-sm leading-relaxed text-[#5A6578] sm:text-[15px]">
                  GROOTIT brings together creative craft, modern technology and
                  artificial intelligence under one roof. We help businesses
                  build their brand, launch digital experiences and put
                  intelligent tools to work, with one team that understands all
                  of it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Believe */}
        <section className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[#0D6EFF]">
              WHAT WE BELIEVE
            </p>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
              {ABOUT_BELIEFS.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#E7EEF7] bg-white p-6"
                >
                  <h3 className="font-display text-sm font-bold text-[#091326]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5A6578] sm:text-[13px]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* The Team */}
        <section className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[#0D6EFF]">
              THE TEAM
            </p>
            <h2 className="mt-2.5 font-display text-[clamp(1.75rem,3vw,2.35rem)] font-bold leading-[1.12] tracking-[-0.025em] text-[#091326]">
              Two founders, two complementary strengths.
            </h2>

            <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">
              {ABOUT_FOUNDERS.map((founder, idx) => (
                <article
                  key={founder.role}
                  className="flex items-start gap-4 rounded-2xl border border-[#E7EEF7] bg-white p-6"
                >
                  <div
                    aria-hidden="true"
                    className={`h-12 w-12 shrink-0 rounded-xl ${
                      idx === 0
                        ? "bg-gradient-to-br from-[#DCEBFF] to-[#9FC5FF]"
                        : "bg-gradient-to-br from-[#EAF2FF] to-[#B7D6FF]"
                    }`}
                  />
                  <div>
                    <h3 className="font-display text-sm font-bold text-[#091326]">
                      {founder.role}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#5A6578] sm:text-[13px]">
                      {founder.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Our Four Divisions */}
        <section className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[#0D6EFF]">
              OUR FOUR DIVISIONS
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICE_DIVISIONS.map((division) => (
                <Link
                  key={division.slug}
                  href={division.href}
                  className="rounded-2xl border border-[#E7EEF7] bg-white px-5 py-4 text-xs font-semibold text-[#091326] transition-colors duration-150 hover:border-[#0D6EFF]/50 hover:bg-[#F8FBFF] sm:text-[13px]"
                >
                  {division.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Full-Width Dark Working Principles */}
        <section className="bg-[#0B1B36] py-14 text-white sm:py-16">
          <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <p className="text-[11px] font-semibold tracking-[0.14em] text-[#5BA2FF]">
                  WORKING PRINCIPLES
                </p>
                <h2 className="mt-2.5 font-display text-[clamp(1.75rem,3vw,2.35rem)] font-bold leading-[1.12] tracking-[-0.025em] text-white">
                  How we like to work.
                </h2>
              </div>

              <ul className="space-y-3 lg:col-span-7">
                {ABOUT_WORKING_PRINCIPLES.map((principle) => (
                  <li
                    key={principle}
                    className="flex items-center gap-3 text-sm text-[#DCE7F7]"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D6EFF]" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pale-Blue Our Promise Strip */}
        <section className="bg-white pt-12 pb-2 sm:pt-14">
          <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
            <div className="rounded-2xl border border-[#E2EDFF] bg-[#F2F7FF] p-7 sm:p-9">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[#0D6EFF]">
                OUR PROMISE
              </p>
              <h2 className="mt-2.5 max-w-[440px] font-display text-lg font-bold leading-snug text-[#091326] sm:text-xl">
                Honest advice, careful work and a team that actually listens.
              </h2>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
