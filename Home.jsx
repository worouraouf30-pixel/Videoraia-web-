import React from 'react'
export default function Home(){
  return (
    <div>
      <h2>Bienvenue sur Videora <span style={{color:'#39f'}}>IA</span></h2>
      <p style={{color:'#98a8b9'}}>Connecte tes comptes (TikTok, YouTube, Instagram, WhatsApp) et commence à générer du contenu.</p>
      <section style={{marginTop:16}}>
        <button className="btn">Se connecter avec Google</button>
        <button className="btn">Se connecter avec TikTok</button>
      </section>
    </div>
  )
}
