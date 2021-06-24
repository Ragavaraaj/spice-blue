import { MouseEvent } from "react";

export interface Props {
  initialValue?: string;
  onChange: (name: string, data: string) => void;
}

export type localOnClickDivType = (event: MouseEvent<HTMLElement>) => void;

export type IncOrDecType = (
  x: "year" | "month",
  y: "inc" | "dec"
) => (event: MouseEvent<HTMLElement>) => void;

export type OnSelectDateType = (
  date: number
) => (event: MouseEvent<HTMLElement>) => void;

export interface DoubleChevronProps {
  moveToRight?: boolean;
}

export interface DateDisplayProps {
  selected?: boolean;
}
