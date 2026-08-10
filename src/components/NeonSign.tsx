import { useEffect, useState } from "react";
import { GAS_HEX, type Gas } from "../data/projects";

const GASES: Gas[] = ["cobalt", "argon", "neongas", "helium", "xenon", "krypton", "radon"];

export const TUBE_PATH =
  "M 52 236 V 88 H 140 V 112 H 76 V 164 H 132 L 172 164 V 236 A 50 50 0 0 0 272 236 V 168 A 60 60 0 0 0 172 118";

interface NeonSignProps {
  gas?: Gas;
  className?: string;
  interactive?: boolean;
  lit?: boolean;
}

export default function NeonSign({ gas = "cobalt", className = "", interactive = false, lit = true }: NeonSignProps) {
  const [current, setCurrent] = useState<Gas>(gas);
  const [on, setOn] = useState(false);
  const [warmed, setWarmed] = useState(lit);

  useEffect(() => {
    const t = setTimeout(() => setOn(true), 350);
    const f = setTimeout(() => setWarmed(true), 2600);
    return () => {
      clearTimeout(t);
      clearTimeout(f);
    };
  }, []);

  const hex = GAS_HEX[current];

  const handleClick = () => {
    if (!interactive) return;
    const i = GASES.indexOf(current);
    setCurrent(GASES[(i + 1) % GASES.length]);
  };

  return (
    <button
      type="button"
      aria-label="FB monogram, one continuous neon tube — tap to change the gas"
      title="Tap to change the gas"
      onClick={handleClick}
      className={
        interactive
          ? "group relative block cursor-pointer bg-transparent transition-transform duration-500 hover:scale-[1.02] active:scale-[0.99] " + className
          : "block " + className
      }
    >
      <svg viewBox="0 0 320 300" className="h-auto w-full select-none" aria-hidden="true">
        <path
          d={TUBE_PATH}
          fill="none"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth={15}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={TUBE_PATH}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth={26}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={TUBE_PATH}
          fill="none"
          stroke={hex}
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={warmed ? 1 : 0}
          className="tube-shimmer"
          style={{
            filter: `drop-shadow(0 0 6px ${hex}) drop-shadow(0 0 18px ${hex})`,
            transition: "opacity 1.2s ease",
          }}
        />
        <path
          d={TUBE_PATH}
          fill="none"
          stroke="#fff"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={on ? 0.85 : 0}
          style={{ transition: "opacity 0.6s ease" }}
        />
        <g opacity={warmed ? 1 : 0.25} style={{ transition: "opacity 1.2s ease" }}>
          <circle cx={52} cy={236} r={8} fill="#ff4438" style={{ filter: "drop-shadow(0 0 5px #ff4438)" }} />
          <circle cx={52} cy={236} r={3} fill="#ffd9d6" />
          <circle cx={172} cy={118} r={8} fill="#ff4438" style={{ filter: "drop-shadow(0 0 5px #ff4438)" }} />
          <circle cx={172} cy={118} r={3} fill="#ffd9d6" />
        </g>
      </svg>
    </button>
  );
}
