import React from 'react'
import Navbar from '../../../components/Navbar'
import Calculator from '../../../components/Calculator'

export default function page() {
  return (
      <main>
          <div style={{padding: "1rem" }}>
          <Navbar/>
          <div style={{textAlign: "center"}}>
               <h2>✨Calculator✨</h2>
               <p>Quick Calculations and Conversions</p>
               <Calculator/>
          </div>
          </div>
      </main>
      

  )
}
