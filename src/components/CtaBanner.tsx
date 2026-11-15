import Link from "next/link";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function CtaBanner({
  title = "Have something great in mind?",
  subtitle = "Tell us what you're building. We'll listen first.",
  ctaLabel = "Start a Conversation",
  ctaHref = "/contact",
}: CtaBannerProps) {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
        <div className="rounded-[24px] bg-[#0B1E3D] px-6 py-12 text-center text-white sm:px-10 sm:py-14">
          <h2 className="mx-auto max-w-[440px] font-display text-[clamp(1.75rem,3vw,2.45rem)] font-bold leading-[1.15] tracking-[-0.025em] text-white text-balance">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-[400px] text-sm leading-relaxed text-[#B5C6DF]">
            {subtitle}
          </p>
          <div className="mt-7">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-[#091326] transition-colors duration-150 hover:bg-[#EAF2FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-sm"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
