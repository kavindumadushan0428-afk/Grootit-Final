import Link from "next/link";
import { FOOTER_DIVISION_LINKS, FOOTER_EXPLORE_LINKS } from "@/data/home";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="bg-[#060D1A] text-white">
      <div className="mx-auto max-w-[1140px] px-4 pt-12 pb-8 sm:px-6 sm:pt-14 sm:pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-block rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D6EFF]"
              aria-label="GROOTIT Home"
            >
              <BrandLogo variant="dark" />
            </Link>
            <p className="mt-3.5 max-w-[290px] text-xs leading-relaxed text-[#94A3B8] sm:text-[13px]">
              Creativity Meets Intelligence. A hybrid Creative + AI agency based
              in Sri Lanka, working with businesses internationally.
            </p>
          </div>

          {/* Explore & Divisions Columns */}
          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:pl-8">
            <div>
              <h3 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#64748B]">
                EXPLORE
              </h3>
              <ul className="mt-3.5 space-y-2.5">
                {FOOTER_EXPLORE_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#CBD5E1] transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6EFF] sm:text-[13px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#64748B]">
                DIVISIONS
              </h3>
              <ul className="mt-3.5 space-y-2.5">
                {FOOTER_DIVISION_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#CBD5E1] transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6EFF] sm:text-[13px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-[#64748B] sm:flex-row sm:items-center sm:text-xs">
          <p>&copy; 2026 GROOTIT. All rights reserved.</p>
          <p>Creativity Meets Intelligence.</p>
        </div>
      </div>
    </footer>
  );
}
