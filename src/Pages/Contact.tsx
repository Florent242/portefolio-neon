import type { CSSProperties } from "react";
import { Mail, Phone, MapPin, Github } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid items-start gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <Reveal>
          <p className="silkscreen text-xs text-cobalt" style={{ textShadow: "0 0 12px var(--neon-cobalt)" }}>
            FIG_005 — CONTACT
          </p>
          <h2 className="display mt-2 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Flip the switch
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-inkdim">
            Open to <span className="text-ink">full-time roles</span> and{" "}
            <span className="text-ink">freelance projects</span> — architecture, fullstack build,
            or bringing an existing product into production. I answer within 24 hours.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="panel panel-hover p-6 sm:p-8"
            style={{ "--card-gas": "var(--neon-cobalt)" } as CSSProperties}
          >
            <p className="silkscreen text-[0.65rem] text-inkdim">DIRECT LINE — THE SIGN LIGHTS UP</p>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="mailto:florentboudz@gmail.com"
                  className="group inline-flex items-center gap-3 text-sm text-cobalt transition-colors duration-300"
                  style={{ textShadow: "0 0 12px var(--neon-cobalt)" }}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm border" style={{ borderColor: "var(--neon-cobalt)" }}>
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
            <a
              href="mailto:florentboudz@gmail.com"
              className="btn-tube btn-tube-filled mt-8 w-full justify-center"
            >
              <Mail size={16} strokeWidth={2} aria-hidden="true" />
              Email me directly
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
