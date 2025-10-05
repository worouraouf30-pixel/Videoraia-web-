import React, { useState } from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Generator from './pages/Generator'
import Settings from './pages/Settings'
import Monetization from './pages/Monetization'

export default function App(){
  const [route,setRoute] = useState('home')
  return (
    <div className="app">
      <div>
        <header className="card">
          <div className="brand">
            <div className="logo">V</div>
            <div>
              <div style={{fontWeight:700}}>Videora <span className="neon">IA</span></div>
              <div style={{fontSize:12,color:'#98a8b9'}}>Plateforme multi-intelligence</div>
            </div>
          </div>
          <nav>
            <a className="btn" onClick={()=>setRoute('home')}>Accueil</a>
            <a className="btn" onClick={()=>setRoute('dashboard')}>Tableau</a>
            <a className="btn" onClick={()=>setRoute('generator')}>Générateur</a>
            <a className="btn" onClick={()=>setRoute('settings')}>Paramètres</a>
            <a className="btn" onClick={()=>setRoute('monet')}>Monétisation</a>
          </nav>
        </header>

        <main className="card main-screen">
          {route==='home' && <Home/>}
          {route==='dashboard' && <Dashboard/>}
          {route==='generator' && <Generator/>}
          {route==='settings' && <Settings/>}
          {route==='monet' && <Monetization/>}
        </main>

        <footer className="card">
          <div>© Videora IA — Conçu pour générer images, vidéos et applis sans code.</div>
        </footer>
      </div>

      <aside className="card">
        <h3>Raccourcis</h3>
        <div className="list" style={{marginTop:10}}>
          <button className="btn" onClick={()=>setRoute('dashboard')}>Lancer chat IA</button>
          <button className="btn" onClick={()=>setRoute('generator')}>Créer image/vidéo</button>
          <button className="btn" onClick={()=>setRoute('settings')}>Clés API & Langues</button>
        </div>
        <div style={{marginTop:18,fontSize:13,color:'#98a8b9'}}>Responsive - prêt pour déploiement Vercel</div>
      </aside>
    </div>
  )
}
