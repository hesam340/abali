import Link from "next/link";
import Image from "next/image";

import { socialMedias } from "@/core/constants/footer";

function Footer() {
  return (
    <footer className="mt-18 xl:mt-65 bg-[#5CA3ED]">
      <div className="flex container mx-auto items-center lg:justify-center py-10 xl:py-18 px-4 relative">
        <div className="flex flex-col text-white *:flex *:flex-col *:lg:flex-row *:lg:justify-center *:lg:items-center *:text-[20px] *:xl:text-[40px] *:font-bold *:xl:font-black *:mt-4">
          <p>
            شماره تماس:
            <span className="text-[16px] xl:text-[24px] font-medium xl:font-bold max-lg:mt-2 lg:mr-6">
              ۰۲۱ - ۴۴۵۵۶۰۰۳ - ۵
            </span>
          </p>
          <p>
            پست الکترونیک:
            <span className="text-[16px] xl:text-[24px] font-medium xl:font-bold max-lg:mt-2 lg:mr-6">
              info@behnoushiran.com
            </span>
          </p>
        </div>
        <div className="absolute left-15 lg:left-20 xl:left-22 w-27 xl:w-43 bottom-12 z-20">
          <Image
            src="/img/footer-dough.webp"
            width={200}
            height={600}
            className="w-full"
            alt="family-dough"
          />
        </div>
        <div className="absolute bottom-14 xl:bottom-16 left-0 w-30 xl:w-38 h-5 xl:h-6.5 bg-linear-to-l from-[#00000070] to-[#00000000] z-10 blur-[6.1px]"></div>
      </div>
      <div className="bg-[#4483C4] w-full">
        <div className="container mx-auto px-4 py-8 xl:py-15">
          <div className="flex flex-col lg:flex-row items-center max-lg:gap-y-8 relative">
            <div className="flex flex-col items-center gap-y-4 lg:gap-y-6 lg:text-center w-full">
              <div className="flex gap-x-2.5">
                <div className="p-1 size-7 rounded-full bg-white">
                  <Image
                    src="/svg/location.svg"
                    width={50}
                    height={50}
                    className="w-full"
                    alt="location-icon"
                  />
                </div>
                <p className="text-white font-normal text-[12px] lg:text-[20px] whitespace-nowrap">
                  تهران، کیلومتر ۹ بزرگراه شهید لشگری، خیابان شهید پوری
                </p>
              </div>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                {socialMedias.map((i) => (
                  <Link key={i.id} href="#">
                    <Image
                      src={i.icon}
                      width={50}
                      height={50}
                      className="size-4 lg:size-5"
                      alt={i.alt}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <Image
              src="/svg/img-logo.svg"
              width={200}
              height={200}
              className="w-25 lg:absolute left-5"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <p className="w-full px-4 py-2 text-center bg-[#222628] text-white text-[12px] lg:text-[20px] font-normal whitespace-nowrap">
        کپی رایت این وب سایت برای هیچکس محفوظ نیست چون کانسپته :)
      </p>
    </footer>
  );
}

export default Footer;
