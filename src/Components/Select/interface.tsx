import { FetchDropDownDataType_Results_Data } from "../../ApiResponseType";
import { OnClickFunctionType } from "../../utils/commonTypes";

export interface Props {
  initialValue?: string;
  dropDownData: FetchDropDownDataType_Results_Data[];
  onChange: (name: string, data: string) => void;
}

export type localOnSelectType = (
  data: FetchDropDownDataType_Results_Data
) => OnClickFunctionType;

export interface DisplayProps {
  clickedStyleChange: boolean;
}
