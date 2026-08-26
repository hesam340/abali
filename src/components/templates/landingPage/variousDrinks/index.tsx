import { productsCarousel } from "@/core/constants/landing";
import Image from "next/image";

function VariousDrinks() {
  return (
    <section className="container relative w-full px-4 mx-auto mt-10 lg:mt-15 bg-[#F8F8F8] pt-17 lg:pt-35 pb-8 lg:pb-20 z-0">
      <div className="*:w-30 *:lg:w-41.25 *:h-11 *:lg:h-15.5 *:leading-11 *:lg:leading-15.5 *:text-[16px] *:lg:text-[24px] *:font-bold *:lg:font-extrabold flex items-center justify-center gap-x-8 lg:gap-x-18 *:rounded-[10px] *:cursor-pointer">
        <button className="bg-(--color-primary) text-white">گاز دار</button>
        <button className="bg-[#DDE7F0] text-(--color-primary)">
          بدون گاز
        </button>
      </div>
      <p className="mt-16 text-[#2F2F2F] text-[20px] lg:text-[48px] font-bold lg:font-extrabold text-center whitespace-nowrap">
        نوشیدنی ایرانی برای سلیقه های متفاوت
      </p>
      <div className="w-full mt-30 flex flex-col lg:flex-row items-center justify-center gap-y-6 lg:gap-x-4 xl:gap-x-24">
        {productsCarousel.map((i) => (
          <div
            key={i.id}
            className="bg-[#4383C426] relative shrink-0 rounded-[50px] group w-45 h-38 lg:w-79.25 lg:h-72 overflow-hidden"
          >
            <Image
              src={i.image}
              width={400}
              height={400}
              className={`${i.id === 0 || i.id === 2 ? "rotate-18" : "-rotate-18"} absolute -top-8 xl:-top-14 group-hover:-translate-y-32 transition-all duration-300 z-20`}
              alt={i.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default VariousDrinks;
