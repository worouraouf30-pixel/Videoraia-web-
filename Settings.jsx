import React from 'react'
export default function Settings(){
  return (
    <div>
      <h3>Paramètres & Clés API</h3>
      <p style={{color:'#98a8b9'}}>Colle tes clés dans un fichier .env (ou dans Vercel env variables).</p>
      <ul>
        <li>OPENAI_API_KEY</li>
        <li>ADSENSE_KEY</li>
        <li>TIKTOK_CLIENT_ID / SECRET</li>
        <li>YOUTUBE_API_KEY</li>
        <li>WHATSAPP_TOKEN</li>
      </ul>
      <div style={{marginTop:10}}>
        <button className="btn">Ouvrir .env.example</button>
      </div>
    </div>
  )
}
