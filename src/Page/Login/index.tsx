import React, { FC, useState } from "react";
import { localOnChangeType, OnSubmitType, Props } from "./interface";
import { Content, Title, LoginButton, TextInput, Form } from "./styles";
import { useAppDispatch } from "../../utils/hooks";
import { fetchAccessToken } from "../../Redux/TaskSlice";

export const Login: FC<Props> = (props) => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<{ email: string; password: string }>(
    { email: "smithcheryl@yahoo.com", password: "12345678" }
  );

  const localOnSubmits: OnSubmitType = (event) => {
    event.preventDefault();
    dispatch(fetchAccessToken(formData));
    props.setPage({ currentPage: "Task" });
  };

  const localOnChange: localOnChangeType = (event) => {
    setFormData((prv) => ({
      ...prv,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Content>
      <Title>Welcome</Title>
      <Form onSubmit={localOnSubmits}>
        <TextInput
          type="email"
          name="email"
          onChange={localOnChange}
          value={formData.email}
        />
        <TextInput
          type="password"
          name="password"
          onChange={localOnChange}
          value={formData.password}
        />
        <LoginButton type="submit">Login </LoginButton>
      </Form>
    </Content>
  );
};
