import React from "react";
import { LuArrowDownRight } from 'react-icons/lu';

const Header = () => {
  return (
    <header className="h-1/4 w-full flex items-end justify-start gap-1.5 bg-primary sm:h-1/3">
      <p className="text-7xl font-bold sm:text-9xl text-light">Portfolio</p>
      <LuArrowDownRight className="text-3xl text-light sm:text-5xl" />
    </header>
  );
};

export default Header;
