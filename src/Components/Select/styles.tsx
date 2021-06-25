import styled from "styled-components";
import { DisplayProps } from "./interface";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/3;
  position: relative;

  & > label {
    font-size: 1rem;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }
`;

export const DropDown = styled.div`
  background-color: white;
  position: absolute;
  top: 4rem;
  z-index: 2;
  width: 100%;
  min-height: 5rem;
  max-height: 10rem;
  border: 1px solid var(--border-color);
  border-top: 0px;
`;

export const Display = styled.p<DisplayProps>`
  font-size: 1rem;
  padding: 0.5rem;
  background-color: white;
  border-radius: 5px;
  position: relative;
  border: 1px solid
    ${(props) =>
      props.clickedStyleChange
        ? "var(--primary-color)"
        : "var(--border-color)"};

  &::after {
    content: "";
    position: absolute;
    top: 12px;
    right: 20px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid black;
  }

  &::before {
    content: "";
    position: absolute;
    top: 20px;
    right: 20px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid black;
  }
`;

export const DropDownDisplay = styled.p`
  font-size: 1rem;
  padding: 0.75rem;

  & :hover {
    background-color: var(--primary-color);
    color: white;
  }
`;
