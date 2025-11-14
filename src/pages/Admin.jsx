import React, { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

function Section({title,children}){
  return (
    <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="mb-2 h-1 w-12 rounded-full bg-[#00A6FF]" />
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  )
}

export default function Admin(){
  const [token,setToken] = useState('')
  const [password,setPassword] = useState('')
  const [albums,setAlbums] = useState([])
  const [creating,setCreating] = useState({event_name:'', location:'', date:'', cover_image_url:'', expires_in_days:15})
  const [files,setFiles] = useState([])

  const login = async ()=>{
    const r = await fetch(`${BACKEND}/api/admin/login`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({password})}).then(r=>r.json())
    if(r.token) setToken(r.token)
  }

  const loadAlbums = async ()=>{
    const r = await fetch(`${BACKEND}/api/albums`).then(r=>r.json())
    setAlbums(r.items||[])
  }

  useEffect(()=>{ loadAlbums() },[])

  const createAlbum = async ()=>{
    const payload = {...creating}
    if(payload.date) payload.date = new Date(payload.date).toISOString()
    const r = await fetch(`${BACKEND}/api/albums?token=${token}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}).then(r=>r.json())
    if(r.id){
      setCreating({event_name:'', location:'', date:'', cover_image_url:'', expires_in_days:15})
      loadAlbums()
    }
  }

  const uploadPhotos = async (albumId)=>{
    const fd = new FormData()
    for(const f of files) fd.append('files', f)
    await fetch(`${BACKEND}/api/albums/${albumId}/photos?token=${token}`,{method:'POST', body:fd})
    setFiles([])
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <a href="/" className="text-sm text-white/70 hover:text-white">← Back</a>
        <h1 className="mt-4 text-2xl font-semibold">Admin Panel</h1>

        {!token && (
          <Section title="Login">
            <div className="flex items-center gap-3">
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Admin password" className="h-10 flex-1 rounded-md border border-white/10 bg-white/5 px-3 text-sm outline-none"/>
              <button onClick={login} className="h-10 rounded-md bg-[#00A6FF] px-4 text-sm font-medium text-black">Login</button>
            </div>
          </Section>
        )}

        {token && (
          <>
            <Section title="Create Album">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-5">
                <input value={creating.event_name} onChange={e=>setCreating(v=>({...v,event_name:e.target.value}))} placeholder="Event name" className="h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm outline-none"/>
                <input value={creating.location} onChange={e=>setCreating(v=>({...v,location:e.target.value}))} placeholder="Location" className="h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm outline-none"/>
                <input type="date" value={creating.date} onChange={e=>setCreating(v=>({...v,date:e.target.value}))} className="h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm outline-none"/>
                <input value={creating.cover_image_url} onChange={e=>setCreating(v=>({...v,cover_image_url:e.target.value}))} placeholder="Cover image URL" className="h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm outline-none"/>
                <input type="number" value={creating.expires_in_days} onChange={e=>setCreating(v=>({...v,expires_in_days:parseInt(e.target.value||'15')}))} className="h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm outline-none"/>
              </div>
              <button onClick={createAlbum} className="mt-3 h-10 rounded-md bg-[#00A6FF] px-4 text-sm font-medium text-black">Create</button>
            </Section>

            <Section title="Upload Photos">
              <input type="file" multiple onChange={e=>setFiles(Array.from(e.target.files||[]))} className="block text-sm"/>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {albums.map(a=> (
                  <div key={a.id} className="rounded-lg border border-white/10 p-3">
                    <div className="text-sm font-medium">{a.event_name}</div>
                    <button onClick={()=>uploadPhotos(a.id)} disabled={!files.length} className="mt-2 h-9 rounded-md border border-white/20 px-3 text-sm hover:border-white/40 disabled:opacity-50">Upload to this album</button>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Inbox">
              <a href={`${BACKEND}/api/admin/inbox?token=${token}`} className="text-sm underline">Open inbox JSON</a>
            </Section>
          </>
        )}
      </div>
    </div>
  )
}
