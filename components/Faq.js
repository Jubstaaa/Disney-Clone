import React from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { faq } from "./Data";
import parse from "html-react-parser";
function Faq() {
  const faqToggle = (e) => {
    e.preventDefault();
    e.currentTarget.querySelector(".plus").classList.toggle("hidden");
    e.currentTarget.querySelector(".minus").classList.toggle("hidden");
    e.currentTarget.querySelector("#answer").classList.toggle("hidden");
  };
  return (
    <section className="relative md:p-20">
      <div className=" px-6 py-12 mx-auto">
        <h1 className="text-4xl font-semibold text-white  text-center">
          Frequently asked questions
        </h1>
        {faq.map((item, i) => (
          <div key={i} className="mt-8 space-y-8 lg:mt-12 ">
            <div
              className=" p-8 bg-gray-900 rounded-lg cursor-pointer z-50 "
              onClick={faqToggle}
            >
              <div className="flex items-center justify-between w-full ">
                <h1 className="font-semibold text-white ">{item.question}</h1>

                <span>
                  <PlusIcon className="plus h-6 " />
                  <MinusIcon className="minus h-6 hidden" />
                </span>
              </div>

              <div
                id="answer"
                className=" mt-6 text-xl text-gray-400 dark:text-gray-300 hidden"
              >
                {parse(item.answer)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
