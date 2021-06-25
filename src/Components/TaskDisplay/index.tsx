import React, { FC } from "react";
import { Props } from "./interface";
import { ButtonGroup, Content, Label } from "./styles";
import { OnClickFunctionType } from "../../utils/commonTypes";

const AVATAR_LINK =
  "http://www.gravatar.com/avatar/f2e9acdec817e24d2980d853e89385f5?default=https%3A%2F%2Fs3.sloovi.com%2Favatar-default-icon.png";

export const TaskDisplay: FC<Props> = (props) => {
  const localOnClickOfEdit: OnClickFunctionType = (event) => {
    event.preventDefault();
    props.onEdit(props.taskIndex);
  };

  const localOnClickOfDone: OnClickFunctionType = (event) => {
    event.preventDefault();
    props.onComplete(props.taskIndex);
  };

  return (
    <Content roundedCorners={props.roundedCorners}>
      <img
        src={"user_icon" in props.data ? props.data.user_icon : AVATAR_LINK}
        alt={"Avatar"}
      />
      <Label isCompleted={props.data.is_completed === 0 ? false : true}>
        {props.data.task_msg}
      </Label>
      <ButtonGroup>
        <button onClick={localOnClickOfEdit}>edit</button>
        <button
          onClick={localOnClickOfDone}
          disabled={props.data.is_completed === 0 ? false : true}
        >
          {props.loading ? "pending" : "done"}
        </button>
      </ButtonGroup>
    </Content>
  );
};
