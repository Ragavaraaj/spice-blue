import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FetchUserIdResponse_Results,
  FetchDropDownDataType_Results_Data,
  AddNewTaskResponse_Results,
} from "../../ApiResponseType";
import { RootState } from "../store";

export interface CounterState {
  accessToken: string;
  userDetails: FetchUserIdResponse_Results | {};
  dropDownData: FetchDropDownDataType_Results_Data[];
  allTask: AddNewTaskResponse_Results[];
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  status: "idle",
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

    updateStatus: (
      state,
      action: PayloadAction<"idle" | "loading" | "failed">
    ) => {
      state.status = action.payload;
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
  },
});

export const {
  updateAccessToken,
  updateUserId,
  updateStatus,
  updateDropDownData,
  updateAllTask,
} = taskSlice.actions;

export * from "./action";

export const DropDownDataSelector = (state: RootState) =>
  state.task.dropDownData;
export const AccessTokenSelector = (state: RootState) => state.task.accessToken;
export const UserDetailsSelector = (state: RootState) => state.task.userDetails;
export const AllTaskSelector = (state: RootState) => state.task.allTask;

export default taskSlice.reducer;
