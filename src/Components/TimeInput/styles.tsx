import styled from "styled-components";
import { DropDownDisplayProps } from "./interface";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > label {
    font-size: 1rem;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--border-color);
  position: relative;
  background-color: white;
  border-radius: 5px;

  & span,
  p {
    margin: 0.5rem;
    margin-right: calc(0.5rem / 2);
  }
`;

export const Icon = styled.span`
  font-family: "material icons";
  font-size: 1.5rem;
  flex-grow: 0;
`;

export const Display = styled.p`
  width: inherit;
  flex-grow: 1;
`;

export const DropDown = styled.div`
  background-color: white;
  position: absolute;
  top: calc(3rem - 7px);
  left: -1px;
  z-index: 2;
  min-width: calc(100% + 2px);
  padding: 0.5rem 0;
  width: 100%;
  height: 11rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.2rem;
  border: 1px solid var(--border-color);
  border-top: 0px;

  & > div {
    display: grid;
    grid-template-rows: repeat(60, 1fr);
    overflow-y: scroll;
    align-items: center;
  }
  & > div :hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

export const DropDownDisplay = styled.div<DropDownDisplayProps>`
  padding: ${(props) =>
    props.selected
      ? "calc(0.5rem - 1px) calc(0.6rem - 1px);"
      : "0.5rem 0.6rem"};
  justify-self: center;
  align-self: center;
  ${(props) => props.selected && "border: 1px solid var(--primary-color);"}
`;
