import Image from "next/image";

import Icon from "@/components/ui/Icon";
import HeaderCarousel from "@/components/layouts/header/HeaderCarousel";

function Banner() {
  return (
    <div className="mt-47 lg:mt-55 container flex flex-col items-center justify-center mx-auto">
      <div className="w-fit text-center flex items-center mx-auto gap-x-2.5 rounded-[7px] bg-[#ffffff18] px-1 h-12 lg:h-15.25 leading-12 lg:leading-15.25">
        <p className="text-[16px] lg:text-[28px] font-medium text-white">
          با آبعلی خاطره هات رو به یادماندنی کن
        </p>
        <Image
          src="/img/banner-slogan.webp"
          alt="banner-slogan"
          width={100}
          height={100}
          loading="eager"
          className="size-9.25"
        />
      </div>
      <div className="w-fit mx-auto text-center relative">
        <p className="text-[60px] lg:text-[120px] font-bold lg:font-black text-white">
          دوغـت رو بنــــوش!
        </p>
        <div className="mt-5 items-center justify-center hidden lg:flex absolute right-1/4">
          <p className="text-white">از اینجا بازش کن!</p>
          <Icon
            name="bentArrow"
            className="w-24 h-10.25 fill-white stroke-none"
          />
        </div>
      </div>
      <HeaderCarousel />
    </div>
  );
}

export default Banner;
