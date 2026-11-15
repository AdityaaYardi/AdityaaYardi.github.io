"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mailto, navLinks, site } from "@/data/site";
import { Mark } from "./ui";

/**
 * Fixed header: opaque, one hairline, the same at every scroll depth.
 * Under 1024px the links move into a full-screen sheet.
 */
export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="nav">
      <div className="wrap relative flex h-full items-center justify-between gap-6">
        <a className="skip-link" href="#top">
          Skip to content
        </a>

        <Link
          href="/"
          className="flex items-center gap-3 text-[20px] font-medium tracking-[-0.02em]"
          onClick={() => setOpen(false)}
        >
          <Mark />
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="navlink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={mailto} className="btn btn--primary max-sm:hidden">
            Email Aditya
          </a>
          <button
            type="button"
            className="btn btn--secondary w-11 !px-0 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-sheet"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {open ? (
                <path d="M3.5 3.5l11 11M14.5 3.5l-11 11" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <path d="M2 5.5h14M2 12.5h14" stroke="currentColor" strokeWidth="1.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="menu-sheet"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[var(--nav)] z-20 overflow-y-auto bg-bg lg:hidden"
      >
        <nav aria-label="Menu" className="wrap flex flex-col py-4">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rule-b flex h-14 items-center text-[22px] font-medium tracking-[-0.02em]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href={mailto} className="btn btn--primary mt-6 h-12 w-full">
            Email Aditya
          </a>
        </nav>
      </div>
    </header>
  );
}
