import Link from "next/link";
import { mailto, navLinks, site } from "@/data/site";
import { Arrow, Mark } from "./ui";

/** The close and the footer are one block: the ask, the big button, then the links. */
export function Footer() {
  return (
    <footer id="contact" className="section" aria-labelledby="contact-h">
      <div className="wrap">
        <div className="grid12 gap-y-4">
          <h2 id="contact-h" className="t-h2 col-span-12 lg:col-span-10">
            Open to robotics and automation roles
          </h2>
          <p className="t-lead measure col-span-12 text-muted lg:col-span-6">
            {site.availability} in the DACH region. Based in Fürth, working in English (C1) and
            German (B1).
          </p>
        </div>

        <a href={mailto} className="btn btn--primary btn--xl mt-10">
          Email Aditya
          <Arrow />
        </a>

        <div className="grid12 mt-16 gap-y-10 sm:mt-24">
          <div className="col-span-12 lg:col-span-6">
            <p className="flex items-center gap-3 text-[20px] font-medium tracking-[-0.02em]">
              <Mark />
              {site.name}
            </p>
            <p className="mt-3 max-w-[36ch] text-muted">
              {site.role}. {site.location}.
            </p>
          </div>

          <nav aria-label="Sections" className="col-span-6 lg:col-span-3">
            <h3 className="t-label pb-3">On this site</h3>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="navlink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 lg:col-span-3">
            <h3 className="t-label pb-3">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href={mailto} className="navlink break-all">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.linkedin} className="navlink" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              {site.github ? (
                <li>
                  <a href={site.github} className="navlink" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </li>
              ) : null}
              {site.cv ? (
                <li>
                  <a href={site.cv} className="navlink" download>
                    Download CV (PDF)
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <p className="rule-t t-small mt-12 flex flex-wrap justify-between gap-x-6 gap-y-2 pt-6 text-muted">
          <span>© 2026 {site.name}</span>
          <span>Product names and logos are trademarks of their owners.</span>
        </p>
      </div>
    </footer>
  );
}
