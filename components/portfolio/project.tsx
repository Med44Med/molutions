import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FcReading } from "react-icons/fc";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FcAndroidOs } from "react-icons/fc";
import { FaMobileAlt,FaTabletAlt,FaDesktop  } from "react-icons/fa";
import { LuArrowUpRight } from 'react-icons/lu';


import { useState } from "react";

const Project = ({ data }) => {
  const [liked, setLiked] = useState(false);
  const [more, setMore] = useState(false);

  return (
    <div className="w-full rounded-2xl bg-surface sm:w-2xs flex flex-col justify-start items-center gap-2 p-3 shadow">
      <Image
        src={data.image[0]}
        alt={data.name}
        width={200}
        height={300}
        className=" h-2/3 w-full rounded-2xl object-fill"
      />
      <div className="flex justify-center items-center gap-2 self-end pr-2">
        <div className="flex justify-center items-center gap-1">
          <FcReading />
          <h1>{data.views}</h1>
        </div>
        <div className="flex justify-center items-center gap-1">
          {liked ? (
            <FcLike onClick={() => setLiked(!liked)} />
          ) : (
            <FcLikePlaceholder onClick={() => setLiked(!liked)} />
          )}
          <h1>{data.likes}</h1>
        </div>
      </div>
      <h1 className="w-full text-left text-xl text-foreground font-semibold text-ellipsis">
        {data.name}
      </h1>
      <h1 className="w-full text-left text-sm text-foreground font-normal line-clamp-1">
        {data.content}
      </h1>
      <div className="mt-auto ml-auto flex justify-center items-center gap-2">
        <div
          onClick={() => setMore(true)}
          className=" px-5 py-1 rounded-md bg-primary text-light cursor-pointer"
        >
          More
        </div>
        <Link
          href={`/protfolio/${data.name}`}
          className="px-5 py-1 rounded-md bg-primary text-light"
        >
          Visit
        </Link>
      </div>
      {more && (
        <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center">
          <div
            className="fixed top-0 left-0 h-full w-full bg-shadow z-0"
            onClick={() => setMore(false)}
          ></div>
          <div className="bg-surface w-4/5 h-4/5 rounded-xl z-10 shadow-2xl appear p-4 flex gap-3">
            <div className="flex-7/12 rounded-md">
              <Image
                src={data.image[0]}
                alt={data.name}
                width={200}
                height={300}
                className=" h-full w-full rounded-2xl object-fit"
              />
            </div>
            <div className="flex-5/12 flex flex-col justify-start items-start gap-2">
              <h1 className="text-3xl font-semibold">{data.name}</h1>
              <div className='flex justify-center items-center gap-2'>
                {data.platform.includes("web") && <div className='px-5 py-1 bg-background rounded-xl flex items-end justify-center gap-2 '><FaDesktop /><FaTabletAlt /><FaMobileAlt/><h6 className='text-xs font-medium'>Website</h6></div>}
                {data.platform.includes("mobile") && <div className='px-5 py-1 bg-background rounded-xl flex items-center justify-center gap-2 '><FcAndroidOs /><h6 className='text-xs font-medium'>Mobile app</h6></div>}
              </div>
              <h1 className="text-xs text-secondText font-medium">{data.content}</h1>
              <Link  href={`/portfolio/${data.name}`} className='mt-auto ml-auto px-5 py-1 bg-primary rounded-md text-light cursor-pointer flex justify-center items-center gap-2 hover:gap-3'><h1>Visit</h1><LuArrowUpRight /></Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
