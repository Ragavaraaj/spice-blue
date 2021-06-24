import { FormEvent, MouseEvent } from "react";
import { IPage } from "../../AppInterface";
import { FetchDropDownDataType_Results_Data } from "../../ApiResponseType";

export interface Props {
  setPage: React.Dispatch<React.SetStateAction<IPage>>;
}

export interface StyledTitleProp {
  allRoundedCorners: boolean;
}

export interface TimeInputProp {
  hours: string;
  mins: string;
  amOrPM: string;
}

export type OnChangeOfFormDataType = (
  name: string,
  data: string | number
) => void;

export type OnSubmitType = (event: FormEvent<HTMLFormElement>) => void;

export type GetTimeType = () => TimeInputProp;

export type localOnClickType = (event: MouseEvent<HTMLElement>) => void;
