import Link from "next/link";
import { ArrowRight, Bot, Layout, Star, TrendingUp } from "lucide-react";
import { SERVICE_DIVISIONS, type ServiceDivision } from "@/data/services";

const DIVISION_ICONS: Record<ServiceDivision["icon"], React.ReactNode> = {
  bot: <Bot className="h-4 w-4" aria-hidden="true" />,
  star: <Star className="h-4 w-4" aria-hidden="true" />,
  layout: <Layout className="h-4 w-4" aria-hidden="true" />,
  trendingUp: <TrendingUp className="h-4 w-4" aria-hidden="true" />,
};

export function ServicesSection() {
  return (
    <>
      {/* 4 Focused Divisions Grid */}
      <section id="divisions" className="bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-[#0D6EFF]">
            WHAT WE DO
          </p>
          <h2 className="mt-2.5 max-w-[440px] font-display text-[clamp(1.85rem,3.2vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.025em] text-[#091326] text-balance">
            One creative team. Four focused divisions.
          </h2>

          <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_DIVISIONS.map((division) => (
              <Link
                key={division.slug}
                href={division.href}
                className="group flex h-full flex-col justify-between rounded-2xl border border-[#E7EEF7] bg-white p-6 transition-all duration-150 hover:border-[#BFD5F5] hover:shadow-[0_10px_28px_rgba(13,110,255,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6EFF]"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#0D6EFF]">
                    {DIVISION_ICONS[division.icon]}
                  </div>

                  <h3 className="mt-5 font-display text-base font-bold tracking-[-0.015em] text-[#091326]">
                    {division.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5A6578]">
                    {division.shortDescription}
                  </p>
                </div>

                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D6EFF]">
                  <span>Explore</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width Dark Featured Capability Band */}
      <section className="bg-[#0B1B36] py-14 text-white sm:py-18">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Copy */}
            <div className="lg:col-span-6">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[#5BA2FF]">
                FEATURED CAPABILITY
              </p>
              <h2 className="mt-3 max-w-[440px] font-display text-[clamp(1.85rem,3.2vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.025em] text-white text-balance">
                From creative thinking to intelligent execution.
              </h2>
              <p className="mt-4 max-w-[460px] text-sm leading-relaxed text-[#B5C6DF]">
                We bring strategy, visual creativity, modern websites and
                intelligent automation together in one team, so your brand, your
                digital presence and your day-to-day operations work as one
                connected system.
              </p>
              <div className="mt-7">
                <a
                  href="#divisions"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-[#091326] transition-colors duration-150 hover:bg-[#EAF2FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-sm"
                >
                  Explore services
                </a>
              </div>
            </div>

            {/* Right Connected Hub Diagram matching screenshot */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto flex aspect-[4/3] max-w-[420px] items-center justify-center">
                {/* Subtle connecting crosshairs */}
                <div
                  aria-hidden="true"
                  className="absolute h-px w-[64%] bg-white/10"
                />
                <div
                  aria-hidden="true"
                  className="absolute h-[64%] w-px bg-white/10"
                />

                {/* 4 Orbiting Discipline Circles */}
                <div className="grid grid-cols-2 gap-12 sm:gap-16">
                  {[
                    { label: "Strategy", href: "/services/brand-strategy" },
                    { label: "Creative", href: "/services/creative-branding" },
                    { label: "Web", href: "/services/web-digital" },
                    { label: "Automation", href: "/services/ai-automation" },
                  ].map((node) => (
                    <Link
                      key={node.label}
                      href={node.href}
                      className="flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-[#122647]/90 text-xs font-medium text-[#DCE7F7] transition-colors duration-150 hover:border-[#0D6EFF] hover:bg-[#16305A] hover:text-white"
                    >
                      {node.label}
                    </Link>
                  ))}
                </div>

                {/* Central GROOTIT Hub */}
                <div className="pointer-events-none absolute flex h-14 w-14 items-center justify-center rounded-full bg-[#0D6EFF] text-[10px] font-extrabold tracking-tight text-white shadow-[0_0_28px_rgba(13,110,255,0.45)]">
                  GROOTIT
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
