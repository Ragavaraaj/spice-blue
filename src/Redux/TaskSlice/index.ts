import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FetchUserIdResponse_Results,
  FetchDropDownDataType_Results_Data,
  AddNewTaskResponse_Results,
  FetchAllTaskResponse_Result,
} from "../../ApiResponseType";
import { RootState } from "../store";

type StatusType = "idle" | "loading" | "failed";
type AllTaskType = (AddNewTaskResponse_Results | FetchAllTaskResponse_Result)[];
export interface CounterState {
  accessToken: string;
  userDetails: FetchUserIdResponse_Results | {};
  dropDownData: FetchDropDownDataType_Results_Data[];
  allTask: AllTaskType;
  status: {
    editOrAddTask: StatusType;
    completeTask: StatusType;
    deleteTask: StatusType;
  };
}

const initialState: CounterState = {
  status: {
    editOrAddTask: "idle",
    deleteTask: "idle",
    completeTask: "idle",
  },
  accessToken: "",
  userDetails: {},
  allTask: [],
  dropDownData: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    updateAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },

    updateUserId: (
      state,
      action: PayloadAction<FetchUserIdResponse_Results>
    ) => {
      state.userDetails = action.payload;
    },

    updateDropDownData: (
      state,
      action: PayloadAction<FetchDropDownDataType_Results_Data[]>
    ) => {
      state.dropDownData = action.payload;
    },

    updateAllTask: (state, action: PayloadAction<AllTaskType>) => {
      state.allTask = action.payload;
    },

    updateStateEditOrAddTask: (state, action: PayloadAction<StatusType>) => {
      state.status = { ...state.status, editOrAddTask: action.payload };
    },

    updateStateDeleteTask: (state, action: PayloadAction<StatusType>) => {
      state.status = { ...state.status, deleteTask: action.payload };
    },

    updateStateCompleteTask: (state, action: PayloadAction<StatusType>) => {
      state.status = { ...state.status, completeTask: action.payload };
    },
  },
});

export const {
  updateAccessToken,
  updateUserId,
  updateDropDownData,
  updateAllTask,
  updateStateEditOrAddTask,
  updateStateDeleteTask,
  updateStateCompleteTask,
} = taskSlice.actions;

export * from "./action";

export const DropDownDataSelector = (state: RootState) =>
  state.task.dropDownData;
export const AccessTokenSelector = (state: RootState) => state.task.accessToken;
export const UserDetailsSelector = (state: RootState) => state.task.userDetails;
export const AllTaskSelector = (state: RootState) => state.task.allTask;
export const StatusSelector = (state: RootState) => state.task.status;

export default taskSlice.reducer;
