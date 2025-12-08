import React, { useState } from 'react'
import * as Slider from "@radix-ui/react-slider";

type TimerProps = {
  workTime: number;
  setWorkTime: React.Dispatch<React.SetStateAction<number>>;
  breakTime: number;
  setBreakTime: React.Dispatch<React.SetStateAction<number>>;
}

export default function Timer({workTime, setWorkTime, breakTime, setBreakTime}: TimerProps) {

  return (
    <div style={{display: "flex", gap: "2rem", justifyContent: "center", alignItems: "center"}}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Slider.Root
          className="sliderRoot"
          orientation='vertical'
          min={0}
          max={180}
          defaultValue={[45]}
          value={[workTime]}
          onValueChange={(val) => setWorkTime(val[0])}>
          <Slider.Track className='sliderTrack'>
            <Slider.Range className='sliderRange'/>
          </Slider.Track>
          <Slider.Thumb className='sliderThumb'/>
        </Slider.Root>
        <label style={{marginTop: "8px"}}>Work<br />Minutes: {workTime}</label>
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Slider.Root
          className="sliderRoot"
          orientation='vertical'
          min={0}
          max={60}
          value={[breakTime]}
          defaultValue={[15]}
          onValueChange={(val) => setBreakTime(val[0])}>
          <Slider.Track className='sliderTrack breakTrack'>
            <Slider.Range className='sliderRange breakRange'/>
          </Slider.Track>
          <Slider.Thumb className='sliderThumb'/>
        </Slider.Root>
        <label style={{marginTop: "8px"}}>Break<br />Minutes: {breakTime}</label>
      </div>
    </div>
  )
}
