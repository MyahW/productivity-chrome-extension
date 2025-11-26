import React from 'react'
import Navbar from '../../components/Navbar'
import Notes from '../../components/Notes'

export default function page() {
  return (
     <main>
          <div style={{padding: "1rem" }}>
          <Navbar/>
          <div style={{textAlign: "center", marginTop: "1rem"}}>
               <h3>✨Notes✨</h3>
               <p>Jot it down or Screenshot it!</p>
               <Notes/>
          </div>
          </div>
    </main>
  )
}
