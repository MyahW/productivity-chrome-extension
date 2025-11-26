"use client";
import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav style={{display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "260px",
                padding: "2px 0",
                }}>

        <Link href='/' style={{ display: "block" }}>Pomodoro</Link>
        <Link href='/notes' style={{ display: "block" }}>Notes</Link>
        <Link href='/calculator' style={{ display: "block" }}>Calculator</Link>
    </nav>
    
  );
}

export default Navbar;
