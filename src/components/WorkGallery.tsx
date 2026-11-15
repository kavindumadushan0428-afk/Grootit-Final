"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  WORK_CATEGORIES,
  WORK_PROJECTS,
  type WorkCategory,
} from "@/data/pages";

export function WorkGallery() {
  const [selectedCategory, setSelectedCategory] =
    useState<WorkCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? WORK_PROJECTS
      : WORK_PROJECTS.filter(
          (project) => project.filterCategory === selectedCategory
        );

  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-14 sm:pt-32 sm:pb-18">
      {/* Subtle Top-Right Pale-Blue Radial Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-[420px] w-[420px] bg-[radial-gradient(circle_at_top_right,_rgba(219,234,254,0.65),_transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1140px] px-4 sm:px-6">
        {/* Page Header */}
        <div className="max-w-[540px]">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-[#0D6EFF]">
            OUR WORK
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,4.3vw,3.5rem)] font-bold leading-[1.06] tracking-[-0.03em] text-[#091326] text-balance">
            Ideas, thoughtfully brought to life.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[#5A6578] sm:text-[15px]">
            A selection of concepts and demonstrations. Each one is clearly
            labelled — we only mark something as a real project when it is one.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="group"
          aria-label="Filter projects by division"
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          {WORK_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6EFF] cursor-pointer ${
                  isSelected
                    ? "bg-[#0D6EFF] text-white"
                    : "border border-[#DCE6F2] bg-white text-[#4D596C] hover:border-[#B6CAE6] hover:text-[#091326]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 3-Column Filtered Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E7EEF7] bg-white transition-all duration-150 hover:border-[#BFD5F5] hover:shadow-[0_12px_30px_rgba(13,110,255,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6EFF]"
            >
              <div
                className={`relative aspect-[16/9] w-full bg-gradient-to-br ${project.gradientClass} p-4`}
              >
                <span className="inline-flex items-center rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold text-[#091326] shadow-sm">
                  {project.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#0D6EFF]">
                    {project.filterCategory}
                  </p>
                  <h2 className="mt-2 font-display text-base font-bold tracking-[-0.015em] text-[#091326]">
                    {project.title}
                  </h2>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#5A6578]">
                    {project.description}
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
      </div>
    </section>
  );
}
