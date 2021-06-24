import { IPage } from "../../AppInterface";
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
