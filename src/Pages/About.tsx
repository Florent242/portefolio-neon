import type { CSSProperties } from "react";
import { BadgeCheck, GraduationCap, Users, Rocket } from "lucide-react";
import Reveal from "../components/Reveal";

const FACTS = [
  { icon: GraduationCap, label: "Licence in Software Architecture", value: "ESGIS · Bénin" },
  { icon: Rocket, label: "Master's in progress", value: "AI & Big Data" },
  { icon: Users, label: "Languages", value: "FR · EN basics" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid items-start gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <Reveal>
          <div className="relative mx-auto w-56 md:mx-0">
            <div
              className="relative aspect-square overflow-hidden rounded-full"
              style={{ border: "1px solid var(--neon-cobalt)", boxShadow: "0 0 40px -10px var(--neon-cobalt)" }}
            >
              <img
                src="/fig_001.jpeg"
                alt="Portrait of Florent BOUDZOUMOU"
                width={896}
                height={809}
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full"
                style={{ boxShadow: "inset 0 0 0 1px rgb(255 255 255 / 0.12)" }}
              />
            </div>
            <p className="silkscreen mt-4 text-center text-[0.65rem] text-inkdim md:text-left">FIG_001 — the architect</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              The person behind the sign
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-inkdim">
              <p>
                I design and build systems that have to work in the real world: on unstable
                connections, with mobile-money payments, at production scale — not just in demos.
              </p>
              <p>
                At <span className="text-ink">Bénin Digital (ESN)</span> I designed and built{" "}
                <span className="text-ink">AURA</span>, an AI-adaptive learning platform, end to end —
                from the PostgreSQL + pgvector RAG pipeline to the two-VPS production architecture.
                Before that I led the backend of the ESGIS hackathon platform, shipped the{" "}
                <span className="text-ink">Miss ESGIS</span> voting system with FedaPay mobile-money
                integration and a CI/CD pipeline, and have been chef de projet on{" "}
                <span className="text-ink">AKOWE</span>, the university's online library.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {FACTS.map((f, i) => (
              <Reveal key={f.label} delay={i * 90}>
                <div className="panel panel-hover flex items-center gap-4 p-4" style={{ "--card-gas": "var(--neon-cobalt)" } as CSSProperties}>
                  <f.icon size={22} strokeWidth={1.5} className="shrink-0 text-cobalt" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="silkscreen text-[0.65rem] text-inkdim">{f.label}</p>
                    <p className="truncate text-sm font-medium text-ink">{f.value}</p>
                  </div>
                  <BadgeCheck size={16} strokeWidth={1.75} className="ml-auto shrink-0 text-cobalt" aria-hidden="true" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
