import { ReactNode } from "react";

export type TChildren = { children: ReactNode };

//components
//ui

export type TButton = {
  isLoading?: boolean;
  title: string;
  width: string;
  height: string;
  color: string;
  fontSize: string;
  type: "button" | "submit" | "reset" | undefined;
};
