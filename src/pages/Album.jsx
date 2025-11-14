import React, { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

function secondsToParts(s){
  const d = Math.floor(s/86400)
  s%=86400
  const h = Math.floor(s/3600)
  s%=3600
  const m = Math.floor(s/60)
  const sec = s%60
  return `${d}d ${h}h ${m}m ${sec}s`
}

function PhotoTile({p}){
  const img = p.image_url || `${BACKEND}/api/photos/${p.id}/image`
  return (
    <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5">
      <img src={img} alt="photo" className="h-52 w-full object-cover"/>
      <div className="flex items-center justify-between p-3">
        <span className="rounded-full border border-white/10 bg-black/40 px-2 py-1 text-xs text-white/80">{secondsToParts(p.seconds_left||0)}</span>
        <div className="flex items-center gap-2">
          <a href={`${BACKEND}/api/photos/${p.id}/download`} className="rounded-full border border-white/20 px-3 py-1 text-xs hover:border-white/40">Download</a>
          <button disabled className="cursor-not-allowed rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">Buy for $2</button>
        </div>
      </div>
    </div>
  )
}

export default function Album(){
  const [album,setAlbum] = useState(null)
  const [photos,setPhotos] = useState([])

  const albumId = window.location.pathname.split('/').pop()

  useEffect(()=>{
    const load = async ()=>{
      const a = await fetch(`${BACKEND}/api/albums/${albumId}`).then(r=>r.json())
      setAlbum(a)
      const p = await fetch(`${BACKEND}/api/albums/${albumId}/photos`).then(r=>r.json())
      setPhotos(p.items||[])
    }
    load()
  },[albumId])

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <a href="/" className="text-sm text-white/70 hover:text-white">← Back</a>
        {album && (
          <header className="mt-4">
            <h1 className="text-2xl font-semibold">{album.event_name}</h1>
            <p className="text-sm text-white/70">{new Date(album.date).toLocaleDateString()} • {album.location || '—'}</p>
          </header>
        )}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {photos.map(p=> <PhotoTile key={p.id} p={p}/>) }
        </div>
      </div>
    </div>
  )
}
