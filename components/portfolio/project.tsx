import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FcReading } from "react-icons/fc";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";


import { useState } from "react";
import ProjectDetails from './projectDetails';

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
          href={data?.link ? data.link : `/protfolio/${data.name}`}
          className="px-5 py-1 rounded-md bg-primary text-light"
        >
          Visit
        </Link>
      </div>
      {more && <ProjectDetails data={data} setMore={setMore} /> }
    </div>
  );
};

export default Project;
