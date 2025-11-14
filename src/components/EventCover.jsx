import React, { useMemo } from "react";

// Map themes to curated Unsplash images representing friendly people in that vibe
const themeImages = {
  "salsa night": [
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
  ],
  "boat party": [
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
  ],
  "halloween party": [
    "https://images.unsplash.com/photo-1507915135761-41a0a222c709?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1478146059778-494eec0db779?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
  ],
  "birthday night": [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
  ],
  "pool party": [
    "https://images.unsplash.com/photo-1502920917128-1aa500764ce7?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1505818330979-72d197f8fdb1?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
  ],
  default: [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
  ],
};

function pickImage(themeKey) {
  const pool = themeImages[themeKey] || themeImages.default;
  return pool[Math.floor(Math.random() * pool.length)];
}

function EventCover({ theme = "" }) {
  const key = theme.trim().toLowerCase();
  const imgSrc = useMemo(() => pickImage(key), [key]);

  return (
    <div className="relative w-full max-w-[1600px] mx-auto aspect-[16/9] rounded-3xl overflow-hidden bg-black">
      {/* Background photo */}
      <img
        src={imgSrc}
        alt="Event theme visual with friendly people"
        className="absolute inset-0 h-full w-full object-cover object-center scale-[1.06] opacity-95"
        style={{ filter: "saturate(1.05) contrast(1.06) brightness(0.94)" }}
      />

      {/* Brand gradient wash (soft neon blue and purple) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 55% at 20% 25%, rgba(0,166,255,0.55) 0%, rgba(0,166,255,0.12) 60%, transparent 100%), radial-gradient(50% 50% at 80% 35%, rgba(122,79,255,0.55) 0%, rgba(122,79,255,0.12) 60%, transparent 100%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Cinematic vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,transparent_0%,transparent_60%,rgba(0,0,0,0.35)_100%)]" />

      {/* Subtle bokeh lights */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute -top-10 left-10 h-72 w-72 rounded-full bg-[#00A6FF]/40 blur-3xl opacity-70 mix-blend-screen" />
        <span className="absolute top-1/3 -left-24 h-80 w-80 rounded-full bg-[#7A4FFF]/35 blur-3xl opacity-70 mix-blend-screen" />
        <span className="absolute bottom-10 right-14 h-64 w-64 rounded-full bg-[#00A6FF]/35 blur-3xl opacity-80 mix-blend-screen" />
        <span className="absolute bottom-1/4 right-1/3 h-96 w-96 rounded-full bg-[#7A4FFF]/30 blur-3xl opacity-70 mix-blend-screen" />
        <span className="absolute top-8 right-16 h-48 w-48 rounded-full bg-white/10 blur-2xl opacity-50 mix-blend-screen" />
      </div>

      {/* Thin glass frame for premium feel (no text) */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
    </div>
  );
}

export default EventCover;
