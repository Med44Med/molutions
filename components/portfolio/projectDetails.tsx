import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaDesktop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import { FcAndroidOs } from "react-icons/fc";
import { LuArrowUpRight } from "react-icons/lu";

const ProjectDetails = ({ data,setMore }) => {
  return (
    <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center">
      <div
        className="fixed top-0 left-0 h-full w-full bg-shadow z-0"
        onClick={() => setMore(false)}
      ></div>
      <div className="bg-surface w-4/5 h-4/5 rounded-xl z-10 shadow-2xl appear p-4 flex flex-col gap-3 md:flex-row">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="w-full flex-1/2 rounded-md md:flex-7/12 shadow-2xl"
        >
          {data.image.map((img, index) => (
            <SwiperSlide key={index} className="h-full w-full">
              <Image
                src={img}
                alt={data.name}
                width={200}
                height={300}
                className=" h-full w-full rounded-2xl object-fit"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex-5/12 flex flex-col justify-start items-start gap-2">
          <h1 className="text-xl font-semibold md:text-3xl">{data.name}</h1>
          <div className="flex justify-center items-center gap-2">
            {data.platform.includes("web") && (
              <div className="px-3 py-1 bg-background rounded-xl flex items-end justify-center gap-2 ">
                <FaDesktop className="text-xs md:text-lg"/>
                <FaTabletAlt className="text-xs md:text-lg"/>
                <FaMobileAlt className="text-xs md:text-lg"/>
                <h6 className="text-xs font-medium">Website</h6>
              </div>
            )}
            {data.platform.includes("mobile") && (
              <div className="px-3 py-1 bg-background rounded-xl flex items-center justify-center gap-2 ">
                <FcAndroidOs />
                <h6 className="text-xs font-medium">Mobile app</h6>
              </div>
            )}
          </div>
          <h1 className="text-xs text-secondText font-medium">
            {data.content}
          </h1>
          <Link
            href={`/portfolio/${data.name}`}
            className="mt-auto ml-auto px-5 py-1 bg-primary rounded-md text-light cursor-pointer flex justify-center items-center gap-2 hover:gap-3"
          >
            <h1>Visit</h1>
            <LuArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
