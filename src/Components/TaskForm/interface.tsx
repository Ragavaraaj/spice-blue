import { AddNewTaskPayLoadType } from "../../ApiResponseType";

export interface Props {
  onDelete: () => void;
  onSubmit: (x: AddNewTaskPayLoadType) => void;
  onCancel: () => void;
  initialValue?: AddNewTaskPayLoadType;
  assignedUserName: string;
}

export type OnChangeOfFormDataType = (
  name: string,
  data: string | number
) => void;
