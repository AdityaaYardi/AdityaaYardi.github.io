import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { CoilFigure, Diagram } from "@/components/Diagram";
import { Arrow, Chips } from "@/components/ui";
import { caseStudies, getProject } from "@/data/projects";

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      ...(project.image ? { images: [{ url: project.image.src, alt: project.image.alt }] } : {}),
    },
  };
}

/** One row of the case study: the heading on the left line, the content on the split line. */
function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rule-t grid12 gap-y-4 py-10 sm:py-14">
      <h2 className="t-h3 col-span-12 lg:col-span-4 lg:pr-6">{title}</h2>
      <div className="col-span-12 lg:col-span-7 lg:col-start-6">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = caseStudies.findIndex((item) => item.slug === project.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article className="pt-[calc(var(--nav)+40px)]">
      <div className="wrap">
        <header className="grid12 gap-y-6 pb-10 sm:pb-14">
          <p className="col-span-12">
            <Link href="/#projects" className="link">
              <Arrow direction="left" /> All projects
            </Link>
          </p>
          <p className="t-label tnum col-span-12 flex flex-wrap gap-x-2 pt-4">
            <span>{project.kicker}</span>
            <span>· {project.period}</span>
          </p>
          <h1 className="t-h1-page col-span-12 lg:col-span-9">{project.title}</h1>
          {project.lead ? <p className="t-lead measure col-span-12 lg:col-span-7">{project.lead}</p> : null}

          {project.facts ? (
            <dl className="col-span-12 mt-4 grid grid-cols-2 gap-x-6 lg:grid-cols-4">
              {project.facts.map((fact) => (
                <div key={fact.label} className="rule-t py-4">
                  <dt className="t-label">{fact.label}</dt>
                  <dd className="mt-1 font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </header>

        {/* The project's picture: the simulation view where one exists, else its diagram. */}
        {project.image ? (
          <div className="dg-host grid12 gap-y-6 pb-10 sm:pb-14">
            <div
              className="frame col-span-12 self-start lg:col-span-7"
              style={{ aspectRatio: `${project.image.width} / ${project.image.height}` }}
            >
              <img
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                fetchPriority="high"
              />
              <span className="chip absolute left-4 top-4 border-transparent bg-bg">{project.image.kind}</span>
            </div>
            <div className="panel col-span-12 flex flex-col justify-between gap-6 rounded-[20px] p-6 sm:p-8 lg:col-span-5">
              {project.figure === "coil" ? <CoilFigure /> : null}
              {project.diagram ? <Diagram data={project.diagram} /> : null}
            </div>
          </div>
        ) : project.diagram ? (
          <div className="dg-host panel mb-10 rounded-[20px] p-6 sm:mb-14 sm:p-12 lg:p-16">
            <Diagram data={project.diagram} />
          </div>
        ) : null}

        {project.problem ? (
          <Block title="Problem and objective">
            <div className="measure space-y-4 text-[17px] leading-[1.65]">
              {project.problem.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </Block>
        ) : null}

        {project.role ? (
          <Block title="Role and contributions">
            <div className="measure space-y-4 text-[17px] leading-[1.65]">
              {project.role.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </Block>
        ) : null}

        {project.system ? (
          <Block title="System and method">
            <p className="measure text-[17px] leading-[1.65]">{project.system.intro}</p>
            <ol className="mt-6">
              {project.system.steps.map((step, stepIndex) => (
                <li key={step.title} className="rule-t grid grid-cols-[40px_1fr] gap-x-4 py-5">
                  <span className="t-label tnum pt-1">{String(stepIndex + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="t-title">{step.title}</h3>
                    <p className="measure mt-1 text-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Block>
        ) : null}

        {project.challenges ? (
          <Block title="Challenges and solutions">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {project.challenges.map((item) => (
                <li key={item.title} className="panel rounded-[20px] p-6">
                  <h3 className="t-title">{item.title}</h3>
                  <p className="mt-3">{item.body}</p>
                </li>
              ))}
            </ul>
          </Block>
        ) : null}

        {project.results ? (
          <Block title={project.resultsHeading ?? "Results"}>
            <ul>
              {project.results.map((text, resultIndex) => (
                <li
                  key={text}
                  className={`${resultIndex > 0 ? "rule-t" : ""} flex gap-4 py-4 text-[17px] leading-[1.55]`}
                >
                  <span className="mt-[10px] size-2 flex-none rounded-full bg-accent" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          </Block>
        ) : null}

        {project.tools ? (
          <Block title="Tools and hardware">
            <dl className="space-y-5">
              {project.tools.map((group) => (
                <div key={group.group} className="grid grid-cols-1 gap-2 sm:grid-cols-[120px_1fr] sm:gap-4">
                  <dt className="t-label pt-2">{group.group}</dt>
                  <dd>
                    <Chips items={group.items} />
                  </dd>
                </div>
              ))}
            </dl>
          </Block>
        ) : null}

        <nav aria-label="Next case study" className="rule-t py-10 sm:py-14">
          <Link href={`/projects/${next.slug}/`} className="card card--linked flex-row items-center justify-between gap-6 p-6 sm:p-8">
            <span className="flex flex-col gap-2">
              <span className="t-label">Next case study</span>
              <span className="t-h3">{next.title}</span>
            </span>
            <span className="text-[28px]">
              <Arrow />
            </span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
