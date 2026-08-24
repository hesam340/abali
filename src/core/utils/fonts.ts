import localFont from "next/font/local";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

export const bonyadeKoodakFaNum: NextFontWithVariable = localFont({
  src: [
    {
      path: "../../../public/fonts/BonyadeKoodakFaNum/BonyadeKoodakFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../../public/fonts/BonyadeKoodakFaNum/BonyadeKoodakFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/fonts/BonyadeKoodakFaNum/BonyadeKoodakFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/BonyadeKoodakFaNum/BonyadeKoodakFaNum-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/BonyadeKoodakFaNum/BonyadeKoodakFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/BonyadeKoodakFaNum/BonyadeKoodakFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-BonyadeKoodakFaNum",
});