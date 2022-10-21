import React from "react";
import Image from "next/image";
import parse from "html-react-parser";
import { devices } from "./Data";

function Devices() {
  return (
    <section className="relative p-28  space-y-20">
      <div className="flex justify-center items-center px-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
          Available on your favourite devices
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center space-y-12 md:space-y-0 ">
        {devices.map((device, i) => (
          <div
            key={i}
            className="flex flex-col self-start text-center justify-center items-center w-100  min-h-[170px]  md:min-h-[210px] space-y-5"
          >
            <Image
              src={device.image}
              width={400}
              height={200}
              objectFit="cover"
            />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              {device.title}
            </h3>
            <p className="text-gray-400 text-xl">{parse(device.desc)}</p>
          </div>
        ))}
      </div>
      <div>
        <p className="text-gray-400 text text-center">
          *Disney+ currently does not support Arçelik, Beko and Vestel smart TVs
          with Linux OS.
        </p>
      </div>
    </section>
  );
}

export default Devices;
