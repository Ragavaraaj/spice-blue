import { AddNewTaskPayLoadType } from "../../ApiResponseType";

export interface Props {
  editForm: boolean;
  onDelete: () => void;
  onSubmit: (x: AddNewTaskPayLoadType) => void;
  onCancel: () => void;
  initialValue?: AddNewTaskPayLoadType;
  assignedUserId: string;
}

export type OnChangeOfFormDataType = (
  name: string,
  data: string | number
) => void;
