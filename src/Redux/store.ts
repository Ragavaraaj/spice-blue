import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import taskReduce from "./TaskSlice";

export const store = configureStore({
  reducer: {
    task: taskReduce,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
