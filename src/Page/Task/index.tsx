import React, { useEffect } from "react";
import { FC, useState } from "react";
import { TimeInput, TextField, DateInput, Select } from "../../Components";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { AddNewTaskPayLoadType } from "../../ApiResponseType";
import {
  Props,
  OnChangeOfFormDataType,
  OnSubmitType,
  GetTimeType,
  localOnClickType,
} from "./interface";
import {
  Container,
  Content,
  Title,
  Divider,
  Form,
  ButtonGroup,
  CancelButton,
  SaveButton,
} from "./styles";
import {
  fetchDropDownData,
  AccessTokenSelector,
  DropDownDataSelector,
} from "../../Redux/TaskSlice";

export const Task: FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(AccessTokenSelector);
  const dropDownData = useAppSelector(DropDownDataSelector);
  const [formData, setFormData] = useState<AddNewTaskPayLoadType>({});
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);

  const onChangeOfFormData: OnChangeOfFormDataType = (name, data) => {
    setFormData((prv) => ({ ...prv, [name]: data }));
  };

  const localOnSubmit: OnSubmitType = (event) => {
    event.preventDefault();
    const payLoad: AddNewTaskPayLoadType = {
      ...formData,
      time_zone: -new Date().getTimezoneOffset() * 60,
      is_completed: 0,
    };
    console.log(payLoad);
  };

  const getTime: GetTimeType = () => {
    const date = formData.task_date ? new Date(formData.task_date) : new Date();
    return {
      hours: (date.getHours() > 12
        ? date.getHours() - 12
        : date.getHours()
      ).toString(),
      mins: date.getMinutes().toString(),
      amOrPM: date.getHours() >= 12 ? "PM" : "AM",
    };
  };

  const localOnClick: localOnClickType = (event) => {
    event.preventDefault();
    setOpenDropDown((prv) => !prv);
  };

  const localOnClickCancel: localOnClickType = (event) => {
    event.preventDefault();
    setOpenDropDown(false);
  };

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchDropDownData());
    }
  }, [dispatch, accessToken]);

  return (
    <Container>
      <Content>
        <Title allRoundedCorners={!openDropDown}>
          <p>task {0}</p>
          <Divider />
          <button onClick={localOnClick}>add</button>
        </Title>
        {openDropDown ? (
          <Form onSubmit={localOnSubmit}>
            <TextField onChange={onChangeOfFormData} />
            <DateInput onChange={onChangeOfFormData} />
            <TimeInput onChange={onChangeOfFormData} initialValue={getTime()} />
            <Select onChange={onChangeOfFormData} dropDownData={dropDownData} />
            <ButtonGroup>
              <CancelButton onClick={localOnClickCancel}>cancel</CancelButton>
              <SaveButton type="submit">save</SaveButton>
            </ButtonGroup>
          </Form>
        ) : (
          ""
        )}
      </Content>
    </Container>
  );
};
