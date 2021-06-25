import {
  AddNewTaskResponse_Results,
  FetchAllTaskResponse_Result,
} from "../../ApiResponseType";

export interface Props extends StyledContentProp {
  onComplete: (x: number) => void;
  onEdit: (x: number) => void;
  loading: boolean;
  data: AddNewTaskResponse_Results | FetchAllTaskResponse_Result;
  taskIndex: number;
}

export interface StyledContentProp {
  roundedCorners: boolean;
}

export interface StyledLabelProp {
  isCompleted: boolean;
}
