import React from 'react'
export default function Monetization(){
  return (
    <div>
      <h3>Monétisation</h3>
      <p style={{color:'#98a8b9'}}>AdSense & emplacements publicitaires prêts à recevoir ADSENSE_KEY.</p>
      <div style={{marginTop:12}}>
        <div style={{height:90,background:'rgba(255,255,255,0.02)',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>Place AdSense 728x90 (simulation)</div>
        <div style={{marginTop:10,fontSize:13,color:'#98a8b9'}}>Après déploiement, ajoute ta clé AdSense dans les env vars.</div>
      </div>
    </div>
  )
}
