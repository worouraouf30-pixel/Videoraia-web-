import React, {useState} from 'react'
export default function Dashboard(){
  const [messages,setMessages]=useState([{from:'system',text:'Bonjour — demande quelque chose à Videora IA'}])
  const [input,setInput]=useState('')
  const send = () => {
    if(!input) return
    setMessages(m=>[...m,{from:'user',text:input},{from:'ai',text:'Réponse IA (simulation) ...'}])
    setInput('')
  }
  return (
    <div>
      <h3>Tableau IA</h3>
      <div style={{minHeight:220,background:'rgba(255,255,255,0.02)',padding:12,borderRadius:8,marginTop:10}}>
        {messages.map((m,i)=>(<div key={i} style={{marginBottom:8}}><strong>{m.from}:</strong> {m.text}</div>))}
      </div>
      <div style={{display:'flex',gap:8,marginTop:10}}>
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Pose une question..." style={{flex:1,padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)',background:'transparent'}}/>
        <button className="btn" onClick={send}>Envoyer</button>
      </div>
    </div>
  )
}
