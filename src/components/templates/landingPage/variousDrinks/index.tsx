import Image from "next/image";

import { productsCarousel } from "@/core/constants/landing";

function VariousDrinks() {
  return (
    <section className="relative w-full px-4 mt-10 lg:mt-15 bg-[#F8F8F8] pt-17 lg:pt-35 pb-11 lg:pb-20 z-0">
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
        <div className="mt-30 mb-10 flex w-full flex-col items-center justify-center gap-y-13 lg:flex-row lg:gap-x-4 xl:gap-x-24">
          {productsCarousel.map((product) => (
            <div
              key={product.id}
              className="group relative h-38 w-45 shrink-0 lg:h-72 lg:w-79.25"
            >
              <div className="absolute inset-0 rounded-[50px] bg-[#4383C426] group-hover:bg-(--color-primary)" />
              <button className="absolute bottom-5 left-5 hidden group-hover:flex hover:cursor-pointer bg-white size-17.5 leading-17.5 items-center justify-center rounded-[25px]">
                <Image
                  src="/svg/cart.svg"
                  width={50}
                  height={50}
                  className="size-7"
                  alt="cart-icon"
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
                className={`absolute left-1/2 z-20 w-full -translate-x-1/2 transition-transform duration-500 ease-out
                  ${
                    product.id === 0 || product.id === 2
                      ? "rotate-18"
                      : "-rotate-18"
                  }
                  -top-8 xl:-top-14 group-hover:-translate-y-24
                `}
              />
              <div className="absolute inset-x-0 -bottom-12 lg:-bottom-24 z-30 h-12 lg:h-24 bg-[#F8F8F8]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VariousDrinks;
