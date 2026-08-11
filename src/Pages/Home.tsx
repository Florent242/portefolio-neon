import { useEffect, useState } from "react";
import { Download, Mail, MapPin, ArrowDown } from "lucide-react";
import NeonSign from "../components/NeonSign";
import Reveal from "../components/Reveal";

const ROLES = [
  "Software Architect",
  "Master's student — AI & Big Data",
  "Fullstack · React · Laravel",
  "DevOps · CI/CD · Linux",
  "AI-adaptive learning builder",
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setFlipping(false);
      }, 220);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative flex min-h-svh flex-col items-center justify-center px-4 pb-16 pt-24">
      <div className="mx-auto w-full max-w-3xl text-center">
        <div className="mx-auto mb-8 w-full max-w-[240px] sm:max-w-md">
          <NeonSign interactive lit />
        </div>

        <Reveal delay={120}>
          <h1 className="display text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
            Florent BOUDZOUMOU
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-4 flex h-8 items-center justify-center overflow-hidden">
          <span
            key={roleIndex}
            className={`silkscreen text-sm text-cobalt sm:text-base ${flipping ? "roles-flip-out" : "roles-flip-in"}`}
            style={{ textShadow: "0 0 18px var(--neon-cobalt)" }}
          >
            {ROLES[roleIndex]}
          </span>
          </div>
        </Reveal>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-inkdim sm:text-lg">
          I design and ship software end to end — from the AI-adaptive learning platform{" "}
          <span className="text-ink">AURA</span> to fintech voting, university products, and the
          production infrastructure that keeps them running.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="btn-tube btn-tube-filled text-sm">
            <Mail size={15} strokeWidth={2} aria-hidden="true" />
            Get in touch
          </a>
          <a href="/CVFlorent.pdf" download className="btn-tube text-sm">
            <Download size={15} strokeWidth={2} aria-hidden="true" />
            Download CV
          </a>
        </div>

        <p className="mt-6 inline-flex items-center gap-2 text-xs text-inkdim">
          <MapPin size={13} strokeWidth={1.75} aria-hidden="true" />
          Cotonou, Bénin · remote-friendly · open to employment & freelance
        </p>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 text-cobalt"
      >
        <ArrowDown size={22} strokeWidth={1.5} aria-hidden="true" />
      </a>
    </section>
  );
}
