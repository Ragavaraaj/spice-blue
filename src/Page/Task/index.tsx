import React, { useEffect } from "react";
import { FC, useState } from "react";
import { TaskDisplay, TaskForm } from "../../Components";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { AddNewTaskPayLoadType } from "../../ApiResponseType";
import { Props } from "./interface";
import { Container, Content, Title, Divider } from "./styles";
import {
  fetchDropDownData,
  AccessTokenSelector,
  AllTaskSelector,
  addNewTask,
  deleteExistingTask,
  updateExistingTask,
  StatusSelector,
} from "../../Redux/TaskSlice";
import { OnClickFunctionType } from "../../utils/commonTypes";

export const Task: FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(AccessTokenSelector);
  const allTask = useAppSelector(AllTaskSelector);
  const state = useAppSelector(StatusSelector);
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  const [taskIndex, setTaskIndex] = useState<number>(-1);

  const sendData = (data: AddNewTaskPayLoadType) => {
    const payLoad: AddNewTaskPayLoadType = {
      ...data,
      time_zone: -new Date().getTimezoneOffset() * 60,
      is_completed: 0,
    };
    dispatch(addNewTask(payLoad));
  };

  const localOnClick: OnClickFunctionType = (event) => {
    event.preventDefault();
    setOpenDropDown(true);
    taskIndex > -1 && setTaskIndex(-1);
  };

  const closeForm = () => {
    setOpenDropDown(false);
    taskIndex > -1 && setTaskIndex(-1);
  };

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchDropDownData());
    }
  }, [dispatch, accessToken]);

  useEffect(() => {
    if (state.deleteTask === "loading" || state.editOrAddTask === "loading") {
      setOpenDropDown(true);
    } else {
      setOpenDropDown(false);
    }
    setTaskIndex(-1);
  }, [state]);

  const editTask = (taskId: number) => {
    setOpenDropDown(true);
    setTaskIndex(taskId);
  };

  const generatorInitialValue = (taskId?: number) => {
    return {
      assigned_user: allTask[taskId ?? taskIndex]?.user_id,
      task_date: allTask[taskId ?? taskIndex]?.task_date,
      task_msg: allTask[taskId ?? taskIndex]?.task_msg,
      task_time: allTask[taskId ?? taskIndex]?.task_time,
      time_zone: allTask[taskId ?? taskIndex]?.task_time,
      is_completed: allTask[taskId ?? taskIndex]?.is_completed,
    };
  };

  const completeTask = (taskId: number) => {
    let payLoad: AddNewTaskPayLoadType = {
      ...generatorInitialValue(taskId),
      is_completed: 1,
    };
    dispatch(updateExistingTask(allTask[taskId]?.id, payLoad));
  };

  const editData = (data: AddNewTaskPayLoadType) => {
    console.log(data);
    const payLoad: AddNewTaskPayLoadType = {
      ...data,
      time_zone: allTask[taskIndex].time_zone,
      is_completed: allTask[taskIndex].is_completed,
    };
    dispatch(updateExistingTask(allTask[taskIndex].id, payLoad));
  };

  const deleteTask = () => {
    dispatch(deleteExistingTask(allTask[taskIndex].id));
  };

  return (
    <Container>
      <Content>
        <Title allRoundedCorners={!openDropDown && allTask.length === 0}>
          <p>task {0}</p>
          <Divider />
          <button onClick={localOnClick}>add</button>
        </Title>
        {openDropDown ? (
          <TaskForm
            onDelete={deleteTask}
            onSubmit={taskIndex > -1 ? editData : sendData}
            onCancel={closeForm}
            initialValue={generatorInitialValue()}
            assignedUserName={allTask[taskIndex]?.user_name}
          />
        ) : (
          allTask.map((x, i) => (
            <TaskDisplay
              data={x}
              key={`key_${i}`}
              taskIndex={i}
              onEdit={editTask}
              onComplete={completeTask}
              roundedCorners={allTask.length === i + 1}
            />
          ))
        )}
      </Content>
    </Container>
  );
};
