import type { Metadata } from "next";

import { TChildren } from "@/core/types/types";
import { bonyadeKoodakFaNum } from "@/core/utils/fonts";

import "./globals.css";
import Header from "@/components/layouts/header/Header";

export const metadata: Metadata = {
  title: "دوغ آبعلی",
  description: "عرضه دوغ در طعم های متنوع",
  icons: {
    icon: "/svg/img-logo.svg",
  },
};

export default function RootLayout({ children }: TChildren) {
  return (
    <html lang="fa" dir="rtl" data-scroll-behavior="smooth">
      <body className={`${bonyadeKoodakFaNum.className}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
