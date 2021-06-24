import styled from "styled-components";
import { StyledTitleProp } from "./interface";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
`;

export const Content = styled.div`
  min-width: 30rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

export const Divider = styled.span`
  border-left: 1px solid var(--border-color);
  flex-grow: 0;
`;

export const Title = styled.div<StyledTitleProp>`
  grid-column: 1/3;
  border: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  border-radius: ${(props) =>
    props.allRoundedCorners ? "5px" : "5px 5px 0 0"};

  & p {
    font-size: 1rem;
    margin: calc(0.25rem + 5px) 0.7rem;
    text-transform: uppercase;
    flex-grow: 1;
  }
  & button {
    all: unset;
    font-size: 1.5rem;
    margin: 0.5rem;
    font-family: "material icons";
    flex-grow: 0;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 0.8rem 1.4rem 0.8rem;
  gap: 1.5rem 0.7rem;
  background-color: rgb(237, 247, 252);
  border: 1px solid var(--border-color);
  border-radius: 0 0 5px 5px;
  border-top: 0;
`;

export const ButtonGroup = styled.div`
  grid-column: 1/3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-left: auto;

  & :first-child {
    margin-left: auto;
  }
`;

export const CancelButton = styled.button`
  all: unset;
  padding: 0.5rem 1.75rem;
  text-transform: capitalize;
  border-radius: 3px;

  &:hover {
    background-color: var(--border-color);
  }
`;

export const SaveButton = styled.button`
  all: unset;
  padding: 0.5rem 1.75rem;
  background-color: var(--primary-color);
  text-transform: capitalize;
  color: white;
  text-align: center;
  border-radius: 3px;

  &:hover {
    background-color: #006800;
  }
`;
