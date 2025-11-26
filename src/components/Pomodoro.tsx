"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./ui/PlayButton";
import PauseButton from "./ui/PauseButton";
//import AddTime from "./ui/AddTime";
//import MinusTime from "./ui/MinusTime";
import RestartButton from "./ui/RestartButton";

const purple = "#9b16e8ff";
const green = "#07a568ff";
const blue = "#109ad5ff";

export default function Pomodoro() {
  return (
    <main>
      <div style={{ width: 110, height: 110 }}>
        <CircularProgressbar value={75} text={"25:00"} styles={buildStyles({
          textColor: "#fff",
          pathColor:purple,
          trailColor:"#e1d1ebff",
          }) }/>
      </div>
      <div id="pomoBtn" style={{
        marginTop: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        }}>
            <PlayButton style={{width: "25px", height: "25px"}}/>
            <PauseButton style={{width: "25px", height: "25px"}}/>
            <RestartButton style={{width: "25px", height: "25px"}}/>
      </div>
    </main>
    
  );
}