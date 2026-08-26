"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { landingFeatures } from "@/core/constants/landing";

function ProductFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % landingFeatures.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section className="container mx-auto mt-15 flex flex-col items-start px-4 lg:mt-30 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex w-full flex-col lg:w-[40%]">
        <h3 className="w-fit rounded-[5px] bg-(--color-secondary) px-2 py-1 text-[20px] font-medium lg:text-[32px] lg:font-bold">
          ویژگی های دوغ آبعلی
        </h3>
        <div className="mt-7 grid">
          {landingFeatures.map((item, index) => (
            <div
              key={item.id}
              className={`col-start-1 row-start-1 transition-opacity duration-700 ease-in-out
                ${
                  activeIndex === index
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }
              `}
            >
              <h2 className="whitespace-nowrap text-[30px] font-bold text-(--color-primary) lg:text-[52px] lg:font-black">
                {item.title}
              </h2>
              <p className="mt-7 text-[16px] font-normal text-(--color-primary) lg:text-[24px]">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-lg:mt-15 flex w-full items-center justify-end gap-x-10 lg:w-[50%] xl:mr-6">
        <div className="relative">
          <div className="absolute top-1/2 left-0 z-0 size-70 -translate-y-1/2 rounded-full bg-(--color-primary) xl:size-120" />
          <div className="grid">
            {landingFeatures.map((item, index) => (
              <div
                key={item.id}
                className={`col-start-1 row-start-1 transition-opacity duration-700 ease-in-out
                  ${
                    activeIndex === index
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  }
                `}
              >
                <Image
                  src={item.image}
                  width={500}
                  height={1000}
                  alt={item.title}
                  className="relative z-10 max-xl:w-60 xl:ml-10 xl:w-100"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="ml-6 flex flex-col items-center space-y-4">
          {landingFeatures.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`نمایش ویژگی ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`w-1.5 cursor-pointer rounded-[7px] transition-all duration-500 lg:w-2
                ${
                  index === activeIndex
                    ? "h-14 bg-(--color-primary) lg:h-19"
                    : "h-7 bg-[#4483C440] lg:h-10"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductFeatures;
