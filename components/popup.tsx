import React from "react";

const Popup = ({style, setShow, children}) => {
  return (
    <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center">
      <div onClick={()=>setShow(false)} className='fixed top-0 left-0 h-full w-full bg-shadow z-0'></div>
      <div className={` ${style} z-10 shadow-2xl appear`}>
        {children}
      </div>
    </div>
  );
};

export default Popup;
