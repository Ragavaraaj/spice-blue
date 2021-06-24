import styled from "styled-components";
import { DoubleChevronProps, DateDisplayProps } from "./interface";

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

  & > span,
  & > p {
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
  height: 13rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid var(--border-color);
  border-top: 0px;
`;

export const YearAndMonthSelector = styled.div`
  display: flex;
  align-items: center;

  & :first-child {
    margin-left: 0.4rem;
  }

  & :last-child {
    margin-right: 0.4rem;
  }

  & > p {
    flex-grow: 1;
    font-size: 1rem;
    text-align: center;
  }
`;

export const Chevron = styled.button`
  all: unset;
  font-size: 1rem;
  margin: 0.2rem;
  font-family: "material icons";
  flex-grow: 0;
`;

export const DoubleChevron = styled.button<DoubleChevronProps>`
  all: unset;
  width: 2rem;
  height: 1rem;
  font-size: 1rem;
  margin: 0.2rem;
  font-family: "material icons";
  flex-grow: 0;
  position: relative;

  & > span {
    position: absolute;
    top: 0;
    ${(props) => (props.moveToRight ? "right: 0;" : "left: 0;")}
  }
`;

export const DateGrid = styled.div`
  display: grid;
  margin-top: 0.2rem;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 0.2rem;
  margin: 0 0.4rem;
  font-size: 0.9rem;
  text-align: center;
`;

export const DateDisplay = styled.p<DateDisplayProps>`
  padding: 0.2rem;
  border-radius: 5px;

  ${(props) =>
    props.selected &&
    `background-color: var(--primary-color);
    color: white;`}

  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;
