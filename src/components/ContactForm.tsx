"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { SERVICE_DIVISIONS, type DivisionSlug } from "@/data/services";

const BUDGET_RANGES = [
  "Prefer not to say",
  "Under $1,500",
  "$1,500 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
];

const TIMELINES = [
  "Prefer not to say",
  "Flexible",
  "Within 2–4 weeks",
  "1–2 months",
  "3+ months",
];

interface FieldErrors {
  fullName?: string;
  email?: string;
  division?: string;
  details?: string;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [division, setDivision] = useState<string>("");
  const [specificService, setSpecificService] = useState<string>("");
  const [details, setDetails] = useState("");
  const [budget, setBudget] = useState("Prefer not to say");
  const [timeline, setTimeline] = useState("Prefer not to say");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const paramDivision = searchParams.get("division");
    const paramService = searchParams.get("service");

    if (paramDivision) {
      const matchedDiv = SERVICE_DIVISIONS.find(
        (d) => d.slug === paramDivision || d.title === paramDivision
      );
      if (matchedDiv) {
        setDivision(matchedDiv.slug);
        if (paramService) {
          const matchedSub = matchedDiv.subservices.find(
            (s) => s.id === paramService || s.name === paramService
          );
          if (matchedSub) {
            setSpecificService(matchedSub.name);
          }
        }
      }
    }
  }, [searchParams]);

  const activeDivision = SERVICE_DIVISIONS.find(
    (d) => d.slug === (division as DivisionSlug)
  );

  const validate = (): FieldErrors => {
    const nextErrors: FieldErrors = {};
    if (!fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!division) {
      nextErrors.division = "Please select a service division.";
    }
    if (details.trim().length < 10) {
      nextErrors.details =
        "Please share a short description of your project (at least 10 characters).";
    }
    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setDivision("");
    setSpecificService("");
    setDetails("");
    setBudget("Prefer not to say");
    setTimeline("Prefer not to say");
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="rounded-2xl border border-[#E7EEF7] bg-white p-6 shadow-[0_8px_30px_rgba(9,19,38,0.04)] sm:p-8">
      {submitted ? (
        <div className="rounded-2xl border border-[#DCEBFF] bg-[#F4F9FF] p-6 text-center">
          <CheckCircle2
            className="mx-auto h-10 w-10 text-[#0D6EFF]"
            aria-hidden="true"
          />
          <h3 className="mt-3 font-display text-lg font-bold text-[#091326]">
            Inquiry received, {fullName.trim()}.
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#5A6578]">
            Selected division:{" "}
            <span className="font-semibold text-[#091326]">
              {activeDivision?.title}
            </span>
            {specificService ? ` — ${specificService}` : ""}. Email delivery is
            currently a client-side placeholder until mail/CRM credentials are
            configured.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-[#0D6EFF] px-6 py-2.5 text-xs font-semibold text-white transition-colors duration-150 hover:bg-[#0058DD] cursor-pointer sm:text-sm"
          >
            Send another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label
              htmlFor="contact-full-name"
              className="block text-xs font-medium text-[#091326]"
            >
              Full name
            </label>
            <input
              id="contact-full-name"
              type="text"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (errors.fullName) {
                  setErrors((prev) => ({ ...prev, fullName: undefined }));
                }
              }}
              aria-invalid={Boolean(errors.fullName)}
              className="mt-1.5 w-full rounded-xl border border-[#DCE6F2] bg-white px-3.5 py-2.5 text-sm text-[#091326] focus:border-[#0D6EFF] focus:outline-none"
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-[#DC2626]" role="alert">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-medium text-[#091326]"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) {
                  setErrors((prev) => ({ ...prev, email: undefined }));
                }
              }}
              aria-invalid={Boolean(errors.email)}
              className="mt-1.5 w-full rounded-xl border border-[#DCE6F2] bg-white px-3.5 py-2.5 text-sm text-[#091326] focus:border-[#0D6EFF] focus:outline-none"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-[#DC2626]" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-division"
                className="block text-xs font-medium text-[#091326]"
              >
                Service division
              </label>
              <select
                id="contact-division"
                value={division}
                onChange={(e) => {
                  setDivision(e.target.value);
                  setSpecificService("");
                  if (errors.division) {
                    setErrors((prev) => ({ ...prev, division: undefined }));
                  }
                }}
                aria-invalid={Boolean(errors.division)}
                className="mt-1.5 w-full rounded-xl border border-[#DCE6F2] bg-white px-3.5 py-2.5 text-sm text-[#091326] focus:border-[#0D6EFF] focus:outline-none"
              >
                <option value="">Select a division</option>
                {SERVICE_DIVISIONS.map((div) => (
                  <option key={div.slug} value={div.slug}>
                    {div.title}
                  </option>
                ))}
              </select>
              {errors.division && (
                <p className="mt-1 text-xs text-[#DC2626]" role="alert">
                  {errors.division}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-specific-service"
                className="block text-xs font-medium text-[#091326]"
              >
                Specific service{" "}
                <span className="font-normal text-[#8E9AAF]">(optional)</span>
              </label>
              <select
                id="contact-specific-service"
                value={specificService}
                disabled={!activeDivision}
                onChange={(e) => setSpecificService(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[#DCE6F2] bg-white px-3.5 py-2.5 text-sm text-[#091326] focus:border-[#0D6EFF] focus:outline-none disabled:bg-[#F8FAFC] disabled:text-[#64748B]"
              >
                <option value="">
                  {activeDivision
                    ? "Any in this division"
                    : "Choose a division first"}
                </option>
                {activeDivision?.subservices.map((sub) => (
                  <option key={sub.id} value={sub.name}>
                    {sub.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-details"
              className="block text-xs font-medium text-[#091326]"
            >
              Project details
            </label>
            <textarea
              id="contact-details"
              rows={4}
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
                if (errors.details) {
                  setErrors((prev) => ({ ...prev, details: undefined }));
                }
              }}
              aria-invalid={Boolean(errors.details)}
              className="mt-1.5 w-full resize-y rounded-xl border border-[#DCE6F2] bg-white px-3.5 py-2.5 text-sm text-[#091326] focus:border-[#0D6EFF] focus:outline-none"
            />
            {errors.details && (
              <p className="mt-1 text-xs text-[#DC2626]" role="alert">
                {errors.details}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-budget"
                className="block text-xs font-medium text-[#091326]"
              >
                Budget range{" "}
                <span className="font-normal text-[#8E9AAF]">(optional)</span>
              </label>
              <select
                id="contact-budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[#DCE6F2] bg-white px-3.5 py-2.5 text-sm text-[#091326] focus:border-[#0D6EFF] focus:outline-none"
              >
                {BUDGET_RANGES.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-timeline"
                className="block text-xs font-medium text-[#091326]"
              >
                Preferred timeline{" "}
                <span className="font-normal text-[#8E9AAF]">(optional)</span>
              </label>
              <select
                id="contact-timeline"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[#DCE6F2] bg-white px-3.5 py-2.5 text-sm text-[#091326] focus:border-[#0D6EFF] focus:outline-none"
              >
                {TIMELINES.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[#0D6EFF] px-6 py-2.5 text-xs font-semibold text-white transition-colors duration-150 hover:bg-[#0058DD] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6EFF] cursor-pointer sm:text-sm"
            >
              Send inquiry
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
