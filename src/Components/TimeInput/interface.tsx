import { MouseEvent } from "react";

interface InitialValueInterface {
  hours: string;
  mins: string;
  amOrPM: string;
}

export interface Props {
  initialValue: InitialValueInterface;
  onChange: (name: string, data: number) => void;
}

export type localOnClickType = (
  x: "hours" | "minutes" | "amOrPm",
  y: string
) => (event: MouseEvent<HTMLElement>) => void;

export type localOnClickDivType = (event: MouseEvent<HTMLElement>) => void;

export interface DropDownDisplayProps {
  selected: boolean;
}
