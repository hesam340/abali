"use client";

import Image from "next/image";
import { useState } from "react";

import { productsCarousel } from "@/core/constants/headerConstants";

import "swiper/css";

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
  <div className="relative bg-(--color-secondary) h-40 rounded-[35px] mt-30 w-[80%] hidden lg:block">
  {items.map((product, index) => {
    const isCenter = index === 1;

    return (
      <div
        key={product.id}
        className={`absolute -top-28 transition-all duration-500 ease-in-out
          ${isCenter
            ? "left-1/2 z-30 -translate-x-1/2 scale-100"
            : index === 0
              ? "left-[15%] z-20 -translate-x-1/2 scale-75"
              : "left-[85%] z-20 -translate-x-1/2 scale-75"
          }
        `}
      >
        <Image
          src={product.image}
          alt={`${product.title} ${product.subtitle}`}
          width={400}
          height={500}
          loading="eager"
          className="w-auto object-contain h-90 relative z-20"
        />
        {!isCenter && (
          <button
            type="button"
            onClick={() => switchProduct(index)}
            className={`absolute top-1/2 flex -translate-y-1/2 items-center justify-center gap-x-2 rounded-full bg-white p-4 transition-all duration-300 hover:scale-105 z-10
              ${index === 0 ? "left-20 flex-row-reverse pl-20 w-55" : "right-20 w-40"}
            `}
          >
            <span className="flex flex-col text-right leading-tight">
              <span className="text-[16px] font-bold text-(--color-primary)">
                {product.title}
              </span>

              <span className="text-[12px] text-(--color-primary) whitespace-nowrap">
                {product.subtitle}
              </span>
            </span>

            {/* Arrow */}
            <span className={`flex size-8 font-black items-center justify-center absolute top-0 rounded-full bg-[#F5F5F5] text-(--color-primary) ring-8 ring-(--color-secondary) ${index === 0 ? "right-0" : "left-0"}`}>
              {index === 0 ? "→" : "←"}
            </span>
          </button>
        )}
      </div>
    );
  })}
</div>
)}

export default HeaderCarousel;
