import React, { useEffect } from "react";
import { FC, useState } from "react";
import { TaskDisplay, TaskForm } from "../../Components";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { AddNewTaskPayLoadType } from "../../ApiResponseType";
import { Props } from "./interface";
import {
  Container,
  Content,
  Title,
  Divider,
  SidePanel,
  NavBar,
} from "./styles";
import {
  fetchDropDownData,
  AccessTokenSelector,
  AllTaskSelector,
  addNewTask,
  deleteExistingTask,
  updateExistingTask,
  StatusSelector,
  fetchAllTask,
} from "../../Redux/TaskSlice";
import { OnClickFunctionType } from "../../utils/commonTypes";

export const Task: FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(AccessTokenSelector);
  const allTask = useAppSelector(AllTaskSelector);
  const status = useAppSelector(StatusSelector);
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  const [editForm, setEditForm] = useState<boolean>(false);
  const [taskIndex, setTaskIndex] = useState<number>(-1);
  const [completionTaskIndex, setCompletionTaskIndex] = useState<number>(-1);

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
    setEditForm(false);
    taskIndex > -1 && setTaskIndex(-1);
  };

  const closeForm = () => {
    setOpenDropDown(false);
    setEditForm(false);
    taskIndex > -1 && setTaskIndex(-1);
  };

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchDropDownData());
      dispatch(fetchAllTask());
    }
  }, [dispatch, accessToken]);

  useEffect(() => {
    if (status.deleteTask === "loading" || status.editOrAddTask === "loading") {
      setOpenDropDown(true);
    } else {
      setOpenDropDown(false);
      setEditForm(false);
    }
    setTaskIndex(-1);
  }, [status]);

  const editTask = (taskId: number) => {
    setOpenDropDown(true);
    setEditForm(true);
    setTaskIndex(taskId);
  };

  const generatorInitialValue = (index?: number) => {
    return {
      assigned_user: allTask[index ?? taskIndex]?.user_id,
      task_date: allTask[index ?? taskIndex]?.task_date,
      task_msg: allTask[index ?? taskIndex]?.task_msg,
      task_time: allTask[index ?? taskIndex]?.task_time,
      time_zone: allTask[index ?? taskIndex]?.task_time,
      is_completed: allTask[index ?? taskIndex]?.is_completed,
    };
  };

  const completeTask = (index: number) => {
    let payLoad: AddNewTaskPayLoadType = {
      ...generatorInitialValue(index),
      is_completed: 1,
    };
    setCompletionTaskIndex(index);
    dispatch(updateExistingTask(allTask[index]?.id, payLoad, true));
  };

  const editData = (data: AddNewTaskPayLoadType) => {
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
      <SidePanel />
      <NavBar />
      <Content>
        <Title allRoundedCorners={!openDropDown && allTask.length === 0}>
          <p>task {0}</p>
          <Divider />
          <button onClick={localOnClick}>add</button>
        </Title>
        {openDropDown ? (
          <TaskForm
            editForm={editForm}
            onDelete={deleteTask}
            onSubmit={taskIndex > -1 ? editData : sendData}
            onCancel={closeForm}
            initialValue={generatorInitialValue()}
            assignedUserId={allTask[taskIndex]?.user_id}
          />
        ) : (
          allTask.map((x, i) => (
            <TaskDisplay
              data={x}
              loading={
                i === completionTaskIndex && status.completeTask === "loading"
              }
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
