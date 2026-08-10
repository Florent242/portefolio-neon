import { useState, type CSSProperties } from "react";
import { Github, ExternalLink } from "lucide-react";
import Reveal from "../components/Reveal";
import { PROJECTS, GAS_HEX, CATEGORIES, type Gas, type Project } from "../data/projects";

const GAS_ORDER: Gas[] = ["cobalt", "argon", "neongas", "helium", "xenon", "krypton", "radon"];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const hex = GAS_HEX[p.gas];
  return (
    <Reveal delay={(i % 3) * 70} className="h-full">
      <article
        className="panel panel-hover flex h-full flex-col gap-3 p-5"
        style={{ "--card-gas": hex } as CSSProperties}
      >
        <div
          className="relative flex h-32 items-center justify-center overflow-hidden rounded-sm"
          style={{
            border: "1px solid var(--neon-line)",
            backgroundColor: "var(--neon-bg-soft)",
            boxShadow: `inset 0 0 40px -18px ${hex}`,
          }}
          aria-label={p.screenshot ? `Screenshot of ${p.name}` : undefined}
        >
          {p.screenshot ? (
            <img
              src={p.screenshot}
              alt={`${p.name} — screenshot`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-2" aria-hidden="true">
              <span className="gas-led" style={{ "--led": hex } as CSSProperties} />
              <span className="silkscreen text-[0.6rem] text-inkdim">CAPTURE PENDING</span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between gap-3">
          <h3 className="display text-xl font-semibold tracking-tight text-ink">{p.name}</h3>
          <span className="gas-chip" style={{ "--chip-gas": hex } as CSSProperties}>
            {p.category}
          </span>
        </div>
        <p className="text-xs text-inkdim">{p.year} · {p.tagline}</p>
        <p className="flex-1 text-sm leading-relaxed text-inkdim">{p.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} className="silkscreen text-[0.6rem] text-inkdim">{s}</span>
          ))}
        </div>
        {(p.github || p.demo) && (
          <div className="flex items-center gap-4 pt-1">
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-inkdim transition-colors duration-300 hover:text-cobalt"
              >
                <Github size={13} strokeWidth={1.75} aria-hidden="true" />
                Source
              </a>
            )}
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-inkdim transition-colors duration-300 hover:text-cobalt"
              >
                <ExternalLink size={13} strokeWidth={1.75} aria-hidden="true" />
                Live
              </a>
            )}
          </div>
        )}
      </article>
    </Reveal>
  );
}

function Flagship({ p, delay }: { p: Project; delay: number }) {
  const hex = GAS_HEX[p.gas];
  return (
    <Reveal delay={delay} className="h-full">
      <article
        className="panel panel-hover relative flex h-full flex-col gap-4 overflow-hidden p-6 sm:p-8"
        style={{ "--card-gas": hex, boxShadow: `0 0 60px -24px ${hex}` } as CSSProperties}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="gas-chip" style={{ "--chip-gas": hex } as CSSProperties}>
            FLAGSHIP
          </span>
          <span className="silkscreen text-[0.65rem] text-inkdim">{p.year} · {p.category}</span>
        </div>
        <h3 className="display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{p.name}</h3>
        <p className="silkscreen text-xs" style={{ color: hex, textShadow: `0 0 14px ${hex}` }}>
          {p.tagline}
        </p>
        <p className="text-sm leading-relaxed text-inkdim sm:text-base">{p.desc}</p>
        {p.notes && <p className="text-xs leading-relaxed text-inkdim/80">[{p.notes}]</p>}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {p.stack.map((s) => (
            <span key={s} className="silkscreen text-[0.62rem] text-inkdim">{s}</span>
          ))}
        </div>
        {(p.github || p.demo) && (
          <div className="flex items-center gap-4 pt-1">
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-inkdim transition-colors duration-300 hover:text-ink">
                <Github size={13} strokeWidth={1.75} aria-hidden="true" />
                Source
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-inkdim transition-colors duration-300 hover:text-ink">
                <ExternalLink size={13} strokeWidth={1.75} aria-hidden="true" />
                Live
              </a>
            )}
          </div>
        )}
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const flagships = PROJECTS.filter((p) => p.flagship);
  const [category, setCategory] = useState<"all" | Project["category"]>("all");
  const [gas, setGas] = useState<"all" | Gas>("all");
  const [showAll, setShowAll] = useState(false);

  const gallery = PROJECTS.filter((p) => !p.flagship)
    .filter((p) => p.standout && p.github && p.github.includes("Florent242"))
    .filter(
      (p) => (category === "all" || p.category === category) && (gas === "all" || p.gas === gas)
    );
  const visible = showAll ? gallery : gallery.slice(0, 9);
  const hasMore = gallery.length > 9;

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="silkscreen text-xs text-cobalt" style={{ textShadow: "0 0 12px var(--neon-cobalt)" }}>
          FIG_003 — PROJECTS
        </p>
        <h2 className="display mt-2 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Work on the wall
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-inkdim">
          Every project below is real, shipped work — each one glows in its own gas. The four
          flagships are the ones I led end to end. The gallery is a short wall of the standout
          public work — high-impact, out of the ordinary, capture pending.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {flagships.map((p, i) => (
          <Flagship key={p.name} p={p} delay={i * 100} />
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h3 className="display text-2xl font-semibold tracking-tight text-ink">The rest of the room</h3>
        <div className="flex flex-wrap items-center gap-2">
          {GAS_ORDER.map((g) => {
            const active = gas === g;
            return (
              <button
                key={g}
                type="button"
                onClick={() => setGas(active ? "all" : g)}
                aria-pressed={active}
                className="flex items-center gap-1.5 rounded-sm border px-2.5 py-1.5 text-[0.65rem] transition-colors duration-300"
                style={{
                  borderColor: "var(--neon-line)",
                  color: active ? "#fff" : "var(--neon-inkdim)",
                  backgroundColor: active ? GAS_HEX[g] : "transparent",
                }}
              >
                <span aria-hidden="true" className="h-2 w-2 rounded-full" style={{ backgroundColor: GAS_HEX[g], boxShadow: `0 0 8px ${GAS_HEX[g]}` }} />
                {g}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {(["all", ...CATEGORIES] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c as Project["category"])}
            aria-pressed={category === c}
            className={`silkscreen rounded-sm border px-3 py-1.5 text-[0.65rem] transition-colors duration-300 ${
              category === c ? "text-cobalt" : "text-inkdim"
            }`}
            style={{
              borderColor: category === c ? "var(--neon-cobalt)" : "var(--neon-line)",
              textShadow: category === c ? "0 0 12px var(--neon-cobalt)" : undefined,
            }}
          >
            {c === "all" ? "All" : c}
          </button>
        ))}
      </div>

      {gallery.length === 0 && (
        <p className="mt-10 text-sm text-inkdim">No project in this filter — try another gas.</p>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <ProjectCard key={p.name} p={p} i={i} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 text-center">
          <button type="button" onClick={() => setShowAll((s) => !s)} className="btn-tube text-sm">
            {showAll ? "Show less" : `Show all ${gallery.length} projects`}
          </button>
        </div>
      )}
    </section>
  );
}
