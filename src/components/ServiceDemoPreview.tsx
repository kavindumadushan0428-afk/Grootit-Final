"use client";

import { useState } from "react";
import { Check, Monitor, Smartphone } from "lucide-react";
import type { SubServiceDetail } from "@/data/services";

interface ServiceDemoPreviewProps {
  subservice: SubServiceDetail;
}

export function ServiceDemoPreview({ subservice }: ServiceDemoPreviewProps) {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const [viewportMode, setViewportMode] = useState<"desktop" | "mobile">(
    "desktop"
  );
  const [brandSurface, setBrandSurface] = useState<"light" | "navy">("light");

  return (
    <div className="rounded-2xl border border-[#E7EEF7] bg-[#F8FBFF] p-5 sm:p-6">
      {/* Header Strip */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2ECF9] pb-3.5">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#0D6EFF]">
            ILLUSTRATIVE DEMONSTRATION
          </p>
          <p className="mt-0.5 text-xs font-semibold text-[#091326]">
            {subservice.demoHighlight}
          </p>
        </div>

        {subservice.demoType === "web-preview" && (
          <div className="inline-flex rounded-full border border-[#DCE6F5] bg-white p-0.5">
            <button
              type="button"
              onClick={() => setViewportMode("desktop")}
              aria-pressed={viewportMode === "desktop"}
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-medium transition-colors cursor-pointer ${
                viewportMode === "desktop"
                  ? "bg-[#0D6EFF] text-white"
                  : "text-[#5A6578] hover:text-[#091326]"
              }`}
            >
              <Monitor className="h-3 w-3" aria-hidden="true" />
              <span>Desktop</span>
            </button>
            <button
              type="button"
              onClick={() => setViewportMode("mobile")}
              aria-pressed={viewportMode === "mobile"}
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-medium transition-colors cursor-pointer ${
                viewportMode === "mobile"
                  ? "bg-[#0D6EFF] text-white"
                  : "text-[#5A6578] hover:text-[#091326]"
              }`}
            >
              <Smartphone className="h-3 w-3" aria-hidden="true" />
              <span>Mobile</span>
            </button>
          </div>
        )}

        {subservice.demoType === "brand-system" && (
          <div className="inline-flex rounded-full border border-[#DCE6F5] bg-white p-0.5">
            <button
              type="button"
              onClick={() => setBrandSurface("light")}
              aria-pressed={brandSurface === "light"}
              className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors cursor-pointer ${
                brandSurface === "light"
                  ? "bg-[#0D6EFF] text-white"
                  : "text-[#5A6578] hover:text-[#091326]"
              }`}
            >
              Light Surface
            </button>
            <button
              type="button"
              onClick={() => setBrandSurface("navy")}
              aria-pressed={brandSurface === "navy"}
              className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors cursor-pointer ${
                brandSurface === "navy"
                  ? "bg-[#091326] text-white"
                  : "text-[#5A6578] hover:text-[#091326]"
              }`}
            >
              Navy Accent
            </button>
          </div>
        )}
      </div>

      {/* Interactive Demo Body */}
      <div className="mt-4">
        {subservice.demoType === "ai-flow" && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {subservice.demoSteps.map((stepText, idx) => {
                const isCurrent = activeStepIdx === idx;
                return (
                  <button
                    key={stepText}
                    type="button"
                    onClick={() => setActiveStepIdx(idx)}
                    aria-pressed={isCurrent}
                    className={`flex flex-col rounded-xl border p-3.5 text-left transition-colors cursor-pointer ${
                      isCurrent
                        ? "border-[#0D6EFF] bg-white shadow-sm"
                        : "border-[#E2ECF9] bg-white/70 hover:border-[#BFD5F5]"
                    }`}
                  >
                    <span className="text-[10px] font-bold tracking-wider text-[#0D6EFF]">
                      STEP 0{idx + 1}
                    </span>
                    <span className="mt-1.5 text-xs font-medium leading-snug text-[#091326]">
                      {stepText}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between rounded-xl border border-[#DCE6F5] bg-white px-4 py-3 text-xs">
              <span className="text-[#5A6578]">
                Active stage:{" "}
                <strong className="font-semibold text-[#091326]">
                  {subservice.demoSteps[activeStepIdx]}
                </strong>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#EAF2FF] px-2.5 py-0.5 text-[11px] font-semibold text-[#0D6EFF]">
                <Check className="h-3 w-3" aria-hidden="true" />
                Verified flow
              </span>
            </div>
          </div>
        )}

        {subservice.demoType === "brand-system" && (
          <div
            className={`rounded-xl border p-5 transition-colors duration-150 ${
              brandSurface === "navy"
                ? "border-[#1B3156] bg-[#0B1B36] text-white"
                : "border-[#E2ECF9] bg-white text-[#091326]"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-display text-lg font-extrabold tracking-tight">
                {subservice.shortTag}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-4 w-4 rounded-full bg-[#0D6EFF]" />
                <span className="h-4 w-4 rounded-full bg-[#9FC5FF]" />
                <span
                  className={`h-4 w-4 rounded-full border ${
                    brandSurface === "navy"
                      ? "border-white/30 bg-white"
                      : "border-[#DCE6F2] bg-[#091326]"
                  }`}
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {subservice.demoSteps.map((stepText) => (
                <div
                  key={stepText}
                  className={`rounded-lg p-3 text-xs leading-snug ${
                    brandSurface === "navy"
                      ? "bg-white/10 text-[#DCE7F7]"
                      : "bg-[#F4F8FF] text-[#4D596C]"
                  }`}
                >
                  {stepText}
                </div>
              ))}
            </div>
          </div>
        )}

        {subservice.demoType === "web-preview" && (
          <div className="flex justify-center">
            <div
              className={`rounded-xl border border-[#DCE6F5] bg-white p-4 shadow-sm transition-all duration-150 ${
                viewportMode === "mobile" ? "w-full max-w-[260px]" : "w-full"
              }`}
            >
              <div className="flex items-center justify-between border-b border-[#EEF3FA] pb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#DCE6F5]" />
                  <span className="h-2 w-2 rounded-full bg-[#DCE6F5]" />
                  <span className="h-2 w-2 rounded-full bg-[#DCE6F5]" />
                </div>
                <span className="text-[10px] font-semibold text-[#0D6EFF]">
                  {viewportMode === "mobile" ? "375px View" : "1200px View"}
                </span>
              </div>

              <div
                className={`mt-3 grid gap-2.5 ${
                  viewportMode === "mobile" ? "grid-cols-1" : "grid-cols-3"
                }`}
              >
                {subservice.demoSteps.map((stepText, idx) => (
                  <div
                    key={stepText}
                    className={`rounded-lg border border-[#EBF2FC] p-3 ${
                      idx === 0 ? "bg-[#F2F7FF]" : "bg-[#FAFBFD]"
                    }`}
                  >
                    <span className="block text-[10px] font-bold text-[#0D6EFF]">
                      0{idx + 1}
                    </span>
                    <span className="mt-1 block text-xs leading-snug text-[#091326]">
                      {stepText}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {subservice.demoType === "growth-metrics" && (
          <div className="rounded-xl border border-[#DCE6F5] bg-white p-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {subservice.demoSteps.map((stepText, idx) => {
                const isSelected = activeStepIdx === idx;
                return (
                  <button
                    key={stepText}
                    type="button"
                    onClick={() => setActiveStepIdx(idx)}
                    aria-pressed={isSelected}
                    className={`rounded-xl border p-3 text-left transition-colors cursor-pointer ${
                      isSelected
                        ? "border-[#0D6EFF] bg-[#F4F8FF]"
                        : "border-[#EBF2FC] bg-white hover:border-[#C6DCFA]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#0D6EFF]">
                        STAGE 0{idx + 1}
                      </span>
                      <span
                        className={`h-2 w-8 rounded-full ${
                          idx === 0
                            ? "bg-[#BFD8FF]"
                            : idx === 1
                              ? "bg-[#6CA9FF]"
                              : "bg-[#0D6EFF]"
                        }`}
                      />
                    </div>
                    <p className="mt-2 text-xs leading-snug text-[#091326]">
                      {stepText}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
