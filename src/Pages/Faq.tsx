import type { CSSProperties, ReactNode } from "react";
import Reveal from "../components/Reveal";

const QA: { q: string; a: ReactNode }[] = [
  {
    q: "Who is Florent BOUDZOUMOU?",
    a: "Software Architect based in Cotonou, Bénin (UTC+1). I design and ship software end to end — from AI-adaptive platforms to fintech voting and production infrastructure. Licence in Software Architecture (ESGIS, Bénin), Master's in AI & Big Data in progress.",
  },
  {
    q: "What technologies do you work with?",
    a: "Laravel / PHP and Node.js on the backend; React, TypeScript and React Native on the front; Flutter on the side. PostgreSQL (including pgvector for RAG), MySQL, Docker, Linux, and CI/CD pipelines that actually ship.",
  },
  {
    q: "Are you available for remote work?",
    a: (
      <>
        Yes. Open to a remote permanent role and to freelance projects. Based in Cotonou, Bénin (UTC+1), with a real
        overlap with Europe and West Africa. Reach me at{" "}
        <a
          href="mailto:florentboudz@gmail.com"
          className="text-cobalt underline-offset-4 transition-colors duration-300 hover:underline"
          style={{ textShadow: "0 0 12px var(--neon-cobalt)" }}
        >
          florentboudz@gmail.com
        </a>
        .
      </>
    ),
  },
  {
    q: "Can I see the code behind the projects?",
    a: "Mostly. The standout projects on the wall are public on GitHub. Work delivered under contract (AURA, BizPOS, HRIS…) is shown without source — under NDA it can be discussed in detail.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="mx-auto w-full max-w-3xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="silkscreen text-xs text-cobalt" style={{ textShadow: "0 0 12px var(--neon-cobalt)" }}>
          FIG_006 — FAQ
        </p>
        <h2 className="display mt-2 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Questions
        </h2>
      </Reveal>

      <div className="mt-10 flex flex-col gap-3">
        {QA.map((item, i) => (
          <Reveal key={item.q} delay={i * 80}>
            <details
              className="panel panel-hover group"
              style={{ "--card-gas": "var(--neon-cobalt)" } as CSSProperties}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5">
                <h3 className="display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                  {item.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border text-cobalt transition-transform duration-300 group-open:rotate-45"
                  style={{ borderColor: "var(--neon-line)", textShadow: "0 0 12px var(--neon-cobalt)" }}
                >
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-inkdim">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
