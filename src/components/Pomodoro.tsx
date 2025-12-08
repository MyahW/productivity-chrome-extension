"use client";

import React, { useState, useEffect, useRef, useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./ui/PlayButton";
import PauseButton from "./ui/PauseButton";
import RestartButton from "./ui/RestartButton";
import Timer from "./Timer";

const red = "#a5075bff";
const redFade = "#e1d1ebff";
const blue = "#07a59dff";
const blueFade = "#D1EBEA";

export default function Pomodoro() {
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work");

  const [secondsLeft, setSecondsLeft] = useState<number>(0);
  
  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);
  
  function switchMode(){
    const nextMode = modeRef.current === 'work' ? 'break' : 'work';
    const nextSeconds = (nextMode === 'work' ? workMinutes : breakMinutes) * 60;
    
    setMode(nextMode);
    modeRef.current = nextMode;

    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  }

  function tick(){
    secondsLeftRef.current --;
    setSecondsLeft(secondsLeftRef.current);
  }

  function initTimer(){
    const initialSeconds = mode === "work" ? workMinutes * 60 : breakMinutes * 60;
    setSecondsLeft(initialSeconds);
  }

  useEffect(() => {
    initTimer();

    const interval = setInterval(() => {
      if (isPausedRef.current){
        return;
      }
      if (secondsLeftRef.current === 0){
        return switchMode();
      }

      tick(); 
    }, 1000);

    return () => clearInterval(interval);
}, []);

  useEffect(() => {
      const initialSeconds = mode === "work" ? workMinutes * 60 : breakMinutes * 60;
      secondsLeftRef.current = initialSeconds;
      setSecondsLeft(initialSeconds);
    }, [workMinutes, breakMinutes, mode]);

 {/*Sets the percentage on timer if on work mode*/}
 const totalSeconds = mode === 'work' 
  ? workMinutes * 60 : breakMinutes * 60;
 const percentage = Math.round(secondsLeft / totalSeconds * 100);

 {/*Numbe rof Minutes and Seconds Left*/}
  const minutes = Math.floor(secondsLeft / 60); // if 44.8 become 44
  let seconds = secondsLeft % 60;
  if(seconds < 10){
    seconds = '0' + seconds;
  }

  return (
    <main>
      <div style={{display: "flex", flexDirection: "row"}}>
        <div style={{display: "flex", flexDirection: "column"}}>
          <div style={{ width: 110, height: 110}}>
            <CircularProgressbar value={percentage} text={minutes + ' : ' + seconds} 
            styles={buildStyles({
              textColor: "#30384bff",
              pathColor: mode === 'work' ? red : blue,
              trailColor: mode == 'work' ? redFade : blueFade,
            }) }/>
          </div>
          <div 
            id="pomoBtn" 
            style={{
              marginTop: "15px",
              gap: 15,
              display: "flex",
              flexShrink: 0,
              flexGrow: 0,
              width: "100px",
              justifyContent: "center",
              alignItems: "center",
            }}>
            {isPaused ? (
              <PlayButton
                onClick={() => {
                  setIsPaused(false); isPausedRef.current = false;}}
                style={{ 
                  color: "#30384bff", 
                  width: "25px", 
                  height: "25px", 
                }}
              />
            ) : (
              <PauseButton onClick={() => {
                  setIsPaused(true); isPausedRef.current = true;}}
                style={{ 
                  color: "#30384bff", 
                  width: "25px", 
                  height: "25px" }}/>
            )}
            <RestartButton
              onClick={() => {
                initTimer();
                setIsPaused(true); isPausedRef.current = true;}} 
              style={{
                color: "#30384bff", 
                width: "25px", 
                height: "25px"}}/>
          </div>
        </div>
        <div style={{paddingLeft: "1rem"}}>
          <Timer
            workTime={workMinutes}
            setWorkTime={setWorkMinutes}
            breakTime={breakMinutes}
            setBreakTime={setBreakMinutes}
          />
        </div>
      </div>
    </main>
  );
}