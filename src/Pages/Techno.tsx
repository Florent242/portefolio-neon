import type { CSSProperties } from "react";
import Reveal from "../components/Reveal";

const GROUPS: { title: string; sub: string; gas: string; items: string[] }[] = [
  {
    title: "Architecture & Design",
    sub: "how systems hold together",
    gas: "var(--neon-cobalt)",
    items: ["Clean Architecture", "REST & API design", "ERD & relational modelling", "Microservices (starter)", "Design patterns"],
  },
  {
    title: "Backend",
    sub: "where the logic runs",
    gas: "var(--neon-argon)",
    items: ["Laravel / PHP", "Node.js / Express", "Python", "PostgreSQL", "pgvector & RAG", "MySQL", "Redis", "JWT / OAuth2", "MVC / SOLID"],
  },
  {
    title: "Frontend & Mobile",
    sub: "what people touch",
    gas: "var(--neon-helium)",
    items: ["React / Vite", "React Native", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Flutter", "Angular (notions)", "HTML5 / CSS3"],
  },
  {
    title: "DevOps & Ops",
    sub: "kept alive",
    gas: "var(--neon-xenon)",
    items: ["Docker", "Nginx", "Linux / Ubuntu", "CI/CD (GitHub Actions)", "DigitalOcean", "Let's Encrypt", "Server hardening", "Backups"],
  },
  {
    title: "Tooling & Craft",
    sub: "how I work",
    gas: "var(--neon-krypton)",
    items: ["Git / GitHub", "Figma", "Trello / Jira (notions)", "Google Workspace", "Agile (scrum-ish)", "Pandas (data)", "API testing (Postman)"],
  },
];

export default function Techno() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="silkscreen text-xs text-cobalt" style={{ textShadow: "0 0 12px var(--neon-cobalt)" }}>
          FIG_002 — SKILLS
        </p>
        <h2 className="display mt-2 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Tools on the bench
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-inkdim">
          A stack chosen in production, not in tutorials — everything below has shipped in a real
          project on this portfolio.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((g, i) => (
          <Reveal key={g.title} delay={i * 80}>
            <article className="panel panel-hover flex h-full flex-col p-5" style={{ "--card-gas": g.gas } as CSSProperties}>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="silkscreen text-sm text-ink">{g.title}</h3>
                <span className="text-[0.6rem] tracking-widest text-inkdim">{g.sub}</span>
              </div>
              <div className="mt-3 h-px w-full" style={{ backgroundColor: "var(--neon-line)" }} />
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item} className="gas-chip" style={{ "--chip-gas": g.gas } as CSSProperties}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}

        <Reveal delay={400}>
          <article className="panel flex h-full flex-col justify-center p-5" style={{ "--card-gas": "var(--neon-radon)" } as CSSProperties}>
            <p className="silkscreen text-xs text-inkdim">ALSO IN THE ROOM</p>
            <ul className="mt-4 space-y-2 text-sm text-inkdim">
              <li>· Mobile money integrations (FedaPay, MTN)</li>
              <li>· Audio processing pipelines (AURA text-to-speech)</li>
              <li>· Educational product design & cahiers des charges</li>
              <li>· Team mentoring & hackathon organization</li>
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
