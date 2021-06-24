import styled from "styled-components";
import { StyledContentProp, StyledLabelProp } from "./interface";

export const Content = styled.div<StyledContentProp>`
  display: flex;
  padding: 0.5rem 1rem;
  background-color: white;
  border: 1px solid var(--border-color);
  border-top: 0;
  ${(props) => props.roundedCorners && "border-radius: 0 0 5px 5px;"}
  gap: 0.5rem;
  align-items: center;

  & img {
    width: 3rem;
    height: 3rem;
  }
`;

export const Label = styled.label<StyledLabelProp>`
  flex-grow: 1;
  text-align: left;
  color: ${(props) => (props.isCompleted ? "var(--primary-color)" : "red")};
`;

export const ButtonGroup = styled.div`
  flex-grow: 0;
  margin: auto;

  & button + button {
    margin-left: 0.5rem;
  }

  & button {
    all: unset;
    margin: auto;
    padding: 0.5rem;
    font-size: 1.5rem;
    font-family: "material icons";
    border-radius: 5px;
    flex-grow: 0;
  }

  & button:hover {
    background-color: var(--border-color);
  }

  & button[disabled] {
    background-color: var(--primary-color);
    color: white;
  }
`;
