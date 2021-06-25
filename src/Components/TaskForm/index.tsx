import React, { FC, useState } from "react";
import { Props, OnChangeOfFormDataType } from "./interface";
import {
  ButtonGroup,
  CancelButton,
  Form,
  SaveButton,
  DeleteButton,
} from "./styles";
import { TextField, TimeInput, DateInput, Select } from "../";
import { AddNewTaskPayLoadType } from "../../ApiResponseType";
import { useAppSelector } from "../../utils/hooks";
import { DropDownDataSelector, StatusSelector } from "../../Redux/TaskSlice";
import {
  OnSubmitFunctionType,
  OnClickFunctionType,
} from "../../utils/commonTypes";

export const TaskForm: FC<Props> = (props) => {
  const state = useAppSelector(StatusSelector);
  const dropDownData = useAppSelector(DropDownDataSelector);
  const [formData, setFormData] = useState<AddNewTaskPayLoadType>(
    props.initialValue ?? {}
  );

  const onChangeOfFormData: OnChangeOfFormDataType = (name, data) => {
    setFormData((prv) => ({ ...prv, [name]: data }));
  };

  const localOnClickCancel: OnClickFunctionType = (event) => {
    event.preventDefault();
    props.onCancel();
  };

  const localOnClickDelete: OnClickFunctionType = (event) => {
    event.preventDefault();
    props.onDelete();
  };

  const localOnSubmit: OnSubmitFunctionType = (event) => {
    event.preventDefault();
    if (formData.task_msg && formData.assigned_user) {
      props.onSubmit(formData);
    } else {
      alert("Please Fill All the Fields");
    }
  };

  const getInitialTime = () => {
    if (props.initialValue?.task_time) {
      const hoursIn24 = props.initialValue.task_time / (60 * 60);
      const hoursIn12 =
        Math.trunc(hoursIn24) < 12
          ? Math.trunc(hoursIn24)
          : Math.trunc(hoursIn24) - 12;
      const hours =
        hoursIn12 === 0
          ? "12"
          : hoursIn12 < 10
          ? `0${hoursIn12}`
          : `${hoursIn12}`;
      const amOrPm = hoursIn24 < 12 ? "AM" : "PM";
      const mins = hoursIn24 === Math.round(hoursIn24) ? "00" : "30";
      console.log({ hoursIn24, hoursIn12, mins, amOrPm });

      return { hours, amOrPm, mins };
    }
  };

  return (
    <Form onSubmit={localOnSubmit}>
      <TextField
        onChange={onChangeOfFormData}
        initialValue={props.initialValue?.task_msg}
      />
      <DateInput
        onChange={onChangeOfFormData}
        initialValue={props.initialValue?.task_date}
      />
      <TimeInput
        onChange={onChangeOfFormData}
        initialValue={getInitialTime()}
      />
      <Select
        onChange={onChangeOfFormData}
        dropDownData={dropDownData}
        initialValue={
          dropDownData.find((x) => x.user_id === props.assignedUserId)?.name ??
          "Select"
        }
      />

      <ButtonGroup>
        {props.editForm && (
          <DeleteButton
            onClick={localOnClickDelete}
            disabled={
              state.deleteTask === "loading" ||
              state.editOrAddTask === "loading"
            }
          >
            {state.deleteTask === "idle" ? "delete" : "pending"}
          </DeleteButton>
        )}
        <CancelButton onClick={localOnClickCancel}>cancel</CancelButton>
        <SaveButton type="submit" disabled={state.editOrAddTask === "loading"}>
          {state.editOrAddTask === "idle" ? "save" : "saving..."}
        </SaveButton>
      </ButtonGroup>
    </Form>
  );
};
