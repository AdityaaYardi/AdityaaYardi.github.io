import { skills } from "@/data/profile";
import { toolLogo } from "@/data/logos";
import { LogoImg } from "./Logo";
import { SectionHead } from "./ui";

/**
 * Skills as rows: the group and where it was used on the left; on the right
 * the tools as logo tiles, then the methods (which have no logo) as text.
 * The "basis" line keeps hands-on experience apart from working knowledge.
 */
export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-h">
      <div className="wrap">
        <SectionHead id="skills-h" title="Technical skills">
          Grouped by where each skill was used. The last group is working knowledge, not project
          experience.
        </SectionHead>

        <dl>
          {skills.map((group) => {
            const tools = group.items.filter((item) => toolLogo(item));
            const methods = group.items.filter((item) => !toolLogo(item));
            return (
              <div key={group.name} className="rule-t grid12 gap-y-4 py-6">
                <dt className="col-span-12 lg:col-span-4 lg:pr-6">
                  <span className="t-title block">{group.name}</span>
                  <span className="t-label mt-1 block">{group.basis}</span>
                </dt>
                <dd className="col-span-12 flex flex-col gap-4 lg:col-span-8">
                  {tools.length ? (
                    <ul className="flex flex-wrap gap-2">
                      {tools.map((name) => {
                        const logo = toolLogo(name)!;
                        const word = logo.kind === "wordmark";
                        return (
                          <li key={name} className={`tool-tile ${word ? "tool-tile--word" : ""}`}>
                            {word ? (
                              <LogoImg logo={logo} height={16} label={name} />
                            ) : (
                              <>
                                <LogoImg logo={logo} height={22} />
                                {name}
                              </>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                  {methods.length ? (
                    <ul className="flex flex-wrap gap-x-2 gap-y-1 text-[17px] leading-[1.6]">
                      {methods.map((item, index) => (
                        <li key={item}>
                          {item}
                          {index < methods.length - 1 ? (
                            <span className="pl-2 text-line-strong" aria-hidden="true">
                              /
                            </span>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
