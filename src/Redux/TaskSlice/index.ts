import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FetchUserIdResponse_Results,
  FetchDropDownDataType_Results_Data,
  AddNewTaskResponse_Results,
} from "../../ApiResponseType";
import { RootState } from "../store";

type StatusType = "idle" | "loading" | "failed";
export interface CounterState {
  accessToken: string;
  userDetails: FetchUserIdResponse_Results | {};
  dropDownData: FetchDropDownDataType_Results_Data[];
  allTask: AddNewTaskResponse_Results[];
  status: {
    editOrAddTask: StatusType;
    deleteTask: StatusType;
  };
}

const initialState: CounterState = {
  status: {
    editOrAddTask: "idle",
    deleteTask: "idle",
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

    updateAllTask: (
      state,
      action: PayloadAction<AddNewTaskResponse_Results[]>
    ) => {
      state.allTask = action.payload;
    },

    updateStateEditOrAddTask: (state, action: PayloadAction<StatusType>) => {
      state.status = { ...state.status, editOrAddTask: action.payload };
    },

    updateStateDeleteTask: (state, action: PayloadAction<StatusType>) => {
      state.status = { ...state.status, deleteTask: action.payload };
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
} = taskSlice.actions;

export * from "./action";

export const DropDownDataSelector = (state: RootState) =>
  state.task.dropDownData;
export const AccessTokenSelector = (state: RootState) => state.task.accessToken;
export const UserDetailsSelector = (state: RootState) => state.task.userDetails;
export const AllTaskSelector = (state: RootState) => state.task.allTask;
export const StatusSelector = (state: RootState) => state.task.status;

export default taskSlice.reducer;
