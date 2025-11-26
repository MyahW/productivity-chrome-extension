import React from 'react'
import Navbar from '../../components/Navbar'
import Calculator from '../../components/Calculator'

export default function page() {
  return (
      <main>
          <div style={{padding: "1rem" }}>
          <Navbar/>
          <div style={{textAlign: "center", marginTop: "1rem"}}>
            <h3>✨Calculator✨</h3>
              <p>Quick Calculations and Conversions</p>
              <Calculator/>
          </div>
          </div>
      </main>
      

  )
}
