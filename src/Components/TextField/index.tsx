import React, { FC, useState } from "react";
import { Props } from "./interface";
import { Container, TextInput } from "./styles";
import { OnChangeFunctionType } from "../../utils/commonTypes";

export const TextField: FC<Props> = (props) => {
  const [description, setDescription] = useState<string>(
    props.initialValue ?? ""
  );

  const localOnChange: OnChangeFunctionType = (event) => {
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
