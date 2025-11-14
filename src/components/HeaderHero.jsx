import React from "react";

const peoplePhotos = [
  // Curated, license-friendly Unsplash images showing real people at events
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542427088-6751c0a3c202?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1511795409834-bf84f7240f2c?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
];

function HeaderHero() {
  const imgSrc = peoplePhotos[Math.floor(Math.random() * peoplePhotos.length)];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background image */}
      <img
        src={imgSrc}
        alt="Event crowd smiling and enjoying a party"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-90 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        style={{ filter: "saturate(1.05) contrast(1.05) brightness(0.9)" }}
      />

      {/* Color wash: soft neon blue and violet */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 20%, rgba(0,166,255,0.55) 0%, rgba(0,166,255,0.1) 60%, transparent 100%), radial-gradient(50% 50% at 80% 30%, rgba(122,79,255,0.55) 0%, rgba(122,79,255,0.12) 55%, transparent 100%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Subtle vignette for cinematic depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Bokeh lights */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute -top-10 left-10 h-64 w-64 rounded-full bg-[#00A6FF]/40 blur-3xl opacity-70 mix-blend-screen" />
        <span className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-[#7A4FFF]/35 blur-3xl opacity-70 mix-blend-screen" />
        <span className="absolute bottom-10 right-14 h-56 w-56 rounded-full bg-[#00A6FF]/35 blur-3xl opacity-80 mix-blend-screen" />
        <span className="absolute bottom-1/4 right-1/3 h-80 w-80 rounded-full bg-[#7A4FFF]/30 blur-3xl opacity-70 mix-blend-screen" />
        <span className="absolute top-10 right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl opacity-50 mix-blend-screen" />
      </div>

      {/* Minimal header bar with space for logo + buttons (no text) */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between px-5 sm:px-6 md:px-8 h-16">
          {/* Logo placeholder */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#00A6FF] to-[#7A4FFF] opacity-90 shadow-[0_0_20px_rgba(122,79,255,0.45)]" />
          </div>
          {/* Button placeholders */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-9 w-9 rounded-full bg-white/15 hover:bg-white/20 transition-colors" />
            <div className="hidden sm:block h-9 w-20 rounded-full bg-white/10 hover:bg-white/20 transition-colors" />
            <div className="hidden md:block h-9 w-24 rounded-full bg-white/10 hover:bg-white/20 transition-colors" />
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#00A6FF] to-[#7A4FFF] opacity-90" />
          </div>
        </div>
      </div>

      {/* Subtle depth elements near bottom, keep uncluttered */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
    </section>
  );
}

export default HeaderHero;
