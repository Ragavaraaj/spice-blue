import React, { FC } from "react";
import { Props } from "./interface";
import { ButtonGroup, Content, Label } from "./styles";
import { OnClickFunctionType } from "../../utils/commonTypes";

export const TaskDisplay: FC<Props> = (props) => {
  const localOnClickOfEdit: OnClickFunctionType = (event) => {
    event.preventDefault();
    props.onEdit(props.taskIndex);
  };

  const localOnClickOfDone: OnClickFunctionType = (event) => {
    event.preventDefault();
    props.onComplete(props.taskIndex);
  };

  const formateDate = (): string => {
    const date = new Date(props.data.task_date);
    const stringMonth =
      date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
    const stringDate =
      date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    return `${stringDate}/${stringMonth}/${date.getFullYear()}`;
  };

  return (
    <Content roundedCorners={props.roundedCorners}>
      <img src={props.data.user_icon} alt={props.data.user_name} />
      <Label isCompleted={props.data.is_completed === 0 ? false : true}>
        {formateDate()}
      </Label>
      <ButtonGroup>
        <button onClick={localOnClickOfEdit}>edit</button>
        <button
          onClick={localOnClickOfDone}
          disabled={props.data.is_completed === 0 ? false : true}
        >
          done
        </button>
      </ButtonGroup>
    </Content>
  );
};
