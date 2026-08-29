import Image from "next/image";

import Icon from "@/components/ui/Icon";
import { productsCarousel } from "@/core/constants/landing";

function VariousDrinks() {
  return (
    <section className="relative w-full px-4 mt-10 lg:mt-15 bg-[#F8F8F8] pt-17 lg:pt-35 pb-11 lg:pb-30 z-0">
      <div className="container mx-auto">
        <div className="*:w-30 *:lg:w-41.25 *:h-11 *:lg:h-15.5 *:leading-11 *:lg:leading-15.5 *:text-[16px] *:lg:text-[24px] *:font-bold *:lg:font-extrabold flex items-center justify-center gap-x-8 lg:gap-x-18 *:rounded-[10px] *:cursor-pointer">
          <button className="bg-(--color-primary) text-white">گاز دار</button>
          <button className="bg-[#DDE7F0] text-(--color-primary)">
            بدون گاز
          </button>
        </div>
        <p className="mt-16 text-[#2F2F2F] text-[20px] lg:text-[48px] font-bold lg:font-extrabold text-center whitespace-nowrap">
          نوشیدنی ایرانی برای سلیقه های متفاوت
        </p>
        <div className="mt-30 mb-10 flex w-full flex-col items-center justify-center gap-y-17 lg:flex-row lg:gap-x-4 xl:gap-x-24">
          {productsCarousel.map((product) => (
            <div key={product.id} className="relative">
              <div className="group h-38 w-45 shrink-0 lg:h-72 lg:w-79.25">
                <div className="absolute inset-0 rounded-[50px] bg-[#4383C426] group-hover:bg-(--color-primary)" />
                <button className="absolute bottom-5 left-5 hidden group-hover:flex hover:cursor-pointer bg-white size-17.5 leading-17.5 items-center justify-center rounded-[25px] z-40">
                  <Icon
                    name="cart"
                    className="fill-(--color-primary) stroke-none size-7"
                  />
                </button>
                <p className="absolute bottom-5 right-5 hidden group-hover:flex bg-white w-45 h-17.5 leading-17.5 items-center justify-center rounded-[25px] text-[24px] font-bold text-(--color-primary) z-40">
                  دوغ {product.title}
                </p>
                <Image
                  src={product.image}
                  width={400}
                  height={400}
                  alt={product.title}
                  className={`absolute left-1/2 z-20 ${product.id === 0 ? "w-15 lg:w-25 top-2" : product.id === 1 ? "w-28 lg:w-53 top-2" : "w-23 lg:w-46"} -translate-x-1/2 transition-transform duration-500 ease-out group-hover:-translate-y-24
                `}
                />
              </div>
              <div className="absolute inset-x-0 -bottom-16 lg:-bottom-35 z-40 h-16 lg:h-35 bg-[#F8F8F8] pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VariousDrinks;
