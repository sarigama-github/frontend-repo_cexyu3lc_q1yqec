import React, { useMemo } from "react";

// Theme → curated Unsplash images of people at events
const pools = {
  default: [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3",
  ],
  party: [
    "https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1515165562835-c3b8c8c69a86?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3",
  ],
  outdoor: [
    "https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3",
  ],
};

const pick = (key) => {
  const set = pools[key] || pools.default;
  return set[Math.floor(Math.random() * set.length)];
};

export default function EventCover({ theme = "" }) {
  const key = theme.toLowerCase().includes("outdoor")
    ? "outdoor"
    : theme.toLowerCase().includes("party")
    ? "party"
    : "default";
  const img = useMemo(() => pick(key), [key]);

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-black">
      <img src={img} alt="Event cover" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl" />
      {/* Accent bar */}
      <div className="absolute left-4 top-4 h-1 w-14 rounded-full bg-[#00A6FF]" />
      {/* Corners */}
      <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
    </div>
  );
}
