import React from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
function Login() {
  return (
    <section className="relative">
      <div className="relative min-h-[calc(100vh-72px)]">
        <Image
          src="/images/home-background.jpg"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      <div className="flex justify-start items-center px-20">
        <div className="absolute flex flex-col space-y-8 inset-0  justify-center items-center md:items-start text-center md:text-start max-w-screen-sm  p-8 ">
          <Image
            src="/images/disney-logo.svg"
            width={300}
            height={150}
            objectFit="contain"
            priority={true}
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold ">
            + More than you’d ever imagine
          </h1>
          <p className=" text-gray-400 ">
            Enter your email to create or restart your subscription.
          </p>
          <form className="w-full ">
            <div className="flex items-center py-2 relative">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-200 mr-3  leading-tight focus:outline-none bg-gray-700 rounded p-[18px]"
                type="email"
                placeholder="Email"
              />
              <button className="bg-blue-600 uppercase  tracking-wide  py-4 px-6  rounded hover:bg-[#0485ee] absolute right-0 p-5 ">
                Continue
              </button>
            </div>
          </form>
          <p className=" text-gray-400 ">
            Get 12 months for the price of 10 when you sign up for an annual
            Disney+ subscription, compared to paying monthly.
          </p>
          <div
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("scroll-section").scrollIntoView();
            }}
            className="	"
          >
            <ChevronDownIcon className="text-gray-400 h-6 hover:text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
