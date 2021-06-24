import {
  updateUserId,
  updateDropDownData,
  updateAccessToken,
  updateAllTask,
} from ".";
import { getURL, ROUTES } from "../constants";
import { getData, postData } from "../../utils/fetch";
import {
  FetchUserIdResponse,
  FetchAccessTokenResponse,
  FetchDropDownDataResponse,
  AddNewTaskResponse,
  AddNewTaskPayLoadType,
} from "../../ApiResponseType";
import { AppThunk } from "../store";

export const fetchUserId = (): AppThunk => async (dispatch, getState) => {
  return await getData(getURL(ROUTES.user), getState().task.accessToken).then(
    (json: FetchUserIdResponse) => {
      dispatch(updateUserId(json.results));
    }
  );
};

export const fetchAccessToken = (data: {
  email: string;
  password: string;
}): AppThunk => async (dispatch, getState) => {
  return await postData(getURL(ROUTES.login), data).then(
    (json: FetchAccessTokenResponse) => {
      console.log(json);
      dispatch(updateAccessToken(json.results.token));
      dispatch(fetchUserId());
    }
  );
};

export const fetchDropDownData = (): AppThunk => async (dispatch, getState) => {
  return await getData(
    getURL(ROUTES.dropDown),
    getState().task.accessToken
  ).then((json: FetchDropDownDataResponse) => {
    console.log(json);
    const data = json.results?.data?.filter(
      (x) => x.user_status === "accepted"
    );
    dispatch(updateDropDownData(data));
  });
};

export const addNewTask = (payload: AddNewTaskPayLoadType): AppThunk => async (
  dispatch,
  getState
) => {
  return await postData(
    getURL(ROUTES.dropDown),
    payload,
    getState().task.accessToken
  ).then((json: AddNewTaskResponse) => {
    console.log(json);
    dispatch(updateAllTask([...getState().task.allTask, json.results]));
  });
};
