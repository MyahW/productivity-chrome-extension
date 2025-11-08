"use client";
import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav style={{display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "260px"}}>
      <div>
        <Link href='/'>Pomodoro</Link>
      </div>
      <div>
        <Link href='/notes'>Notes</Link>
      </div>
      <div>
        <Link href='/calculator'>Calculator</Link>
      </div>
    </nav>
    
  );
}

export default Navbar;
