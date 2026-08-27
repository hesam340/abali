import Image from "next/image";

function Originality() {
  return (
    <div className="container mt-20 px-4 mx-auto flex flex-col items-center max-lg:gap-y-10 lg:flex-row-reverse lg:gap-x-12">
      <div className="flex flex-col items-center w-[50%]">
        <h2 className="text-[#0E0E0E] text-[26px] xl:text-[50px] font-bold xl:font-black whitespace-nowrap">
          دوغ آبعلی، همون همیشگی!
        </h2>
        <p className="mt-7 text-[#0E0E0E] text-[16px] xl:text-[24px] font-light max-lg:text-center">
          با افتخار شرکت مینو می تواند ادعا کند که کیفیت دوغ آبعلی اندکی تغییر
          نسبت به گذشته نداشته است.
        </p>
        <div className="mt-10 *:w-30 *:xl:w-67.5 *:h-11 *:xl:h-20 *:leading-11 *:xl:leading-20 *:text-[16px] *:xl:text-[24px] *:font-bold *:xl:font-extrabold flex items-center justify-center gap-x-8 lg:gap-x-18 *:rounded-[19px] *:cursor-pointer">
          <button className="bg-(--color-primary) text-white">ثبت سفارش</button>
          <button className="bg-[#4383C426] text-(--color-primary)">
            دربـــاره مــا
          </button>
        </div>
      </div>
      <div className="relative max-lg:px-5 max-lg:mt-7">
        <Image
          src="/img/originality-image.webp"
          width={1000}
          height={1000}
          className="w-79.5 lg:w-100 xl:w-130 xl:translate-x-4"
          alt="originality"
        />
        <div className="absolute -top-2 left-2 lg:-left-6.5 xl:-left-3.5 w-21.5 lg:w-30 xl:w-38 h-14 lg:h-17 xl:h-22 rounded-[18px] xl:rounded-br-[22px] bg-(--color-primary) text-white flex flex-col justify-center items-center xl:leading-8 xl:pt-2">
          <span className="text-[18px] lg:text-[22px] xl:text-[48px] font-black">
            ۱۰۰٪
          </span>
          <span className="text-[14px] lg:text-[16px] xl:text-[22px] font-medium">
            با اطمینان
          </span>
        </div>
      </div>
    </div>
  );
}

export default Originality;
