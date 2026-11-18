import { Fragment, type CSSProperties } from "react";
import { featured } from "@/data/projects";
import { mailto, site } from "@/data/site";
import { socialLogos } from "@/data/logos";
import { LogoImg } from "./Logo";
import { Arrow } from "./ui";

const headline = "Mechanical engineer moving robots with ROS 2";

/**
 * Split hero: the words on the left line, the real thing on the right, both
 * whole on the first screen. It enters once on load (word masks, then the
 * lead and buttons, the picture settling) and then stands.
 */
export function Hero() {
  const image = featured.image!;
  const words = headline.split(" ");

  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="wrap grid12 hero__grid">
        <div className="col-span-12 flex flex-col lg:col-span-6 lg:pr-6">
          <p className="enter-fade t-small mb-3 font-medium text-muted sm:mb-4" style={{ "--i": -6 } as CSSProperties}>
            {site.location} · {site.availability}
          </p>

          <h1 id="hero-h" className="t-h1" aria-label={headline}>
            {words.map((word, index) => (
              <Fragment key={index}>
                <span className="enter-mask" aria-hidden="true">
                  <span className="enter-word" style={{ "--i": Math.min(index, 4) } as CSSProperties}>
                    {word}
                  </span>
                </span>{" "}
              </Fragment>
            ))}
          </h1>

          <p className="enter-fade t-lead mt-5 max-w-[44ch] sm:mt-6" style={{ "--i": 0 } as CSSProperties}>
            Two years of mechanical design and commissioning in industry, then robotics: I now build
            ROS 2 motion planning and control for a UR10e at FAU&rsquo;s FAPS institute.
          </p>

          <div className="mt-6 flex gap-3 sm:mt-8">
            <a
              href={mailto}
              className="enter-fade btn btn--primary max-sm:flex-1 max-sm:px-3"
              style={{ "--i": 1 } as CSSProperties}
            >
              Email Aditya
            </a>
            <a
              href="#projects"
              className="enter-fade btn btn--secondary max-sm:flex-1 max-sm:px-3"
              style={{ "--i": 2 } as CSSProperties}
            >
              See projects
            </a>
          </div>

          <ul
            className="enter-fade mt-5 flex flex-wrap gap-x-6 gap-y-2 sm:mt-6 lg:mt-auto lg:pt-6"
            style={{ "--i": 3 } as CSSProperties}
          >
            <li>
              <a href={site.linkedin} className="link" target="_blank" rel="noreferrer">
                <LogoImg logo={socialLogos.linkedin} height={16} />
                LinkedIn <Arrow direction="up-right" />
              </a>
            </li>
            {site.github ? (
              <li>
                <a href={site.github} className="link" target="_blank" rel="noreferrer">
                  <LogoImg logo={socialLogos.github} height={16} />
                  GitHub <Arrow direction="up-right" />
                </a>
              </li>
            ) : null}
            {site.cv ? (
              <li>
                <a href={site.cv} className="link" download>
                  Download CV (PDF)
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="frame col-span-12 h-full lg:col-span-6 lg:col-start-7">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="enter-settle absolute inset-0 object-[78%_50%]"
            fetchPriority="high"
          />
          <p className="absolute bottom-4 left-4 flex max-w-[calc(100%-32px)] flex-col gap-0.5 rounded-md border border-line bg-bg px-4 py-3 sm:bottom-6 sm:left-6">
            <span className="t-label">{image.kind}</span>
            <span className="font-medium leading-snug">UR10e on a coil winding path</span>
          </p>
        </div>
      </div>
    </section>
  );
}
