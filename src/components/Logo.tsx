import type { Logo } from "@/data/logos";

/**
 * A logo at a fixed height; the width follows the file's own proportions.
 * Decorative (alt="") when the name is printed beside it; named when it
 * stands in for the name.
 */
export function LogoImg({
  logo,
  height,
  label,
  className = "",
}: {
  logo: Logo;
  height: number;
  /** Set when the logo replaces the visible name. */
  label?: string;
  className?: string;
}) {
  return (
    <img
      src={logo.src}
      alt={label ?? ""}
      aria-hidden={label ? undefined : true}
      width={Math.round(height * logo.ratio)}
      height={height}
      loading="lazy"
      decoding="async"
      className={`block flex-none object-contain ${className}`}
      style={{ height, width: "auto" }}
    />
  );
}

/**
 * Logo plate for an organisation: the logo centred on a light tile, or the
 * organisation's short name set in type where no logo is available.
 */
export function OrgPlate({
  logo,
  name,
  short,
  className = "",
}: {
  logo?: Logo;
  name: string;
  short?: string;
  className?: string;
}) {
  return (
    <span className={`logo-plate ${className}`}>
      {logo ? (
        // Fit the plate's 132px content width; tall logos stop at 34px so none outweighs the others.
        <LogoImg
          logo={logo}
          height={logo.plate ?? Math.min(logo.kind === "wordmark" ? 34 : 30, Math.floor(132 / logo.ratio))}
          label={name}
          className="max-w-full"
        />
      ) : (
        <span className="logo-plate__type" aria-label={name}>
          {short ?? name}
        </span>
      )}
    </span>
  );
}
