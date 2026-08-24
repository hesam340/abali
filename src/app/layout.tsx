import type { Metadata } from "next";

import { yekan } from "@/core/utils/fonts";
import { TChildren } from "@/core/types/types";

import "./globals.css";

export const metadata: Metadata = {
  title: "دوغ آبعلی",
  description: "عرضه دوغ در طعم های متنوع",
  icons: {
    icon: "/svg/img-logo",
  },
};

export default function RootLayout({ children }: TChildren) {
  return (
    <html lang="fa" dir="rtl" data-scroll-behavior="smooth">
      <body className={`${yekan.className}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
