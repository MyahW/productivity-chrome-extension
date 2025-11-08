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
        <div style={{textAlign: "center", marginTop: "1rem"}}>
          <h2>✨Pomodoro Timer✨</h2>
          <p>Focus for 25 minutes, then take a 5-minute break.</p>
            <div style={{display: "flex", justifyContent: "center", marginTop: "2rem"}}>
              <Pomodoro/>
            </div>
        </div>
      </div>
    </main>
  );
}
