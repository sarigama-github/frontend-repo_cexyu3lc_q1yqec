import React, { useEffect, useState } from 'react'
import HeaderHero from './components/HeaderHero'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

function formatDate(dateStr){
  const d = new Date(dateStr)
  return d.toLocaleDateString()
}

function secondsToParts(s){
  const d = Math.floor(s/86400)
  s%=86400
  const h = Math.floor(s/3600)
  s%=3600
  const m = Math.floor(s/60)
  const sec = s%60
  return `${d}d ${h}h ${m}m ${sec}s`
}

function SearchBar({query,setQuery,onSearch}){
  return (
    <div className="mt-6 flex w-full max-w-3xl items-center gap-2 rounded-full border border-white/15 bg-white/5 p-2">
      <input
        value={query}
        onChange={e=>setQuery(e.target.value)}
        placeholder="Search event, location..."
        className="flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-white/50"
      />
      <button onClick={onSearch} className="rounded-full bg-[#00A6FF] px-4 py-2 text-sm font-medium text-black hover:brightness-110">Search</button>
    </div>
  )
}

function Filters({filters,setFilters}){
  return (
    <div className="mt-4 grid w-full max-w-5xl grid-cols-1 gap-2 sm:grid-cols-3">
      <input value={filters.event_name} onChange={e=>setFilters(f=>({...f,event_name:e.target.value}))} placeholder="Event Name" className="h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm outline-none placeholder:text-white/50" />
      <input type="date" value={filters.date} onChange={e=>setFilters(f=>({...f,date:e.target.value}))} className="h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm outline-none" />
      <input value={filters.location} onChange={e=>setFilters(f=>({...f,location:e.target.value}))} placeholder="Location" className="h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm outline-none placeholder:text-white/50" />
    </div>
  )
}

function AlbumCard({album}){
  const img = album.cover_image_url || `https://picsum.photos/seed/${album.id}/800/600`
  return (
    <a href={`/album/${album.id}`} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <img src={img} alt="cover" className="h-48 w-full object-cover transition group-hover:scale-[1.02]"/>
      <div className="p-4">
        <div className="mb-2 h-1 w-12 rounded-full bg-[#00A6FF]" />
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-medium">{album.event_name}</h3>
            <p className="text-xs text-white/70">{formatDate(album.date)}</p>
          </div>
          <span className="rounded-full border border-white/10 bg-black/40 px-2 py-1 text-xs text-white/80">{secondsToParts(album.seconds_left || 0)}</span>
        </div>
      </div>
    </a>
  )
}

function AlbumsGrid(){
  const [items,setItems] = useState([])
  const [query,setQuery] = useState('')
  const [filters,setFilters] = useState({event_name:'', date:'', location:''})
  const load = async (params={})=>{
    const qs = new URLSearchParams(params).toString()
    const res = await fetch(`${BACKEND}/api/albums${qs?`?${qs}`:''}`)
    const data = await res.json()
    setItems(data.items||[])
  }
  useEffect(()=>{ load({}) },[])
  const onSearch=()=>{
    const p={}
    if(query) p.q=query
    if(filters.event_name) p.event_name=filters.event_name
    if(filters.location) p.location=filters.location
    if(filters.date) p.date=filters.date
    load(p)
  }
  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <SearchBar query={query} setQuery={setQuery} onSearch={onSearch}/>
      <Filters filters={filters} setFilters={setFilters}/>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map(a=> <AlbumCard key={a.id} album={a}/>) }
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderHero />
      <main>
        <AlbumsGrid />
      </main>
    </div>
  )
}

export default App
