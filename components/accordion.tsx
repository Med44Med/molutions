"use client";

import { createContext, useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const AccordionContext = createContext();

const Accordion = ({ className, children, defaultIndex }) => {
  const [openIndex, setOpenIndex] = useState(defaultIndex | null);
  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <AccordionContext.Provider value={{ openIndex, toggleItem }}>
      <div className={`${className}`}>{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.Item = function Item({ children, title, index, className }) {
  const { openIndex, toggleItem } = useContext(AccordionContext);
  const selected = openIndex === index;

  return (
    <div className="flex flex-col ">
      <div
        onClick={() => toggleItem(index)}
        className="bg-primary px-2 py-2 w-full flex justify-between items-center"
        >
        <h1 className='text-light'>{title}</h1>
        <FaChevronDown className={`text-light ${selected && "rotate-180"} `} />
      </div>
      <div className={`overflow-hidden ${selected ? "max-h-96" : "max-h-0"}`} style={{transition:'all .5s ease-out'}} >
        <div className={` ${className} w-full h-fit px-2 py-2`}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
