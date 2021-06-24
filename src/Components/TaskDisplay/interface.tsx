import { AddNewTaskResponse_Results } from "../../ApiResponseType";

export interface Props extends StyledContentProp {
  onComplete: (x: number) => void;
  onEdit: (x: number) => void;
  // imgLink: string;
  // date: string;
  // isCompleted: boolean;
  // assignTo: string;
  data: AddNewTaskResponse_Results;
  taskIndex: number;
}

export interface StyledContentProp {
  roundedCorners: boolean;
}

export interface StyledLabelProp {
  isCompleted: boolean;
}
