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
  border: 1px solid
    ${(props) =>
      props.clickedStyleChange
        ? "var(--primary-color)"
        : "var(--border-color)"};
`;

export const DropDownDisplay = styled.p`
  font-size: 1rem;
  padding: 0.75rem;

  & :hover {
    background-color: var(--primary-color);
    color: white;
  }
`;
