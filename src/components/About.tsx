import { site } from "@/data/site";

const facts = [
  { label: "Now", value: "Master's thesis at the Institute FAPS, FAU. Working student at Schaeffler AG." },
  { label: "Before", value: "2+ years of mechanical design and commissioning in Pune, India." },
  { label: "Degrees", value: "M.Sc. Electromobility, expected 2026. B.E. Mechanical Engineering." },
  { label: "Languages", value: "English C1, German B1, Hindi and Marathi native." },
  { label: "Based in", value: site.location },
];

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-h">
      <div className="wrap grid12 gap-y-12">
        <div className="col-span-12 lg:col-span-6 lg:pr-6">
          <h2 id="about-h" className="t-h2">
            From machine design to robot motion
          </h2>
          <div className="measure mt-8 space-y-5 text-[17px] leading-[1.65]">
            <p>
              I started as a mechanical design engineer in Pune. I designed jigs, fixtures and custom
              assemblies in SOLIDWORKS, Creo and CATIA V5, checked them with FEA in Ansys and
              documented them with GD&amp;T. At ADSS I supported installation and commissioning at
              customer sites across India and led a lean improvement project.
            </p>
            <p>
              That work taught me how parts are made, toleranced and assembled. During my M.Sc. in
              Electromobility at FAU Erlangen-Nürnberg I added the software side: first a Python
              pipeline that turns CAD coil geometry into robot trajectories, now a ROS 2 motion
              planning and control framework for a UR10e.
            </p>
            <p>
              Alongside the thesis I work in precision machining at Schaeffler, where I correlate
              live CNC machine data with tool wear in MATLAB and Simulink.
            </p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <div className="flex items-center gap-5 pb-6">
            <img
              src="/images/aditya-yardi.png"
              alt="Portrait of Aditya Yardi"
              width={320}
              height={320}
              loading="lazy"
              className="size-[88px] rounded-full object-cover"
            />
            <p className="flex flex-col">
              <span className="t-title">{site.name}</span>
              <span className="text-muted">{site.role}</span>
            </p>
          </div>
          <dl>
            {facts.map((fact) => (
              <div key={fact.label} className="rule-t grid grid-cols-[112px_1fr] gap-4 py-4 sm:grid-cols-[144px_1fr]">
                <dt className="t-label pt-1">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
