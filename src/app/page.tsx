import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Pomodoro from "../components/Pomodoro";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <div style={{padding: "1rem" }}>
          <Navbar/>
        <div style={{textAlign: "center", marginTop: "1rem"}}>
          <h3>✨Pomodoro Timer✨</h3>
          <p>Pick your work session time and break session time.</p>
            <div style={{display: "flex", justifyContent: "center", marginTop: "1.5rem"}}>
              <Pomodoro/>
            </div>
        </div>
      </div>
    </main>
  );
}
