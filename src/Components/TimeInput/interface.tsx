import { OnClickFunctionType } from "../../utils/commonTypes";

interface InitialValueInterface {
  hours: string;
  mins: string;
  amOrPm: string;
}

export interface Props {
  initialValue?: InitialValueInterface;
  onChange: (name: string, data: number) => void;
}

export type OnChangeOfTimeType = (
  x: "hours" | "minutes" | "amOrPm",
  y: string
) => OnClickFunctionType;

export interface DropDownDisplayProps {
  selected: boolean;
}
