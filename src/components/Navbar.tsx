"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/home";
import { SERVICE_DIVISIONS, type DivisionSlug } from "@/data/services";
import { BrandLogo } from "./BrandLogo";

export function Navbar() {
  const pathname = usePathname();
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeDivisionSlug, setActiveDivisionSlug] =
    useState<DivisionSlug>("ai-automation");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileDivisionSlug, setMobileDivisionSlug] =
    useState<DivisionSlug | null>("ai-automation");

  const headerRef = useRef<HTMLElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const divisionButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const firstSubserviceRef = useRef<HTMLAnchorElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openSourceRef = useRef<"hover" | "click" | null>(null);
  const hoverOpenedAtRef = useRef<number>(0);

  const isServicesRoute = pathname.startsWith("/services");

  const activeDivisionIndex = Math.max(
    0,
    SERVICE_DIVISIONS.findIndex((d) => d.slug === activeDivisionSlug)
  );
  const activeDivision = SERVICE_DIVISIONS[activeDivisionIndex];

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openByHover = () => {
    clearCloseTimer();
    if (!megaMenuOpen) {
      openSourceRef.current = "hover";
      hoverOpenedAtRef.current = Date.now();
      setMegaMenuOpen(true);
    }
  };

  const handleServicesClick = () => {
    clearCloseTimer();
    if (!megaMenuOpen) {
      openSourceRef.current = "click";
      setMegaMenuOpen(true);
      return;
    }

    // If hover just opened the menu moments before clicking, pin it open instead of snapping shut
    if (
      openSourceRef.current === "hover" &&
      Date.now() - hoverOpenedAtRef.current < 800
    ) {
      openSourceRef.current = "click";
      return;
    }

    openSourceRef.current = null;
    setMegaMenuOpen(false);
  };

  const scheduleHoverClose = (delayMs = 180) => {
    clearCloseTimer();
    if (openSourceRef.current === "click") return;
    closeTimerRef.current = setTimeout(() => {
      openSourceRef.current = null;
      setMegaMenuOpen(false);
    }, delayMs);
  };

  const closeAll = () => {
    clearCloseTimer();
    openSourceRef.current = null;
    setMegaMenuOpen(false);
    setMobileOpen(false);
  };

  // Sync highlighted division with the active service route and close menus on route change
  useEffect(() => {
    clearCloseTimer();
    openSourceRef.current = null;
    setMegaMenuOpen(false);
    setMobileOpen(false);
    if (pathname.startsWith("/services/")) {
      const slug = pathname.replace("/services/", "").split("/")[0];
      const matched = SERVICE_DIVISIONS.find(
        (d) => d.slug === slug || d.subservices.some((s) => s.id === slug)
      );
      if (matched) {
        setActiveDivisionSlug(matched.slug);
        setMobileDivisionSlug(matched.slug);
      }
    }
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (megaMenuOpen) {
          clearCloseTimer();
          openSourceRef.current = null;
          setMegaMenuOpen(false);
          servicesButtonRef.current?.focus();
        }
        setMobileOpen(false);
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        clearCloseTimer();
        openSourceRef.current = null;
        setMegaMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      clearCloseTimer();
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [megaMenuOpen]);

  const handleServicesTriggerKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      clearCloseTimer();
      openSourceRef.current = "click";
      setMegaMenuOpen(true);
      requestAnimationFrame(() => {
        divisionButtonRefs.current[activeDivisionIndex]?.focus();
      });
    }
  };

  const handleDivisionKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextIdx = (index + 1) % SERVICE_DIVISIONS.length;
      setActiveDivisionSlug(SERVICE_DIVISIONS[nextIdx].slug);
      divisionButtonRefs.current[nextIdx]?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const prevIdx =
        (index - 1 + SERVICE_DIVISIONS.length) % SERVICE_DIVISIONS.length;
      setActiveDivisionSlug(SERVICE_DIVISIONS[prevIdx].slug);
      divisionButtonRefs.current[prevIdx]?.focus();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      firstSubserviceRef.current?.focus();
    }
  };

  const handleSubserviceKeyDown = (
    event: React.KeyboardEvent<HTMLAnchorElement>
  ) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      divisionButtonRefs.current[activeDivisionIndex]?.focus();
    }
  };

  return (
    <header
      ref={headerRef}
      onMouseLeave={() => scheduleHoverClose(180)}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4"
    >
      <div className="mx-auto max-w-[1140px]">
        <div className="flex items-center justify-between gap-4 rounded-full border border-[#E7EEF7] bg-white/95 px-4 py-2 shadow-[0_6px_26px_rgba(9,19,38,0.05)] backdrop-blur-md sm:px-6 sm:py-2.5">
          {/* Left: Brand Wordmark */}
          <Link
            href="/"
            onClick={closeAll}
            className="whitespace-nowrap shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D6EFF]"
            aria-label="GROOTIT Home"
          >
            <BrandLogo />
          </Link>

          {/* Center: Desktop Navigation */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 md:flex lg:gap-2"
          >
            {NAV_ITEMS.map((item) => {
              if (item.isMegaMenu) {
                const active = megaMenuOpen || isServicesRoute;
                return (
                  <button
                    key={item.label}
                    ref={servicesButtonRef}
                    type="button"
                    aria-expanded={megaMenuOpen}
                    aria-haspopup="true"
                    aria-controls="desktop-services-mega-menu"
                    onMouseEnter={openByHover}
                    onClick={handleServicesClick}
                    onKeyDown={handleServicesTriggerKeyDown}
                    className={`inline-flex items-center gap-1 whitespace-nowrap shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6EFF] cursor-pointer ${
                      active
                        ? "bg-[#EAF2FF] text-[#0D6EFF]"
                        : "text-[#4D596C] hover:bg-[#F5F9FF] hover:text-[#091326]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        megaMenuOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              }

              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => scheduleHoverClose(180)}
                  onClick={closeAll}
                  className={`whitespace-nowrap shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6EFF] ${
                    isActive
                      ? "bg-[#EAF2FF] text-[#0D6EFF]"
                      : "text-[#4D596C] hover:bg-[#F5F9FF] hover:text-[#091326]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Let's Talk Primary CTA + Mobile Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/contact"
              onClick={closeAll}
              className="hidden sm:inline-flex items-center justify-center whitespace-nowrap shrink-0 rounded-full bg-[#0D6EFF] px-5 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#0058DD] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6EFF]"
            >
              Let&apos;s Talk
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={
                mobileOpen ? "Close navigation menu" : "Open navigation menu"
              }
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E7EEF7] text-[#091326] transition-colors duration-150 hover:bg-[#F4F8FF] md:hidden cursor-pointer"
            >
              {mobileOpen ? (
                <X className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Apple-Inspired Typography-First Full-Width Desktop Mega-Menu */}
      <div
        id="desktop-services-mega-menu"
        role="region"
        aria-label="Services Mega Menu"
        aria-hidden={!megaMenuOpen}
        inert={!megaMenuOpen ? true : undefined}
        onMouseEnter={clearCloseTimer}
        onMouseLeave={() => scheduleHoverClose(180)}
        className={`hidden md:block fixed inset-x-0 top-[68px] pt-3 sm:top-[76px] transition-all duration-200 ease-out motion-reduce:transition-none ${
          megaMenuOpen
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-1.5 opacity-0"
        }`}
      >
        <div className="border-t border-b border-[#E5ECF6] bg-white shadow-[0_18px_45px_rgba(9,19,38,0.08)]">
          <div className="mx-auto max-w-[1140px] px-4 py-10 sm:px-6 lg:py-12">
            <div className="grid grid-cols-12 gap-8 lg:gap-12">
              {/* Column 1: Explore Services (4 Official Divisions) */}
              <div className="col-span-5 lg:col-span-4">
                <p className="text-xs font-medium text-[#64748B]">
                  Explore services
                </p>
                <div
                  className="mt-4 space-y-3"
                  role="tablist"
                  aria-label="Service divisions"
                >
                  {SERVICE_DIVISIONS.map((division, idx) => {
                    const isSelected = division.slug === activeDivision.slug;
                    return (
                      <button
                        key={division.slug}
                        ref={(el) => {
                          divisionButtonRefs.current[idx] = el;
                        }}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        tabIndex={megaMenuOpen ? 0 : -1}
                        onMouseEnter={() => setActiveDivisionSlug(division.slug)}
                        onFocus={() => setActiveDivisionSlug(division.slug)}
                        onClick={() => setActiveDivisionSlug(division.slug)}
                        onKeyDown={(e) => handleDivisionKeyDown(e, idx)}
                        className="relative flex w-full items-center text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D6EFF] cursor-pointer"
                      >
                        <span
                          aria-hidden="true"
                          className={`absolute -left-3.5 h-5 w-[3px] rounded-full transition-colors duration-150 ${
                            isSelected ? "bg-[#0D6EFF]" : "bg-transparent"
                          }`}
                        />
                        <span
                          className={`font-display text-[19px] font-semibold leading-snug tracking-[-0.02em] transition-colors duration-150 lg:text-[21px] ${
                            isSelected
                              ? "text-[#0D6EFF]"
                              : "text-[#091326] hover:text-[#0D6EFF]"
                          }`}
                        >
                          {division.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Column 2: Subservices for Selected Division */}
              <div className="col-span-4 lg:col-span-5" role="tabpanel">
                <p className="text-xs font-medium text-[#64748B]">
                  {activeDivision.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {activeDivision.subservices.map((sub, subIdx) => {
                    const isSubActive = pathname === `/services/${sub.id}`;
                    return (
                      <li key={sub.id}>
                        <Link
                          ref={subIdx === 0 ? firstSubserviceRef : undefined}
                          href={`/services/${sub.id}`}
                          tabIndex={megaMenuOpen ? 0 : -1}
                          onClick={closeAll}
                          onKeyDown={handleSubserviceKeyDown}
                          className={`inline-block rounded-sm text-[15px] font-medium leading-snug transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D6EFF] ${
                            isSubActive
                              ? "text-[#0D6EFF]"
                              : "text-[#091326] hover:text-[#0D6EFF]"
                          }`}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Column 3: Quick Links */}
              <div className="col-span-3">
                <p className="text-xs font-medium text-[#64748B]">
                  Quick links
                </p>
                <ul className="mt-4 space-y-2.5">
                  <li>
                    <Link
                      href="/work"
                      tabIndex={megaMenuOpen ? 0 : -1}
                      onClick={closeAll}
                      className="inline-block rounded-sm text-[15px] font-medium text-[#091326] transition-colors duration-150 hover:text-[#0D6EFF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D6EFF]"
                    >
                      Our Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/contact?division=${activeDivision.slug}`}
                      tabIndex={megaMenuOpen ? 0 : -1}
                      onClick={closeAll}
                      className="inline-block rounded-sm text-[15px] font-medium text-[#091326] transition-colors duration-150 hover:text-[#0D6EFF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D6EFF]"
                    >
                      Start a Project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      tabIndex={megaMenuOpen ? 0 : -1}
                      onClick={closeAll}
                      className="inline-block rounded-sm text-[15px] font-medium text-[#091326] transition-colors duration-150 hover:text-[#0D6EFF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D6EFF]"
                    >
                      Get in Touch
                    </Link>
                  </li>
                </ul>

                <p className="mt-8 text-xs leading-relaxed text-[#64748B]">
                  Discover what we can build together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Expandable Accordion Navigation */}
      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="mx-auto mt-2 max-h-[82vh] max-w-[1140px] overflow-y-auto rounded-2xl border border-[#E7EEF7] bg-white p-4 shadow-[0_14px_36px_rgba(9,19,38,0.1)] md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              if (item.isMegaMenu) {
                return (
                  <div key={item.label} className="rounded-xl">
                    <button
                      type="button"
                      aria-expanded={mobileServicesOpen}
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-150 cursor-pointer ${
                        mobileServicesOpen || isServicesRoute
                          ? "bg-[#EAF2FF] text-[#0D6EFF]"
                          : "text-[#091326] hover:bg-[#F5F9FF]"
                      }`}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-150 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="mt-2 space-y-2 rounded-xl border border-[#E7EEF7] bg-[#F8FBFF] p-3">
                        {SERVICE_DIVISIONS.map((division) => {
                          const divOpen =
                            mobileDivisionSlug === division.slug;
                          return (
                            <div
                              key={division.slug}
                              className="rounded-lg border border-[#E7EEF7] bg-white"
                            >
                              <button
                                type="button"
                                aria-expanded={divOpen}
                                onClick={() =>
                                  setMobileDivisionSlug(
                                    divOpen ? null : division.slug
                                  )
                                }
                                className="flex w-full items-center justify-between px-3.5 py-2.5 text-left text-xs font-semibold text-[#091326] cursor-pointer"
                              >
                                <span
                                  className={
                                    divOpen ? "text-[#0D6EFF]" : "text-[#091326]"
                                  }
                                >
                                  {division.title}
                                </span>
                                <ChevronDown
                                  className={`h-3.5 w-3.5 text-[#64748B] transition-transform duration-150 ${
                                    divOpen ? "rotate-180 text-[#0D6EFF]" : ""
                                  }`}
                                  aria-hidden="true"
                                />
                              </button>

                              {divOpen && (
                                <ul className="space-y-1 border-t border-[#EEF3FA] px-3 py-2">
                                  {division.subservices.map((sub) => (
                                    <li key={sub.id}>
                                      <Link
                                        href={`/services/${sub.id}`}
                                        onClick={closeAll}
                                        className={`block rounded-md px-2 py-1.5 text-xs transition-colors ${
                                          pathname === `/services/${sub.id}`
                                            ? "font-semibold text-[#0D6EFF]"
                                            : "text-[#4D596C] hover:text-[#0D6EFF]"
                                        }`}
                                      >
                                        {sub.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeAll}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? "bg-[#EAF2FF] text-[#0D6EFF]"
                      : "text-[#091326] hover:bg-[#F5F9FF]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-3 border-t border-[#E7EEF7] pt-3">
            <Link
              href="/contact"
              onClick={closeAll}
              className="flex w-full items-center justify-center rounded-full bg-[#0D6EFF] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#0058DD]"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
