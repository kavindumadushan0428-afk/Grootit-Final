import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WORK_PROJECTS } from "@/data/pages";

export function PortfolioSection() {
  const featured = WORK_PROJECTS.slice(0, 3);

  return (
    <section id="work" className="bg-white py-14 sm:py-18">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-[#0D6EFF]">
          SELECTED WORK
        </p>
        <h2 className="mt-2.5 font-display text-[clamp(1.85rem,3.2vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.025em] text-[#091326]">
          Ideas taking shape.
        </h2>
        <p className="mt-2.5 max-w-[440px] text-sm leading-relaxed text-[#5A6578]">
          Concept and demonstration pieces showing how we think. These are
          labelled honestly and are not paid client projects.
        </p>

        {/* 3-Card Concept / Demo Grid */}
        <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((item) => (
            <Link
              key={item.id}
              href={`/work/${item.id}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E7EEF7] bg-white transition-all duration-150 hover:border-[#BFD5F5] hover:shadow-[0_12px_30px_rgba(13,110,255,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6EFF]"
            >
              <div
                className={`relative aspect-[16/9] w-full bg-gradient-to-br ${item.gradientClass} p-4`}
              >
                <span className="inline-flex items-center rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold text-[#091326] shadow-sm">
                  {item.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#0D6EFF]">
                    {item.filterCategory}
                  </p>
                  <h3 className="mt-2 font-display text-base font-bold tracking-[-0.015em] text-[#091326]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#5A6578]">
                    {item.description}
                  </p>
                </div>

                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D6EFF]">
                  <span>View details</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-full border border-[#DCE6F2] bg-white px-5 py-2 text-xs font-semibold text-[#091326] transition-colors duration-150 hover:border-[#B6CAE6] hover:bg-[#F7FAFF]"
          >
            View all work
          </Link>
        </div>
      </div>
    </section>
  );
}
