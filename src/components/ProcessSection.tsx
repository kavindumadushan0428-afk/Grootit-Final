import { PROCESS_STEPS } from "@/data/home";

export function ProcessSection() {
  return (
    <section id="process" className="bg-white py-14 sm:py-18">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-[#0D6EFF]">
          HOW WE WORK
        </p>
        <h2 className="mt-2.5 max-w-[380px] font-display text-[clamp(1.85rem,3.2vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.025em] text-[#091326] text-balance">
          A simple, collaborative process.
        </h2>

        <div className="relative mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {PROCESS_STEPS.map((item, idx) => (
            <div key={item.step} className="relative">
              <div className="flex items-center">
                <span className="relative z-10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C6DCFA] bg-white font-display text-xs font-bold tabular-nums text-[#091326]">
                  {item.step}
                </span>
                {idx < PROCESS_STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden h-px flex-1 bg-[#DCEBFF] lg:block"
                  />
                )}
              </div>

              <h3 className="mt-4 font-display text-base font-bold tracking-[-0.015em] text-[#091326]">
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
  );
}
