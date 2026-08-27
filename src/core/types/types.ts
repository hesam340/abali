import { Dispatch, ReactNode, SetStateAction } from "react";

export type TChildren = { children: ReactNode };

//-----------------components
//------templates

export type TTexts = {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

export type TIranMap = Omit<TTexts, "setActiveIndex">;
