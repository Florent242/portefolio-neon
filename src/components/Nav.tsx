import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import NeonSign from "./NeonSign";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">(() =>
    typeof document !== "undefined" ? (document.documentElement.getAttribute("data-theme") as "dark" | "light") || "dark" : "dark"
  );

  const toggle = () => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("neon-theme", next);
      } catch {
        /* no-op */
      }
      document.documentElement.setAttribute("data-theme", next);
      return next;
    });
  };

  return { theme, toggle };
}

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const ids = ["about", "skills", "projects", "github", "faq", "contact"];
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "backdrop-blur-md" : ""
      }`}
      style={{ backgroundColor: scrolled ? "var(--neon-bg-soft)" : "transparent", borderBottom: "1px solid var(--neon-line)" }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <a href="#top" className="flex shrink-0 items-center gap-2" aria-label="Back to top">
          <span className="block w-9">
            <NeonSign className="scale-110" />
          </span>
          <span className="silkscreen hidden text-sm text-ink sm:inline">F.B.</span>
        </a>

        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Sections">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`silkscreen rounded-sm px-3 py-2 text-xs transition-colors duration-300 ${
                active === l.href.slice(1) ? "text-cobalt" : "text-inkdim hover:text-ink"
              }`}
              style={active === l.href.slice(1) ? { textShadow: "0 0 14px var(--neon-cobalt)" } : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-1 flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to the workshop at day (light theme)" : "Switch to the sign room at night (dark theme)"}
            className="flex h-9 w-9 items-center justify-center rounded-sm border transition-colors duration-300 hover:border-cobalt hover:text-cobalt"
            style={{ borderColor: "var(--neon-line)", color: "var(--neon-inkdim)" }}
          >
            {theme === "dark" ? <Sun size={16} strokeWidth={1.75} /> : <Moon size={16} strokeWidth={1.75} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-sm border md:hidden"
            style={{ borderColor: "var(--neon-line)", color: "var(--neon-inkdim)" }}
          >
            {open ? <X size={16} strokeWidth={1.75} /> : <Menu size={16} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t md:hidden" style={{ backgroundColor: "var(--neon-bg-soft)", borderColor: "var(--neon-line)" }} aria-label="Mobile sections">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`silkscreen rounded-sm px-3 py-3 text-xs ${active === l.href.slice(1) ? "text-cobalt" : "text-inkdim"}`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
