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
      <TimeInput onChange={onChangeOfFormData} />
      <Select
        onChange={onChangeOfFormData}
        dropDownData={dropDownData}
        initialValue={props.assignedUserName}
      />

      <ButtonGroup>
        {(props.initialValue?.assigned_user ||
          state.deleteTask === "loading") && (
          <DeleteButton
            onClick={localOnClickDelete}
            disabled={state.deleteTask === "loading"}
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
