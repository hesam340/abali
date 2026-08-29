"use client";

import Image from "next/image";
import { useState } from "react";

import Icon from "@/components/ui/Icon";
import { productsCarousel } from "@/core/constants/landing";

function HeaderCarousel() {
  const [items, setItems] = useState(productsCarousel);

  const switchProduct = (sideIndex: number) => {
    setItems((current) => {
      const next = [...current];

      [next[sideIndex], next[1]] = [next[1], next[sideIndex]];

      return next;
    });
  };

  return (
    <div className="relative bg-(--color-secondary) h-40 rounded-[35px] mt-35 w-[80%] hidden lg:block mx-auto">
      {items.map((product, index) => {
        const isCenter = index === 1;

        return (
          <div
            key={product.id}
            className={`absolute -top-28 transition-all duration-500 ease-in-out
          ${
            isCenter
              ? "left-1/2 z-30 -translate-x-1/2 scale-78"
              : index === 0
                ? "-left-18 z-20 scale-65"
                : "-right-18 z-20 scale-65"
          }
        `}
          >
            <Image
              src={product.image}
              alt={`${product.title} ${product.subtitle}`}
              width={400}
              height={500}
              loading="eager"
              className={`object-contain h-90 relative z-20 ${index === 0 ? "-rotate-18 w-40 left-30" : index === 1 ? "rotate-0 w-60" : "rotate-18 w-40 -left-30"}`}
            />
            {!isCenter && (
              <div
                className={`w-48 absolute top-1/2 flex -translate-y-1/3 items-center justify-center gap-x-2 rounded-full bg-white p-4 transition-all duration-300 hover:scale-105 z-10
              ${index === 0 ? "left-50 flex-row-reverse pl-10" : "right-50 pr-10"}
            `}
              >
                <span className="flex flex-col text-right leading-tight">
                  <span className="text-[18px] font-bold text-(--color-primary)">
                    {product.title}
                  </span>
                  <span className="text-[14px] text-(--color-primary) whitespace-nowrap">
                    {product.subtitle}
                  </span>
                </span>
                <button
                  onClick={() => switchProduct(index)}
                  className={`flex items-center justify-center absolute top-0 bg-[#F5F5F5] cursor-pointer ${index === 0 ? "right-0" : "left-0"}`}
                >
                  <Icon
                    name="arrow-header"
                    className={`${index === 0 ? "rotate-180" : ""} size-8 p-2 rounded-full fill-(--color-primary) stroke-none ring-6 ring-(--color-secondary)`}
                  />
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default HeaderCarousel;
