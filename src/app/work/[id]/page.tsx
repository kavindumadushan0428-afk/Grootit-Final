import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getWorkProjectById, WORK_PROJECTS } from "@/data/pages";

export function generateStaticParams() {
  return WORK_PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getWorkProjectById(id);
  if (!project) {
    return { title: "Project Not Found — GROOTIT" };
  }
  return {
    title: `${project.title} (${project.badge}) — GROOTIT`,
    description: project.description,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getWorkProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-[#091326]">
      <Navbar />
      <main>
        {/* Header & Visual Concept Frame */}
        <section className="relative overflow-hidden bg-white pt-28 pb-12 sm:pt-32 sm:pb-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] bg-[radial-gradient(circle_at_top_right,_rgba(219,234,254,0.6),_transparent_70%)]"
          />

          <div className="relative mx-auto max-w-[1140px] px-4 sm:px-6">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5A6578] transition-colors hover:text-[#0D6EFF]"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Back to Our Work</span>
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <span className="rounded-full bg-[#EAF2FF] px-3 py-1 text-[11px] font-semibold text-[#0D6EFF]">
                {project.badge}
              </span>
              <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#5A6578]">
                {project.filterCategory}
              </span>
            </div>

            <h1 className="mt-3 max-w-[680px] font-display text-[clamp(2rem,4vw,3.15rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#091326]">
              {project.title}
            </h1>
            <p className="mt-4 max-w-[600px] text-base leading-relaxed text-[#5A6578]">
              {project.overview}
            </p>

            {/* Clean Visual Concept Demonstration Panel */}
            <div className="mt-8 overflow-hidden rounded-[24px] border border-[#E7EEF7] bg-white shadow-[0_12px_36px_rgba(9,19,38,0.05)]">
              <div
                className={`relative flex aspect-[16/7] min-h-[240px] w-full flex-col justify-between bg-gradient-to-br ${project.gradientClass} p-6 sm:p-10`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#091326] shadow-sm">
                    {project.badge}
                  </span>
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-[#091326]">
                    {project.filterCategory}
                  </span>
                </div>

                {/* Minimal Wireframe Representation */}
                <div className="mx-auto my-4 w-full max-w-[540px] rounded-2xl border border-white/40 bg-white/95 p-5 shadow-lg">
                  <div className="flex items-center justify-between border-b border-[#EEF3FA] pb-3">
                    <span className="text-xs font-bold text-[#091326]">
                      {project.title}
                    </span>
                    <span className="text-[11px] font-medium text-[#0D6EFF]">
                      {project.badge} Direction
                    </span>
                  </div>
                  <div className="mt-3.5 grid grid-cols-3 gap-2.5">
                    {project.deliverables.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-[#E7EEF7] bg-[#F8FBFF] p-3 text-[11px] font-medium text-[#334155]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-center text-xs font-medium text-white/95">
                  {project.demoCaption}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scope & Deliverables */}
        <section className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-[#E7EEF7] bg-white p-7">
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D6EFF]">
                  THINKING & APPROACH
                </p>
                <h2 className="mt-2 font-display text-xl font-bold text-[#091326]">
                  Key focus areas
                </h2>
                <ul className="mt-5 space-y-3">
                  {project.scopePoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-[#4D596C]"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF2FF] text-[#0D6EFF]">
                        <Check className="h-3 w-3" aria-hidden="true" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#E7EEF7] bg-[#F8FBFF] p-7">
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D6EFF]">
                  RELATED DIVISION
                </p>
                <h2 className="mt-2 font-display text-xl font-bold text-[#091326]">
                  {project.filterCategory}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-[#5A6578]">
                  Interested in building a real version tailored to your brand
                  or workflow? We shape every engagement cleanly from discovery
                  to delivery.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/contact?division=${project.divisionSlug}`}
                    className="inline-flex items-center justify-center rounded-full bg-[#0D6EFF] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#0058DD] sm:text-sm"
                  >
                    Start a Similar Project
                  </Link>
                  <Link
                    href={`/services/${project.divisionSlug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#DCE6F2] bg-white px-5 py-2.5 text-xs font-semibold text-[#091326] transition-colors hover:border-[#B6CAE6] sm:text-sm"
                  >
                    <span>Explore {project.filterCategory}</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
