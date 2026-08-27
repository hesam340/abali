"use client";

import { useState } from "react";

import Texts from "@/components/templates/landingPage/comments/Texts";
import IranMap from "@/components/templates/landingPage/comments/IranMap";

function Comments() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="container mx-auto px-4 mt-25">
      <div className="flex flex-col items-center text-center">
        <p className="text-(--color-primary) bg-[#4383C426] w-43 h-11 lg:w-58.75 lg:h-13.75 leading-11 lg:leading-13.75 rounded-[10px] text-[18px] lg:text-[24px] font-bold">
          نظرات شما
        </p>
        <p className="mt-6 text-[#222628] text-[28px] lg:text-[48px] font-bold lg:font-extrabold whitespace-nowrap">
          آبعـلــی ، برای تمام اقوام ایران
        </p>
      </div>
      <div className="mt-8 flex flex-col items-center xl:justify-center xl:flex-row-reverse">
        <Texts activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <IranMap activeIndex={activeIndex} />
      </div>
    </section>
  );
}

export default Comments;
