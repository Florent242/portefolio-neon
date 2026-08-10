import Nav from "./components/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Techno from "./Pages/Techno";
import Projects from "./Pages/Projects";
import GitHub from "./Pages/GitHub";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";
import { ArrowUp } from "lucide-react";

function App() {
  return (
    <div id="top" style={{ backgroundColor: "var(--neon-bg)", minHeight: "100dvh" }}>
  {/* THE CONTRACT — NEON CIRCUIT
  THESIS: This portfolio is the neon sign of its own author. One continuous glass tube, bent into
  FB, hangs in a dark room — and the room is the résumé. Content is the wiring; typography is the
  silkscreen label; each project is a gas in the spectrum.
  OWN-WORLD: Everything lives in one room with two states: the sign room at night (dark: #08070d,
  cobalt discharge, warm electrode red) and the workshop at day (light: #f1ede4 pale plaster, soft
  ink). Every color is a real gas discharge. No decorative gradients, no rounded-glass blur, no
  emoji, no borders thicker than 1px. Signage is stencil silkscreen; display type is Clash Display;
  body is Instrument Sans.
  STORY: Top: the sign powers on, warm-up shimmer, then the gas breathes. About: the architect —
  photo is a placeholder ring. Skills: the bench. Projects: flagships on the wall, then the
  gallery, each glowing in its own gas, filterable. GitHub: live repos. Contact: "Flip the switch".
  FIRST VIEWPORT: Hero: interactive FB monogram (click cycles the gas), name in display type, one
  role line that flips, two CTAs (Get in touch / Download CV), location line, scroll hint.
  FORM + FINISH: Sections are separated by a circuit bus line. Cards are panels with a 1px gas
  border and a hover glow. One authored motion: the gas breath and the warm-up. Respects
  prefers-reduced-motion. Target: build passes, Lighthouse ≥ 90, all links real, download works,
  detector clean. WORLD SEED: 825ee563 (concept roll) — user chose challenger-neon; answer
  {"optionId":"challenger-neon"} logged in .impeccable/questions/e323d6bb.log. */}
  <a
    href="#top"
    className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-sm border"
    style={{ borderColor: "var(--neon-line)", backgroundColor: "var(--neon-bg-soft)" }}
    aria-label="Back to top"
  >
    <ArrowUp size={16} strokeWidth={2} className="text-cobalt" aria-hidden="true" />
  </a>

  <Nav />
  <main>
    <Home />
    <div className="circuit-bus" aria-hidden="true" />
    <About />
    <div className="circuit-bus" aria-hidden="true" />
    <Techno />
    <div className="circuit-bus" aria-hidden="true" />
    <Projects />
    <div className="circuit-bus" aria-hidden="true" />
    <GitHub />
    <div className="circuit-bus" aria-hidden="true" />
    <Faq />
    <div className="circuit-bus" aria-hidden="true" />
    <Contact />
  </main>

  <footer
    className="mx-auto w-full max-w-6xl px-4 pb-10 pt-2 sm:px-6"
    style={{ borderTop: "1px solid var(--neon-line)" }}
  >
    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
      <p className="silkscreen text-[0.65rem] text-inkdim">
        © 2026 florentboudz. all rights reserved.
      </p>
    </div>
  </footer>
    </div>
  );
}

export default App;
