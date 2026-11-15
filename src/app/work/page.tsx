import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WorkGallery } from "@/components/WorkGallery";

export const metadata: Metadata = {
  title: "Our Work — GROOTIT",
  description:
    "A selection of concepts and demonstrations from GROOTIT across Creative & Branding, Web & Digital Experiences, AI & Automation, and Digital Growth.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white text-[#091326]">
      <Navbar />
      <main>
        <WorkGallery />

        {/* Full-Width Dark Collaboration Band */}
        <section className="bg-[#0B1B36] py-14 text-white sm:py-16">
          <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[#5BA2FF]">
              COLLABORATION
            </p>
            <h2 className="mt-2.5 max-w-[540px] font-display text-[clamp(1.75rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.025em] text-white text-balance">
              Let&apos;s make the next one together.
            </h2>
            <p className="mt-3 max-w-[460px] text-sm leading-relaxed text-[#B5C6DF]">
              We work closely with the people behind each idea, so the result
              feels like yours, only sharper.
            </p>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
