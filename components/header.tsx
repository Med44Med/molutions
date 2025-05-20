"use client";

import React from "react";
import Link from "next/link";
import useTheme from "../src/lib/zustand/theme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex backdrop-blur-xs justify-between items-center h-14 px-5">
      <div className="text-4xl font-poppins font-bold text-primary">
        Molutions
      </div>
      <nav>
        <Link href="/portfolio" className="text-2xl font-poppins">
          Portfolio
        </Link>
        <Link href="/contact">Contact us</Link>
        <div onClick={()=>toggleTheme()} className='cursor-pointer'>
          <h1>{theme}</h1>
        </div>
      </nav>
    </header>
  );
};

export default Header;
