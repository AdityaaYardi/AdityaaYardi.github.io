import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Statement } from "@/components/Statement";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section" aria-label="In one sentence">
        <div className="wrap grid12">
          <div className="col-span-12 lg:col-span-11">
            <Statement
              text="I understand physical engineering systems, and I write the software and automation that control them."
              accent="control"
            />
          </div>
        </div>
      </section>

      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
    </>
  );
}
