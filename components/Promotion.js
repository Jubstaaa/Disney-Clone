import React from "react";
import Image from "next/image";

function Promotion() {
  return (
    <section id="scroll-section" className="relative">
      <div className="relative min-h-[calc(100vh-72px)]">
        <Image src="/images/bg-2.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="flex justify-start items-center px-20">
        <div className="absolute flex flex-col space-y-8 inset-0  justify-start items-center md:items-start text-center md:text-start max-w-screen-sm  p-8  ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold ">
            Only on Disney+
          </h1>
          <p className=" text-gray-400 ">
            Exclusive movies, series and originals you won’t find on any other
            streaming service.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Promotion;
