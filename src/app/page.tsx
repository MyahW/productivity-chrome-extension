import React from 'react'
import Pomodoro from "../components/Pomodoro";

export default function Home() {
  return (
    <main>
      <div style={{textAlign: "center", marginTop: "1rem"}}>
        <h3 style={{paddingBottom: "20px"}}>✨Pomodoro Timer✨</h3>
        <Pomodoro/>
      </div>
    </main>
  );
}
