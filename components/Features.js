import React from "react";
import Image from "next/image";
import { features } from "./Data";

function Features() {
  return (
    <section className="relative p-20 flex flex-col justify-center items-center ">
      <div className="relative h-96 w-screen md:min-h-[calc(100vh-72px)]">
        <Image src="/images/bg-3.jpg" layout="fill" objectFit="contain" />
      </div>
      <div className="flex justify-center items-center px-20">
        <div className=" absolute flex flex-col space-y-8 top-0  justify-center items-center max-w-screen-sm mx-auto p-8 ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold ">
            Watch the way you want{" "}
          </h1>
          <p className=" text-gray-400 ">
            Enjoy the world’s greatest stories - anytime, anywhere.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center space-y-12 md:space-y-0 space-x-5 ">
        {features.map((feature, i) => (
          <div key={i}>
            <div className="  text-center justify-between items-center w-100  min-h-[170px] md:min-h-[210px] max-h-[220px] space-y-5 ">
              <Image
                src={feature.image}
                width={500}
                height={120}
                objectFit="cover"
              />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
