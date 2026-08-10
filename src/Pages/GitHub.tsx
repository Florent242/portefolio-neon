import { useEffect, useState, type CSSProperties } from "react";
import { Github, Star, GitFork } from "lucide-react";
import Reveal from "../components/Reveal";

interface Repo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  archived: boolean;
  fork: boolean;
}

const USER = "Florent242";

const valueOf = (r: Repo) => r.stargazers_count * 3 + r.forks_count * 2;

export default function GitHub() {
  const [repos, setRepos] = useState<Repo[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed&type=owner`)
      .then((r) => (r.ok ? r.json() : []))
      .then((data: Repo[]) => {
        if (cancelled) return;
        setRepos(
          data
            .filter((r) => !r.archived && !r.fork)
            .filter((r) => r.name !== "Portefolio" && r.name !== "miss-esgis")
            .filter((r) => r.stargazers_count > 0)
            .sort((a, b) => valueOf(b) - valueOf(a) || new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
            .slice(0, 8)
        );
      })
      .catch(() => {
        if (!cancelled) setRepos([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="silkscreen text-xs text-cobalt" style={{ textShadow: "0 0 12px var(--neon-cobalt)" }}>
          FIG_004 — GITHUB
        </p>
        <h2 className="display mt-2 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Repos on the rack
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-inkdim">
          The standout repos, live from the GitHub API — the same short wall as the gallery, and
          nothing else.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-3 sm:grid-cols-2">
        {repos === null ? (
          Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="panel h-28 animate-pulse" style={{ backgroundColor: "var(--neon-panel)" }} role="status" aria-label="Loading GitHub repositories" />
          ))
        ) : repos.length === 0 ? (
          <p className="text-sm text-inkdim sm:col-span-2">Couldn't reach the GitHub API — check back later.</p>
        ) : (
          repos.map((r, i) => (
            <Reveal key={r.name} delay={(i % 2) * 90}>
              <a
                href={r.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="panel panel-hover flex h-full flex-col gap-2 p-4"
                style={{ "--card-gas": "var(--neon-cobalt)" } as CSSProperties}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex min-w-0 items-center gap-2 text-sm font-medium text-ink">
                    <Github size={14} strokeWidth={1.75} className="shrink-0 text-cobalt" aria-hidden="true" />
                    <span className="truncate">{r.name}</span>
                  </span>
                  <span className="silkscreen shrink-0 text-[0.6rem] text-inkdim">
                    {r.language ?? "—"}
                  </span>
                </div>
                <p className="line-clamp-2 flex-1 text-xs leading-relaxed text-inkdim">
                  {r.description ?? "No description."}
                </p>
                <div className="flex items-center gap-4 text-[0.65rem] text-inkdim">
                  <span className="inline-flex items-center gap-1">
                    <Star size={11} strokeWidth={1.75} aria-hidden="true" />
                    {r.stargazers_count}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork size={11} strokeWidth={1.75} aria-hidden="true" />
                    {r.forks_count}
                  </span>
                  <span className="ml-auto">
                    {new Date(r.pushed_at).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
                  </span>
                </div>
              </a>
            </Reveal>
          ))
        )}
      </div>

      <div className="mt-10 text-center">
        <a
          href={`https://github.com/${USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-tube btn-tube-filled text-sm"
        >
          <Github size={15} strokeWidth={2} aria-hidden="true" />
          github.com/Florent242
        </a>
      </div>
    </section>
  );
}
