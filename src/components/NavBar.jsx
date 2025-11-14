import React from 'react'

export default function NavBar(){
  return (
    <div className="sticky top-0 z-20 w-full bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-md bg-[#00A6FF]" />
          <span className="text-sm font-medium text-white/90">Event Photos</span>
        </a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="/contact" className="text-white/80 hover:text-white">Contact</a>
          <a href="/admin" className="text-white/80 hover:text-white">Admin</a>
        </nav>
      </div>
    </div>
  )
}
