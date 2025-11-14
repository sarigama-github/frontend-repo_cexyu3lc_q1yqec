import React, { useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact(){
  const [form,setForm] = useState({name:'',email:'',event_name:'',date:'',message:''})
  const [sent,setSent] = useState(false)

  const submit = async (e)=>{
    e.preventDefault()
    const payload = {...form}
    if(payload.date) payload.date = new Date(payload.date).toISOString()
    await fetch(`${BACKEND}/api/contact`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})
    setSent(true)
    setForm({name:'',email:'',event_name:'',date:'',message:''})
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-xl px-4 sm:px-6 lg:px-8 py-10">
        <a href="/" className="text-sm text-white/70 hover:text-white">← Back</a>
        <h1 className="mt-4 text-2xl font-semibold">Contact</h1>
        <p className="text-sm text-white/70">Can't find your photo? Leave us a note and we'll help.</p>

        {sent && <div className="mt-4 rounded-md border border-white/10 bg-white/5 p-3 text-sm">Message sent. We'll get back to you soon.</div>}

        <form onSubmit={submit} className="mt-6 grid grid-cols-1 gap-3">
          <input value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} placeholder="Name" className="h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm outline-none" required/>
          <input type="email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} placeholder="Email" className="h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm outline-none" required/>
          <input value={form.event_name} onChange={e=>setForm(f=>({...f,event_name:e.target.value}))} placeholder="Event name" className="h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm outline-none"/>
          <input type="date" value={form.date} onChange={e=>setForm(f=>({...f,date:e.target.value}))} className="h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm outline-none"/>
          <textarea value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} placeholder="Message" className="min-h-[120px] rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none" required/>
          <button className="mt-2 h-10 rounded-md bg-[#00A6FF] text-black text-sm font-medium hover:brightness-110">Send</button>
        </form>
      </div>
    </div>
  )
}
