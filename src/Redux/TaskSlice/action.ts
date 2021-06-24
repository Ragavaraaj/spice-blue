import {
  updateUserId,
  updateDropDownData,
  updateAccessToken,
  updateAllTask,
  updateStateEditOrAddTask,
  updateStateDeleteTask,
  updateStateCompleteTask,
} from ".";
import { getURL, ROUTE } from "../constants";
import { getData, postData, updateData, deleteData } from "../../utils/fetch";
import {
  FetchUserIdResponse,
  FetchAccessTokenResponse,
  FetchDropDownDataResponse,
  AddNewTaskResponse,
  AddNewTaskPayLoadType,
} from "../../ApiResponseType";
import { AppThunk } from "../store";
import { DeleteTaskResponse } from "../../ApiResponseType/deleteTaskType";
import { batch } from "react-redux";

export const fetchUserId = (): AppThunk => async (dispatch, getState) => {
  return await getData(getURL(ROUTE.toGetUserId), getState().task.accessToken)
    .then((json: FetchUserIdResponse) => {
      dispatch(updateUserId(json.results));
    })
    .catch((err) => {
      console.error(err);
      alert("Something Went Wrong !!");
    });
};

export const fetchAccessToken = (data: {
  email: string;
  password: string;
}): AppThunk => async (dispatch, getState) => {
  return await postData(getURL(ROUTE.toLogin), data)
    .then((json: FetchAccessTokenResponse) => {
      dispatch(updateAccessToken(json.results.token));
      dispatch(fetchUserId());
    })
    .catch((err) => {
      console.error(err);
      alert("Something Went Wrong !!");
    });
};

export const fetchDropDownData = (): AppThunk => async (dispatch, getState) => {
  return await getData(getURL(ROUTE.toGetDropDown), getState().task.accessToken)
    .then((json: FetchDropDownDataResponse) => {
      const data = json.results?.data?.filter(
        (x) => x.user_status === "accepted"
      );
      dispatch(updateDropDownData(data));
    })
    .catch((err) => {
      console.error(err);
      alert("Something Went Wrong !!");
    });
};

export const addNewTask = (payload: AddNewTaskPayLoadType): AppThunk => async (
  dispatch,
  getState
) => {
  dispatch(updateStateEditOrAddTask("loading"));
  return await postData(
    getURL(ROUTE.toGetAndUpdateTask),
    payload,
    getState().task.accessToken
  )
    .then((json: AddNewTaskResponse) => {
      batch(() => {
        dispatch(updateAllTask([...getState().task.allTask, json.results]));
        dispatch(updateStateEditOrAddTask("idle"));
      });
    })
    .catch((err) => {
      console.error(err);
      alert("Something Went Wrong !!");
    });
};

export const updateExistingTask = (
  taskId: string,
  payload: AddNewTaskPayLoadType,
  completeTask = false
): AppThunk => async (dispatch, getState) => {
  dispatch(
    !completeTask
      ? updateStateEditOrAddTask("loading")
      : updateStateCompleteTask("loading")
  );
  return await updateData(
    getURL(ROUTE.toGetAndUpdateTask),
    taskId,
    payload,
    getState().task.accessToken
  )
    .then((json: AddNewTaskResponse) => {
      const rest = getState().task.allTask.filter((x) => x.id !== taskId);
      batch(() => {
        dispatch(updateAllTask([...rest, json.results]));
        dispatch(
          !completeTask
            ? updateStateEditOrAddTask("idle")
            : updateStateCompleteTask("idle")
        );
      });
    })
    .catch((err) => {
      console.error(err);
      alert("Something Went Wrong !!");
    });
};

export const deleteExistingTask = (taskId: string): AppThunk => async (
  dispatch,
  getState
) => {
  dispatch(updateStateDeleteTask("loading"));
  return await deleteData(
    getURL(ROUTE.toGetAndUpdateTask),
    taskId,
    getState().task.accessToken
  )
    .then((json: DeleteTaskResponse) => {
      if (json.status === "success") {
        const rest = getState().task.allTask.filter((x) => x.id !== taskId);
        batch(() => {
          dispatch(updateStateDeleteTask("idle"));
          dispatch(updateAllTask(rest));
        });
      }
    })
    .catch((err) => {
      console.error(err);
      alert("Something Went Wrong !!");
    });
};
