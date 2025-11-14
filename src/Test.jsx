import React, { useState } from 'react'
import EventCover from './components/EventCover'

export default function Test() {
  const [theme, setTheme] = useState('Salsa Night')

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 flex items-center gap-4">
          <input
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            placeholder="Type a theme (e.g., Boat Party)"
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 outline-none focus:ring-2 focus:ring-[#00A6FF]"
          />
        </div>
        <EventCover theme={theme} />
      </div>
    </div>
  )
}
