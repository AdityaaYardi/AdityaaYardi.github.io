import Link from "next/link";
import { featured, projects, type Project } from "@/data/projects";
import { CoilFigure, Diagram } from "./Diagram";
import { Arrow, Chips, SectionHead } from "./ui";

function Meta({ project }: { project: Project }) {
  return (
    <p className="t-label flex flex-wrap gap-x-2">
      <span>{project.kicker}</span>
      {project.period ? <span className="tnum">· {project.period}</span> : null}
    </p>
  );
}

/** The first project gets the full width: words left, its figure and pipeline right. */
function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="card card--linked p-6 sm:p-8">
      <div className="grid12 gap-y-6">
      <div className="col-span-12 flex flex-col lg:col-span-5">
        <Meta project={project} />
        <h3 className="t-h3 mt-4">
          <Link href={`/projects/${project.slug}/`} className="card__link">
            {project.title}
          </Link>
        </h3>
        <p className="t-lead mt-4 max-w-[40ch]">{project.summary}</p>
        <Chips items={project.tags} className="mt-6" />
        <p className="mt-8 lg:mt-auto lg:pt-8">
          <span className="link">
            Read the case study <Arrow />
          </span>
        </p>
      </div>
      <div className="panel col-span-12 flex flex-col justify-between gap-4 p-5 sm:p-8 lg:col-span-7">
        <div className="mx-auto w-full max-w-[520px]">
          <CoilFigure />
        </div>
        {project.diagram ? <Diagram data={project.diagram} /> : null}
      </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const linked = project.hasPage;
  return (
    <article className={`card h-full ${linked ? "card--linked" : ""}`}>
      {project.image ? (
        <div className="zoom relative aspect-[16/10] overflow-hidden bg-[#2c2c2c]">
          <img
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            loading="lazy"
          />
          <span className="chip absolute left-4 top-4 border-transparent bg-bg">{project.image.kind}</span>
        </div>
      ) : project.diagram ? (
        <div className="panel m-2 flex items-center rounded-[14px] p-5 sm:aspect-[16/10] sm:p-8">
          <Diagram data={project.diagram} />
        </div>
      ) : null}

      <div className="flex grow flex-col p-6 sm:p-8">
        <Meta project={project} />
        <h3 className="t-h3 mt-4">
          {linked ? (
            <Link href={`/projects/${project.slug}/`} className="card__link">
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-3 max-w-[52ch]">{project.summary}</p>
        <Chips items={project.tags} className="mt-5" />
        {linked ? (
          <p className="mt-auto pt-8">
            <span className="link">
              Read the case study <Arrow />
            </span>
          </p>
        ) : null}
      </div>
    </article>
  );
}

export function Projects() {
  const rest = projects.filter((project) => project.slug !== featured.slug);
  return (
    <section id="projects" className="section" aria-labelledby="projects-h">
      <div className="wrap">
        <SectionHead id="projects-h" title="Selected engineering projects">
          Four case studies from research and industry, and one simulation study.
        </SectionHead>

        <FeaturedProject project={featured} />

        <ul className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {rest.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
