"use client";

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Pomodoro() {
  return (
    <main>
      <div style={{ width: 120, height: 120 }}>
        <CircularProgressbar value={75} text="25:00" />
      </div>
    </main>
    
  );
}