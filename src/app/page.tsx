import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Pomodoro from "../../components/Pomodoro";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <main>
      
      <div style={{padding: "1rem" }}>
          <Navbar/>
        <div style={{textAlign: "center"}}>
          <h2>✨Pomodoro Timer✨</h2>
          <p>Focus for 25 minutes, then take a 5-minute break.</p>
          <Pomodoro/>
        </div>
      </div>
    </main>
  );
}
