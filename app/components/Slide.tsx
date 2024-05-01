"use client";
import React from "react";
import Image from "next/image";
import { useSlider } from "@/lib/SliderContext";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Slide({ props }) {
  const router = useRouter();
  const bookAppointment = () => {
    router.push("/patients/Booking");
  };
  const { toggleSlider, sliderVisible } = useSlider();
  return (
    <div className="flex flex-row  gap-4 bg-gradient-to-tr from-indigo-50 to-indigo-200 min-w-80 items-center rounded-xl shadow-lg md:min-w-[700px] lg:min-w-[990px] justify-between pr-4">
      <div className="p-1 ml-2 rounded-lg shadow-md">
        <Image
          className="rounded-lg shadow-lg"
          src={"/avatar.jpg"}
          alt="doctor"
          height={50}
          width={50}
        />
      </div>
      <div className="flex flex-col ml-2 py-2 justify-center">
        <h1 className="mb-1 font-semibold text-lg">{props.name}</h1>
        <p className="font-light text-sm">
          {props.speciality} | {props.hospital}
        </p>
      </div>
      <Drawer>
        <DrawerTrigger>
          <button
            onClick={toggleSlider}
            className="ml-8 p-2 rounded-full bg-indigo-300 shadow-lg"
          >
            <Image src={"/phone.png"} alt="call" width={20} height={20} />
          </button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex flex-col mx-2 mt-2 items-center">
            <h1 className="font-bold text-xl mb-2 flex items-center">
              Know Your Doctor
            </h1>
            <Image
              className="shadow-xl mb-4 rounded-t-xl"
              src={"/avatar.jpg"}
              alt="doc"
              width={200}
              height={200}
            />
            <div className="flex flex-row gap-4 justify-between">
              <div className="flex flex-col font-semibold">
                <h2>{props.name}</h2>
                <p className="text-xs font-light">{`${props.speciality} | ${props.hospital}`}</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Image src={"/star.png"} alt="star" height={15} width={15} />
                <p className="text-xs font-semibold">
                  {`${props.stars} (${props.reviews} reviews)`}{" "}
                </p>
              </div>
            </div>
            <div className="mt-3 shadow-xl mb-4 flex flex-col bg-indigo-200 rounded-xl p-4 mr-auto ml-2">
              <h2 className="font-bold text-base">About Me</h2>
              <p className="text-xs font-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias beatae laborum quo a exercitationem voluptas suscipit
                consectetur ad, repellendus incidunt.
              </p>
            </div>
            <button
              className="px-2 py-1 bg-green-400 font-medium text-white rounded-lg
              mb-2 shadow-green-300 shadow-md"
              onClick={bookAppointment}
            >
              Book An Appointment
            </button>
            <DrawerClose>
              <div className="text-sm font-light bg-indigo-400 px-3 py-1 mb-2 text-white rounded-lg flex flex-row items-center gap-2">
                <Image src={"/cross.png"} alt="cross" height={10} width={10} />
                Close
              </div>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Slide;
