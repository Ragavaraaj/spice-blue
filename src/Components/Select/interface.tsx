import { MouseEvent } from "react";
import { FetchDropDownDataType_Results_Data } from "../../ApiResponseType";

export interface Props {
  initialValue?: string;
  dropDownData: FetchDropDownDataType_Results_Data[];
  onChange: (name: string, data: string) => void;
}

export type localOnClickDivType = (event: MouseEvent<HTMLElement>) => void;

export type localOnSelectType = (
  data: FetchDropDownDataType_Results_Data
) => (event: MouseEvent<HTMLElement>) => void;

export interface DisplayProps {
  clickedStyleChange: boolean;
}
