"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/**
 * The page's one scroll moment. The sentence rests at half ink and turns to
 * full ink word by word as it crosses the middle of the screen; it runs back
 * on the way up. The text is always readable: without script, or with reduced
 * motion, it simply stands fully lit.
 */
export function Statement({ text, accent }: { text: string; accent?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const start = window.innerHeight * 0.88;
      const end = window.innerHeight * 0.42;
      const progress = (start - rect.top) / (start - end + rect.height);
      el.style.setProperty("--p", Math.min(1, Math.max(0, progress)).toFixed(3));
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
    };
  }, []);

  const words = text.split(" ");

  return (
    <p ref={ref} className="statement" style={{ "--n": words.length } as CSSProperties}>
      {words.map((word, index) => {
        const isAccent = accent !== undefined && word.replace(/[.,]/g, "") === accent;
        const style = {
          "--i": index,
          ...(isAccent ? { "--tone": "var(--color-accent)" } : {}),
        } as CSSProperties;
        return (
          <span key={index} className="statement__word" style={style}>
            {word}{" "}
          </span>
        );
      })}
    </p>
  );
}
