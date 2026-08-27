import Image from "next/image";

import { TIranMap } from "@/core/types/types";
import { landingComments } from "@/core/constants/landing";

function IranMap({ activeIndex }: TIranMap) {
  return (
    <div className="relative w-87.5 lg:w-169 max-lg:mt-25 max-xl:mt-30 xl:translate-x-20">
      <Image
        src="/img/iran-map.webp"
        width={1000}
        height={1000}
        className="w-full relative z-10"
        alt="map"
      />
      <div className="bg-[#4383C41A] hidden absolute lg:block size-143 rounded-full top-0 left-1/2 -translate-x-1/2 z-0" />
      {landingComments.map((i, index) => (
        <div
          key={i.id}
          className={`${index === 0 ? "bottom-14 lg:bottom-21 right-27 lg:right-58" : index === 1 ? "top-8 lg:top-17 left-9 lg:left-17" : "top-19 left-36 lg:top-37 lg:left-68"} absolute z-10`}
        >
          <div
            className={`${activeIndex === index ? "opacity-100" : "pointer-events-none opacity-0"} ${index === 0 ? "size-20 lg:size-35" : index === 1 ? "size-14 lg:size-26" : "size-14 lg:size-24"} relative transition-all duration-500`}
          >
            <Image
              src={i.locationImage}
              width={500}
              height={500}
              className="w-full"
              alt="location"
            />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 text-[12px] lg:text-[15px] lg:font-bold">
              {i.locationName}
            </p>
            <div
              className={`size-14 lg:size-18 bg-(--color-secondary) absolute ${index === 0 ? "-top-11 right-3.5 lg:right-8" : index === 1 ? "-top-11 -left-5" : "-top-12 left-1"} rotate-45 border-6 lg:border-9 border-(--color-secondary) rounded-full rounded-br-none overflow-hidden`}
            >
              <Image
                src={i.image}
                width={100}
                height={100}
                className="-rotate-45 size-full rounded-full"
                alt="avatar"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IranMap;
