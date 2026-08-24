import localFont from "next/font/local";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

export const yekan: NextFontWithVariable = localFont({
  src: [
    {
      path: "../../../public/fonts/yekan/YekanBakh-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/yekan/YekanBakh-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/yekan/YekanBakh-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/yekan/YekanBakh-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/fonts/yekan/YekanBakh-Fat.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-yekan",
});

export const vazir = localFont({
  src: [
    {
      path: "../../../public/fonts/vazir/Vazirmatn-Thin.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
});
