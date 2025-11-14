import React from 'react'
import HeaderHero from './components/HeaderHero'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderHero />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="mb-2 h-1 w-12 rounded-full bg-[#00A6FF]" />
            <h2 className="text-lg font-medium">Fast to grasp</h2>
            <p className="mt-1 text-sm text-white/80">A clear layout with minimal steps. Understand the value in under three seconds.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="mb-2 h-1 w-12 rounded-full bg-[#00A6FF]" />
            <h2 className="text-lg font-medium">Mobile‑first</h2>
            <p className="mt-1 text-sm text-white/80">Designed for phones first, then scales up cleanly to larger screens.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
