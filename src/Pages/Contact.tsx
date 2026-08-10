import { useState, type CSSProperties, type FormEvent } from "react";
import { Mail, Phone, MapPin, Github, Send, Globe } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    const name = encodeURIComponent((f.elements.namedItem("name") as HTMLInputElement).value);
    const message = encodeURIComponent((f.elements.namedItem("message") as HTMLTextAreaElement).value);
    window.location.href = `mailto:florentboudz@gmail.com?subject=${encodeURIComponent(`Portfolio message from ${name}`)}&body=${message}`;
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <Reveal>
          <p className="silkscreen text-xs text-cobalt" style={{ textShadow: "0 0 12px var(--neon-cobalt)" }}>
            FIG_005 — CONTACT
          </p>
          <h2 className="display mt-2 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Flip the switch
          </h2>
          <p className="mt-4 text-base leading-relaxed text-inkdim">
            Open to <span className="text-ink">full-time roles</span> and{" "}
            <span className="text-ink">freelance projects</span> — architecture, fullstack build,
            or bringing an existing product into production. I answer within 24 hours.
          </p>

          <ul className="mt-8 space-y-4">
            <li>
              <a href="mailto:florentboudz@gmail.com" className="group inline-flex items-center gap-3 text-sm text-inkdim transition-colors duration-300 hover:text-cobalt">
                <span className="flex h-10 w-10 items-center justify-center rounded-sm border" style={{ borderColor: "var(--neon-line)" }}>
                  <Mail size={16} strokeWidth={1.75} aria-hidden="true" />
                </span>
                florentboudz@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+2290141789203" className="group inline-flex items-center gap-3 text-sm text-inkdim transition-colors duration-300 hover:text-cobalt">
                <span className="flex h-10 w-10 items-center justify-center rounded-sm border" style={{ borderColor: "var(--neon-line)" }}>
                  <Phone size={16} strokeWidth={1.75} aria-hidden="true" />
                </span>
                +229 01 41 78 92 03
              </a>
            </li>
            <li>
              <span className="inline-flex items-center gap-3 text-sm text-inkdim">
                <span className="flex h-10 w-10 items-center justify-center rounded-sm border" style={{ borderColor: "var(--neon-line)" }}>
                  <MapPin size={16} strokeWidth={1.75} aria-hidden="true" />
                </span>
                Cotonou, Bénin · CET (UTC+1)
              </span>
            </li>
            <li>
              <a href="https://github.com/Florent242" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-sm text-inkdim transition-colors duration-300 hover:text-cobalt">
                <span className="flex h-10 w-10 items-center justify-center rounded-sm border" style={{ borderColor: "var(--neon-line)" }}>
                  <Github size={16} strokeWidth={1.75} aria-hidden="true" />
                </span>
                github.com/Florent242
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            className="panel flex flex-col gap-4 p-6 sm:p-8"
            style={{ "--card-gas": "var(--neon-cobalt)" } as CSSProperties}
            aria-label="Contact form"
          >
            <label className="flex flex-col gap-1.5 text-xs text-inkdim" htmlFor="cf-name">
              NAME
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Florent"
                className="h-11 rounded-sm border bg-transparent px-3 text-sm text-ink outline-none transition-colors duration-300 placeholder:text-inkdim/60 focus:border-cobalt"
                style={{ borderColor: "var(--neon-line)" }}
              />
            </label>
            <label className="flex flex-col gap-1.5 text-xs text-inkdim" htmlFor="cf-email">
              EMAIL
              <a
                href="mailto:florentboudz@gmail.com"
                className="flex h-11 items-center gap-2 rounded-sm border bg-transparent px-3 text-sm text-cobalt outline-none transition-colors duration-300 hover:border-cobalt"
                style={{ borderColor: "var(--neon-line)", textShadow: "0 0 12px var(--neon-cobalt)" }}
              >
                <Mail size={14} strokeWidth={1.75} aria-hidden="true" />
                florentboudz@gmail.com
              </a>
            </label>
            <label className="flex flex-col gap-1.5 text-xs text-inkdim" htmlFor="cf-message">
              MESSAGE
              <textarea
                id="cf-message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about the product, the deadline, the stack…"
                className="resize-none rounded-sm border bg-transparent px-3 py-2.5 text-sm text-ink outline-none transition-colors duration-300 placeholder:text-inkdim/60 focus:border-cobalt"
                style={{ borderColor: "var(--neon-line)" }}
              />
            </label>
            <div className="flex items-center justify-between gap-4 pt-1">
              <p className="flex items-center gap-1.5 text-[0.65rem] text-inkdim">
                <Globe size={12} strokeWidth={1.75} aria-hidden="true" />
                Opens your mail app — no data stored
              </p>
              <button type="submit" className="btn-tube btn-tube-filled text-sm">
                <Send size={14} strokeWidth={2} aria-hidden="true" />
                Send
              </button>
            </div>
            {sent && (
              <p role="status" className="text-xs text-cobalt" style={{ textShadow: "0 0 12px var(--neon-cobalt)" }}>
                Your mail app should have opened — if not, write directly to florentboudz@gmail.com.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
