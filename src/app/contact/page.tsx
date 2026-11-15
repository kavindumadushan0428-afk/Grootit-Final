import { Suspense } from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CONTACT_NEXT_STEPS } from "@/data/pages";

export const metadata: Metadata = {
  title: "Contact — GROOTIT",
  description:
    "Have something ambitious in mind? Share a few details and start a conversation with GROOTIT.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#091326]">
      <Navbar />
      <main>
        {/* Top Hero + 2-Column Conversation & Form */}
        <section className="relative overflow-hidden bg-white pt-28 pb-12 sm:pt-32 sm:pb-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 h-[420px] w-[420px] bg-[radial-gradient(circle_at_top_right,_rgba(219,234,254,0.65),_transparent_70%)]"
          />

          <div className="relative mx-auto max-w-[1140px] px-4 sm:px-6">
            <div className="max-w-[540px]">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[#0D6EFF]">
                CONTACT
              </p>
              <h1 className="mt-3 font-display text-[clamp(2.25rem,4.3vw,3.5rem)] font-bold leading-[1.06] tracking-[-0.03em] text-[#091326] text-balance">
                Have something ambitious in mind?
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-[#5A6578] sm:text-[15px]">
                Whether it&apos;s a campaign, a website, a creative project or
                an AI idea, we&apos;d love to understand what you&apos;re
                building.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <h2 className="font-display text-lg font-bold tracking-[-0.015em] text-[#091326] sm:text-xl">
                  Let&apos;s start with a conversation.
                </h2>
                <p className="mt-2.5 max-w-[390px] text-sm leading-relaxed text-[#5A6578]">
                  Share a few details and we&apos;ll come back to you. We work
                  closely with you from the first conversation to the final
                  result.
                </p>

                <div className="mt-6 rounded-xl bg-[#EAF2FF] px-4 py-3 text-xs font-medium text-[#334155]">
                  Based in Sri Lanka, working with clients internationally.
                </div>
              </div>

              <div className="lg:col-span-7">
                <Suspense
                  fallback={
                    <div className="h-[460px] rounded-2xl border border-[#E7EEF7] bg-white p-8" />
                  }
                >
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[#0D6EFF]">
              WHAT HAPPENS NEXT?
            </p>
            <h2 className="mt-2.5 font-display text-[clamp(1.75rem,3vw,2.35rem)] font-bold leading-[1.12] tracking-[-0.025em] text-[#091326]">
              From first message to first steps.
            </h2>

            <div className="mt-9 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
              {CONTACT_NEXT_STEPS.map((item, idx) => (
                <div key={item.step}>
                  <div className="flex items-center">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C6DCFA] bg-white font-display text-xs font-bold tabular-nums text-[#091326]">
                      {item.step}
                    </span>
                    {idx < CONTACT_NEXT_STEPS.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="hidden h-px flex-1 bg-[#DCEBFF] lg:block"
                      />
                    )}
                  </div>

                  <h3 className="mt-4 font-display text-base font-bold text-[#091326]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#5A6578]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner
          title="Prefer to start with an idea?"
          subtitle="Tell us what you're building. We'll listen first."
          ctaLabel="See our work"
          ctaHref="/work"
        />
      </main>
      <Footer />
    </div>
  );
}
