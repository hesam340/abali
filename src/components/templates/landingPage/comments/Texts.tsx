import React from "react";
import Image from "next/image";

import { TTexts } from "@/core/types/types";
import { landingComments } from "@/core/constants/landing";

function Texts({ activeIndex, setActiveIndex = () => {} }: TTexts) {
  const handleNext = () => {
    setActiveIndex((prev: number) => (prev + 1) % landingComments.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + landingComments.length) % landingComments.length,
    );
  };
  return (
    <div className="grid relative xl:-translate-x-20">
      {landingComments.map((i, index) => (
        <React.Fragment key={i.id}>
          <div
            className={`col-start-1 row-start-1 transition-opacity duration-700 ease-in-out ${
              activeIndex === index
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <div className="w-78 h-100 relative bg-(--color-secondary) rounded-[15px] shadow-[0px_10px_0px_0px_#FDC93959]">
              <Image
                src={i.image}
                width={500}
                height={500}
                className="rounded-[15px] w-full h-[50%] absolute top-0 inset-x-0"
                alt="people-image"
              />
              <div className="absolute top-57 text-center flex flex-col items-center">
                <p className="text-[24px] font-bold tetx-[#0E0E0E]">
                  {i.title}
                </p>
                <p className="text-[16px] font-medium px-3 text-[#222628] mt-4">
                  {i.comment}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-19 left-1/2 -translate-x-1/2 *:size-13.75 flex gap-x-10 *:flex *:justify-center *:items-center *:bg-(--color-secondary) *:rounded-full">
            <button onClick={() => handleNext()}>
              <Image
                src="/svg/arrow-down.svg"
                width={50}
                height={50}
                className="w-3 h-4.5"
                alt="arrow"
              />
            </button>
            <button className="rotate-180" onClick={() => handlePrev()}>
              <Image
                src="/svg/arrow-down.svg"
                width={50}
                height={50}
                className="w-3 h-4.5"
                alt="arrow"
              />
            </button>
          </div>
        </React.Fragment>
      ))}
      <div className="flex items-center space-x-2 absolute bottom-5 left-1/2 -translate-x-1/2">
        {landingComments.map((i, index) => (
          <button
            key={i.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 cursor-pointer rounded-[7px] transition-all duration-500
                ${
                  index === activeIndex ? "w-14 bg-white" : "w-2 bg-[#FFFFFF8F]"
                }
              `}
          />
        ))}
      </div>
    </div>
  );
}

export default Texts;
