import React from 'react'
export default function Generator(){
  return (
    <div>
      <h3>Générateur (Images & Vidéos)</h3>
      <p style={{color:'#98a8b9'}}>Choisis un modèle, décris ta scène, clique sur "Générer".</p>
      <div style={{marginTop:12}}>
        <input className="btn" placeholder="Prompt (ex: portrait futuriste)"/>
        <div style={{marginTop:10}}>
          <button className="btn">Générer image</button>
          <button className="btn">Générer vidéo</button>
        </div>
      </div>
    </div>
  )
}
