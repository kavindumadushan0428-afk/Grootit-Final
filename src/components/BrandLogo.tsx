interface BrandLogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function BrandLogo({
  variant = "light",
  className = "",
}: BrandLogoProps) {
  return (
    <span
      className={`inline-flex items-baseline font-display text-[19px] font-extrabold tracking-[-0.04em] select-none ${className}`}
      aria-label="GROOTIT"
    >
      <span className={variant === "dark" ? "text-white" : "text-[#091326]"}>
        GROOT
      </span>
      <span className="text-[#0D6EFF]">IT</span>
    </span>
  );
}
