import Link from "next/link";
import Image from "next/image";

import Icon from "@/components/ui/Icon";
import { subMenuTitles } from "@/core/constants/landing";

function Menu() {
  return (
    <menu className="mx-auto sticky top-0 left-0 z-100 container w-full">
      <div className="mx-8 md:mx-27.5">
        <div className="relative">
          <div className="bg-white h-22 flex items-center justify-between rounded-b-[25px] px-5 relative z-50">
            {" "}
            <button className="cursor-pointer">
              <Icon
                name="hamburger"
                className="fill-(--color-primary) stroke-none w-6.25"
              />
            </button>
            <Image
              src="/svg/img-logo.svg"
              loading="eager"
              width={200}
              height={200}
              className="absolute left-1/2 w-23.25 -translate-x-1/2"
              alt="logo"
            />
            <div className="flex gap-x-2">
              <Link
                href="#"
                className="bg-[#F0F0F0] rounded-[5px] size-7 lg:size-9.5 flex items-center justify-center"
              >
                <Icon
                  name="cart"
                  className="fill-(--color-primary) stroke-none size-5 lg:size-6"
                />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center max-lg:size-7 gap-x-2 rounded-[5px] bg-(--color-primary) text-white md:px-2"
              >
                <span className="hidden font-bold lg:block">
                  ثبت نام و ورود
                </span>
                <Icon
                  name="profile"
                  className="fill-white stroke-none size-4 lg:size-5"
                />
              </Link>
            </div>
          </div>
          <div className="bg-[#345B85] w-[95%] h-26.25 z-40 absolute bottom-[-52.5px] left-1/2 -translate-x-1/2 rounded-b-[25px]">
            <ul className="w-full flex justify-center items-center gap-x-4 lg:gap-x-14 absolute bottom-0 left-1/2 -translate-x-1/2 pb-2.5">
              {subMenuTitles.map((i) => (
                <li key={i.id}>
                  <Link
                    href="#"
                    className="text-white font-medium md:font-bold text-[12px] lg:text-[18px]"
                  >
                    {i.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </menu>
  );
}

export default Menu;
