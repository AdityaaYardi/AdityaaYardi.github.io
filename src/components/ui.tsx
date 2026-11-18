import type { ReactNode } from "react";
import { toolLogo } from "@/data/logos";
import { LogoImg } from "./Logo";

/** The one arrow used across the site. It moves 3px on hover (see globals.css). */
export function Arrow({ direction = "right" }: { direction?: "right" | "up-right" | "left" }) {
  const rotate = direction === "up-right" ? "-45" : direction === "left" ? "180" : "0";
  return (
    <svg className="arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <g transform={`rotate(${rotate} 8 8)`}>
        <path d="M2.5 8h10M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

/** Four dots, one in the accent: the mark beside the name in the header and footer. */
export function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

/** One tool: its logo where one exists, then the name (a wordmark stands alone). */
export function ToolChip({ name }: { name: string }) {
  const logo = toolLogo(name);
  if (!logo) return <span className="chip">{name}</span>;
  if (logo.kind === "wordmark") {
    return (
      <span className="chip chip--logo" title={name}>
        <LogoImg logo={logo} height={12} label={name} />
      </span>
    );
  }
  return (
    <span className="chip chip--logo">
      <LogoImg logo={logo} height={16} />
      {name}
    </span>
  );
}

export function Chips({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex">
          <ToolChip name={item} />
        </li>
      ))}
    </ul>
  );
}

/** Section heading: the h2 on the left line, an optional line of text under it. */
export function SectionHead({ id, title, children }: { id: string; title: string; children?: ReactNode }) {
  return (
    <div className="grid12 mb-8 sm:mb-12">
      <h2 id={id} className="t-h2 col-span-12 lg:col-span-7">
        {title}
      </h2>
      {children ? (
        <p className="t-lead measure col-span-12 mt-4 text-muted lg:col-span-6">{children}</p>
      ) : null}
    </div>
  );
}
