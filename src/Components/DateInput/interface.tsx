import { MouseEvent } from "react";
import { OnClickFunctionType } from "../../utils/commonTypes";

export interface Props {
  initialValue?: string;
  onChange: (name: string, data: string) => void;
}

export type IncOrDecType = (
  x: "year" | "month",
  y: "inc" | "dec"
) => OnClickFunctionType;

export type OnSelectDateType = (date: number) => OnClickFunctionType;

export interface DoubleChevronProps {
  moveToRight?: boolean;
}

export interface DateDisplayProps {
  selected?: boolean;
}
