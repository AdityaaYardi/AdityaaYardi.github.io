import { orgLogo } from "@/data/logos";
import { certificates, degrees, languages } from "@/data/profile";
import { LogoImg, OrgPlate } from "./Logo";
import { SectionHead } from "./ui";

export function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-h">
      <div className="wrap">
        <SectionHead id="education-h" title="Education and certificates" />

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {degrees.map((item) => (
            <li key={item.degree} className="panel flex flex-col rounded-[20px] p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <p className="t-label tnum pt-1">{item.period}</p>
                <OrgPlate logo={orgLogo(item.school)} name={item.school} short={item.short} />
              </div>
              <h3 className="t-h3 mt-4">{item.degree}</h3>
              <p className="mt-2 text-muted">
                {item.school}, {item.place}
              </p>
              <p className="mt-6">
                <span className="t-label block pb-1">Relevant coursework</span>
                {item.detail}
              </p>
              {item.work ? <p className="mt-4">{item.work}</p> : null}
            </li>
          ))}
        </ul>

        <div className="grid12 mt-12 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <h3 className="t-title pb-4">Certificates and programmes</h3>
            <ul>
              {certificates.map((item) => {
                const logo = orgLogo(item.issuer);
                return (
                  <li key={item.name} className="rule-t flex items-center gap-4 py-4">
                    <span className="flex h-8 w-[104px] flex-none items-center">
                      {logo ? (
                        <LogoImg logo={logo} height={logo.kind === "wordmark" ? 13 : 22} />
                      ) : (
                        <span className="text-[14px] font-medium leading-tight" aria-hidden="true">
                          {item.issuer}
                        </span>
                      )}
                    </span>
                    <span className="flex grow flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <span>
                        <span className="font-medium">{item.name}</span>
                        <span className="text-muted"> · {item.issuer}</span>
                      </span>
                      {item.date ? <span className="t-label tnum">{item.date}</span> : null}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <h3 className="t-title pb-4">Languages</h3>
            <ul>
              {languages.map((item) => (
                <li key={item.name} className="rule-t flex items-baseline justify-between gap-6 py-4">
                  <span className="font-medium">{item.name}</span>
                  <span className="t-label">{item.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
