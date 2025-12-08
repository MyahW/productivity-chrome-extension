import React from 'react'
import Notes from '../../components/Notes'

export default function page() {
  return (
    <main>
      <div style={{textAlign: "center", marginTop: "1rem"}}>
        <h3>✨Notes✨</h3>
        <Notes/>
      </div>
    </main>
  );
}
