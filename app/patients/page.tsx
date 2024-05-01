"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slide from "../components/Slide";
import { useSlider } from "@/lib/SliderContext";

function Page() {
  const handleInput = () => {};
  const [open, setOpen] = useState(false);

  const { toggleSlider, sliderVisible } = useSlider();

  return (
    <div className="mt-12 relative">
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden bg-indigo-100 bg-transparent backdrop-blur-2xl min-w-72 py-3 px-2 flex items-center justify-between rounded-2xl shadow-xl">
        <div className="cursor-pointer hover:bg-indigo-300 rounded-xl p-1">
          <Image src={"/home.png"} alt="" width={22} height={22} />
        </div>
        <div className="cursor-pointer hover:bg-indigo-300 rounded-xl p-1">
          <Image src={"/calendar.png"} alt="" width={22} height={22} />
        </div>
        <div className="cursor-pointer hover:bg-indigo-300 rounded-xl p-1">
          <Image src={"/document.png"} alt="" width={22} height={22} />
        </div>
        <div className="cursor-pointer hover:bg-indigo-300 rounded-xl p-1">
          <Image src={"/user.png"} alt="" width={22} height={22} />
        </div>
      </div>

      {sliderVisible && <div className="fixed z-20"></div>}
      <div className="flex flex-col bg-indigo-500 rounded-b-lg">
        <div className="flex flex-row px-4 mt-6 md:mx-6 mb-4 items-center justify-between">
          <div className="flex flex-row gap-2">
            <div className="shadow-lg rounded-full">
              <Image
                className="rounded-full md:w-14"
                src={"/avatar.jpg"}
                alt="user-image"
                width={32}
                height={32}
              />
            </div>
            <div className="flex flex-col items-center ">
              <div className="font-thin text-white md:text-base text-xs">
                Hello, Welcome
              </div>
              <div className="font-medium flex items-center md:text-lg text-white text-sm">
                Saksham Tomar
              </div>
            </div>
          </div>
          <div className="rounded-lg  shadow-xl cursor-pointer border-2 p-1 border-indigo-400">
            <Image
              className="shadow-xl md:w-8"
              src={"/notification.png"}
              alt="notification"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="relative mx-auto mb-4 shadow-lg">
          <Image
            className="absolute translate-x-2 translate-y-2 shadow-lg"
            src={"/search.png"}
            alt="search"
            width={20}
            height={20}
          />
          <form onSubmit={handleInput}>
            <input
              className="placeholder:text-white pl-8 placeholder:font-light placeholder:text-xs rounded-lg min-w-80 p-2 bg-transparent border-[1px] text-white border-indigo-300 text-left text-sm font-medium default:outline-none focus:outline-indigo-300 focus:outline-0 md:min-w-[600px] lg:min-w-[1000px]"
              type="search"
              placeholder="Search Doctor..."
              id="SearchDoctor"
              name="SearchDoctor"
              list="serch"
            />
            <datalist id="serch">
              <option value="heart" />
              <option value="physio" />
              <option value="general" />
              <option value="brain" />
            </datalist>
          </form>
        </div>
      </div>
      <div>
        <div className="flex flex-row items-center mx-2 mt-6 justify-between">
          <p className="font-semibold text-lg md:text-2xl md:mx-6 lg:mx-12">
            Top Doctors
          </p>
          <div></div>
        </div>
      </div>
      <div className="mx-2 mt-4 flex flex-col gap-4 items-center">
        <Slide
          props={{
            name: "Dr.Berlin Elizerd",
            speciality: "heart",
            hospital: "SRMS",
          }}
        />
        <Slide
          props={{
            name: "Dr.Berlin Elizerd",
            speciality: "heart",
            hospital: "SRMS",
          }}
        />
      </div>
    </div>
  );
}

export default Page;
