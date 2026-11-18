import { orgLogo } from "@/data/logos";
import { experience } from "@/data/profile";
import { OrgPlate } from "./Logo";
import { Chips, SectionHead } from "./ui";

/** Timeline as rows: the dates and the employer's logo, the role, then what was done. */
export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-h">
      <div className="wrap">
        <SectionHead id="experience-h" title="Professional experience">
          Six roles since 2021, from CAD drawings to robot control.
        </SectionHead>

        <ol>
          {experience.map((role) => (
            <li key={`${role.org}-${role.period}`} className="rule-t grid12 gap-y-4 py-7">
              <div className="col-span-12 flex items-center justify-between gap-4 self-start lg:col-span-3 lg:flex-col lg:items-start lg:pr-6">
                <p className="tnum flex items-center gap-2 font-medium lg:pt-0.5">
                  {role.current ? (
                    <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
                  ) : null}
                  {role.period}
                </p>
                <OrgPlate logo={orgLogo(role.org)} name={role.org} short={role.short} className="max-sm:h-14 max-sm:w-[136px]" />
              </div>
              <div className="col-span-12 lg:col-span-4 lg:pr-6">
                <h3 className="t-title">{role.title}</h3>
                <p className="mt-1 text-muted">
                  {role.org}
                  <br />
                  {role.place}
                </p>
              </div>
              <div className="col-span-12 lg:col-span-5">
                <p>{role.summary}</p>
                <Chips items={role.tags} className="mt-4" />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
