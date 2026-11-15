import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ServiceDemoPreview } from "@/components/ServiceDemoPreview";
import {
  ALL_SUBSERVICES,
  getDivisionBySlug,
  getSubserviceBySlug,
  SERVICE_DIVISIONS,
} from "@/data/services";

export function generateStaticParams() {
  const divisionParams = SERVICE_DIVISIONS.map((d) => ({ slug: d.slug }));
  const subserviceParams = ALL_SUBSERVICES.map((s) => ({ slug: s.id }));
  return [...divisionParams, ...subserviceParams];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subservice = getSubserviceBySlug(slug);
  if (subservice) {
    return {
      title: `${subservice.name} — ${subservice.divisionTitle} | GROOTIT`,
      description: subservice.summary,
    };
  }
  const division = getDivisionBySlug(slug);
  if (division) {
    return {
      title: `${division.title} — GROOTIT`,
      description: division.summary,
    };
  }
  return { title: "Service Not Found — GROOTIT" };
}

export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subservice = getSubserviceBySlug(slug);

  if (subservice) {
    const parentDivision = getDivisionBySlug(subservice.divisionSlug);
    const siblingServices =
      parentDivision?.subservices.filter((s) => s.id !== subservice.id) ?? [];

    return (
      <div className="min-h-screen bg-white text-[#091326]">
        <Navbar />
        <main>
          {/* Subservice Hero */}
          <section className="relative overflow-hidden bg-white pt-28 pb-12 sm:pt-32 sm:pb-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 right-0 h-[420px] w-[420px] bg-[radial-gradient(circle_at_top_right,_rgba(219,234,254,0.65),_transparent_70%)]"
            />

            <div className="relative mx-auto max-w-[1140px] px-4 sm:px-6">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#64748B]">
                <Link href="/" className="hover:text-[#0D6EFF]">
                  Home
                </Link>
                <span>/</span>
                {parentDivision && (
                  <>
                    <Link
                      href={parentDivision.href}
                      className="hover:text-[#0D6EFF]"
                    >
                      {parentDivision.title}
                    </Link>
                    <span>/</span>
                  </>
                )}
                <span className="font-semibold text-[#091326]">
                  {subservice.name}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-6">
                  <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D6EFF]">
                    {subservice.divisionTitle}
                  </p>
                  <h1 className="mt-3 font-display text-[clamp(2.1rem,4vw,3.15rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#091326] text-balance">
                    {subservice.name}
                  </h1>
                  <p className="mt-4 text-base leading-relaxed text-[#5A6578]">
                    {subservice.summary}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#5A6578]">
                    {subservice.overview}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/contact?division=${subservice.divisionSlug}&service=${subservice.id}`}
                      className="inline-flex items-center justify-center rounded-full bg-[#0D6EFF] px-6 py-2.5 text-sm font-medium text-white shadow-[0_6px_18px_rgba(13,110,255,0.22)] transition-colors duration-150 hover:bg-[#0058DD]"
                    >
                      Start a Project
                    </Link>
                    {parentDivision && (
                      <Link
                        href={parentDivision.href}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#DCE6F2] bg-white px-5 py-2.5 text-sm font-medium text-[#091326] transition-colors duration-150 hover:border-[#B6CAE6] hover:bg-[#F8FBFF]"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>All {parentDivision.title}</span>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Relevant Visual Demonstration */}
                <div className="lg:col-span-6">
                  <ServiceDemoPreview subservice={subservice} />
                </div>
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="bg-white py-10 sm:py-14">
            <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[#0D6EFF]">
                BENEFITS
              </p>
              <h2 className="mt-2.5 font-display text-[clamp(1.65rem,3vw,2.25rem)] font-bold leading-[1.15] tracking-[-0.025em] text-[#091326]">
                Why it matters.
              </h2>

              <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
                {subservice.benefits.map((benefit) => (
                  <article
                    key={benefit.title}
                    className="rounded-2xl border border-[#E7EEF7] bg-white p-6"
                  >
                    <h3 className="font-display text-sm font-bold text-[#091326]">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#5A6578] sm:text-[13px]">
                      {benefit.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 4-Step Delivery Process */}
          <section className="bg-white py-10 sm:py-14">
            <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[#0D6EFF]">
                THE PROCESS
              </p>
              <h2 className="mt-2.5 font-display text-[clamp(1.65rem,3vw,2.25rem)] font-bold leading-[1.15] tracking-[-0.025em] text-[#091326]">
                How we deliver {subservice.name}.
              </h2>

              <div className="mt-9 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
                {subservice.process.map((step, idx) => (
                  <div key={step.step}>
                    <div className="flex items-center">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C6DCFA] bg-white font-display text-xs font-bold tabular-nums text-[#091326]">
                        {step.step}
                      </span>
                      {idx < subservice.process.length - 1 && (
                        <div
                          aria-hidden="true"
                          className="hidden h-px flex-1 bg-[#DCEBFF] lg:block"
                        />
                      )}
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold text-[#091326]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[#5A6578]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Sibling Services Navigation */}
          {siblingServices.length > 0 && parentDivision && (
            <section className="bg-white py-8 sm:py-10">
              <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
                <div className="rounded-2xl border border-[#E7EEF7] bg-[#F8FBFF] p-6 sm:p-7">
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D6EFF]">
                    MORE IN {parentDivision.title}
                  </p>
                  <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                    {siblingServices.map((sib) => (
                      <Link
                        key={sib.id}
                        href={`/services/${sib.id}`}
                        className="flex items-center gap-2.5 rounded-xl border border-[#E2ECF9] bg-white px-4 py-3 text-xs font-medium text-[#091326] transition-colors hover:border-[#0D6EFF] hover:text-[#0D6EFF] sm:text-[13px]"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D6EFF]" />
                        <span>{sib.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          <CtaBanner />
        </main>
        <Footer />
      </div>
    );
  }

  const division = getDivisionBySlug(slug);
  if (!division) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-[#091326]">
      <Navbar />
      <main>
        {/* Division Hero */}
        <section className="relative overflow-hidden bg-white pt-28 pb-12 sm:pt-32 sm:pb-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 h-[420px] w-[420px] bg-[radial-gradient(circle_at_top_right,_rgba(219,234,254,0.65),_transparent_70%)]"
          />

          <div className="relative mx-auto max-w-[1140px] px-4 sm:px-6">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[#0D6EFF]">
              {division.index}
            </p>
            <h1 className="mt-3 max-w-[620px] font-display text-[clamp(2.25rem,4.3vw,3.4rem)] font-bold leading-[1.06] tracking-[-0.03em] text-[#091326]">
              {division.title}
            </h1>
            <p className="mt-4 max-w-[540px] text-base leading-relaxed text-[#5A6578]">
              {division.tagline}
            </p>

            {/* Division Switcher Pills matching services-design screenshot */}
            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              {SERVICE_DIVISIONS.map((div) => {
                const isCurrent = div.slug === division.slug;
                return (
                  <Link
                    key={div.slug}
                    href={div.href}
                    className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-150 ${
                      isCurrent
                        ? "bg-[#0D6EFF] text-white"
                        : "border border-[#DCE6F2] bg-white text-[#4D596C] hover:border-[#B6CAE6] hover:text-[#091326]"
                    }`}
                  >
                    {div.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Subservices Card matching services-design screenshot */}
        <section className="bg-white py-6 sm:py-10">
          <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
            <div className="rounded-2xl border border-[#E7EEF7] bg-white p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <p className="text-[10px] font-semibold tracking-[0.12em] text-[#0D6EFF]">
                    {division.index}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-[#091326]">
                    {division.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#5A6578]">
                    {division.summary}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={`/contact?division=${division.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#0D6EFF] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0058DD] sm:text-sm"
                    >
                      <span>Discuss {division.title}</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7">
                  {division.subservices.map((sub) => (
                    <Link
                      key={sub.id}
                      href={`/services/${sub.id}`}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-[#E7EEF7] bg-white px-4 py-3.5 text-xs font-medium text-[#091326] transition-all duration-150 hover:border-[#0D6EFF] hover:bg-[#F8FBFF] sm:text-[13px]"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D6EFF]" />
                        <span>{sub.name}</span>
                      </span>
                      <ArrowRight
                        className="h-3.5 w-3.5 shrink-0 text-[#94A3B8] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-[#0D6EFF]"
                        aria-hidden="true"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Honest Scope Note matching services-design screenshot */}
            <div className="mt-6 rounded-xl bg-[#EAF2FF] px-5 py-3.5 text-xs leading-relaxed text-[#334155]">
              These are our official service offerings, including capabilities we
              scope carefully based on your project stage. If you are exploring
              an emerging requirement,{" "}
              <Link
                href={`/contact?division=${division.slug}`}
                className="font-semibold text-[#0D6EFF] underline"
              >
                send an inquiry
              </Link>{" "}
              and we will tell you honestly what we can deliver today.
            </div>
          </div>
        </section>

        {/* Full-Width Dark Featured Capability Band matching services-design */}
        <section className="mt-8 bg-[#0B1B36] py-14 text-white sm:py-16">
          <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <p className="text-[11px] font-semibold tracking-[0.14em] text-[#5BA2FF]">
                  FEATURED CAPABILITY
                </p>
                <h2 className="mt-2.5 font-display text-[clamp(1.75rem,3vw,2.35rem)] font-bold leading-[1.12] tracking-[-0.025em] text-white">
                  One team, joined-up work.
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-[#B5C6DF] lg:col-span-7">
                Because creative, web, automation and growth sit under one roof,
                your brand, website and workflows are designed together rather
                than stitched together afterwards.
              </p>
            </div>
          </div>
        </section>

        {/* 3-Step Working Together Strip matching services-design */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[#0D6EFF]">
              WORKING TOGETHER
            </p>
            <h2 className="mt-2.5 font-display text-[clamp(1.75rem,3vw,2.35rem)] font-bold leading-[1.12] tracking-[-0.025em] text-[#091326]">
              How we collaborate.
            </h2>

            <div className="mt-9 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-7">
              {[
                {
                  step: "01",
                  title: "Understand",
                  description: "We start with your goals, audience and context.",
                },
                {
                  step: "02",
                  title: "Collaborate",
                  description: "You stay involved at every important decision.",
                },
                {
                  step: "03",
                  title: "Deliver",
                  description:
                    "We build and hand over work you can use and maintain.",
                },
              ].map((item, idx) => (
                <div key={item.step}>
                  <div className="flex items-center">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C6DCFA] bg-white font-display text-xs font-bold tabular-nums text-[#091326]">
                      {item.step}
                    </span>
                    {idx < 2 && (
                      <div
                        aria-hidden="true"
                        className="hidden h-px flex-1 bg-[#DCEBFF] md:block"
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

        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
