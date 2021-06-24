import React, { FC, useState } from "react";
import { localOnChangeType, Props } from "./interface";
import { Container, TextInput } from "./styles";

export const TextField: FC<Props> = (props) => {
  const [description, setDescription] = useState<string>(
    props.initialValue ?? ""
  );

  const localOnChange: localOnChangeType = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const onBlur = () => {
    props.onChange("task_msg", description);
  };

  return (
    <Container>
      <label htmlFor="taskDescription">task description</label>
      <TextInput
        type="text"
        name="taskDescription"
        onChange={localOnChange}
        onBlur={onBlur}
        value={description}
      />
    </Container>
  );
};
