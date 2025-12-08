"use client";
import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav style={{display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "200px",
                gap: "8px",
                padding: "2px 0",
                marginTop: "15px"
                }}>

      <Link href='/' style={{ display: "block" }}>Pomodoro</Link>
      <Link href='/notes' style={{ display: "block" }}>Notes</Link>
      <Link href='/calculator' style={{ display: "block" }}>Calculator</Link>
    </nav>
    
  );
}

export default Navbar;
