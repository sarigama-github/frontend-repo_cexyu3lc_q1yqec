import React from "react";

const eventPhotos = [
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1515165562835-c3b8c8c69a86?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
];

function HeaderHero() {
  const img = eventPhotos[Math.floor(Math.random() * eventPhotos.length)];

  return (
    <section className="relative min-h-screen w-full bg-black text-white">
      {/* Background image */}
      <img
        src={img}
        alt="People at an event"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Top navigation (simple, clear) */}
      <header className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-5">
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-3 sm:px-4 h-14">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-[#00A6FF]" aria-hidden />
            <span className="sr-only">Brand</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden sm:inline-flex h-9 items-center rounded-full border border-white/20 px-3 text-sm hover:border-white/40">
              Learn more
            </button>
            <button className="inline-flex h-9 items-center rounded-full bg-[#00A6FF] px-3 text-sm font-medium text-black hover:brightness-110">
              Get started
            </button>
          </div>
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
        <div className="mb-4 h-1.5 w-16 rounded-full bg-[#00A6FF]" />
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          Simple event pages.
          <br className="hidden sm:block" />
          Clear photos. Fast.
        </h1>
        <p className="mt-3 max-w-xl text-sm text-white/80 sm:text-base">
          Black and white base with crisp neon blue accents. Mobile‑first and easy to grasp in seconds.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <button className="inline-flex h-10 items-center rounded-full bg-[#00A6FF] px-5 text-sm font-medium text-black hover:brightness-110">
            Create a cover
          </button>
          <button className="inline-flex h-10 items-center rounded-full border border-white/20 px-5 text-sm hover:border-white/40">
            Preview
          </button>
        </div>
      </div>

      {/* Bottom fade for readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  );
}

export default HeaderHero;
