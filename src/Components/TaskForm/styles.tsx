import styled from "styled-components";

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
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const CancelButton = styled.button`
  all: unset;
  padding: 0.7rem 1.75rem;
  text-transform: capitalize;
  border-radius: 3px;
  margin-left: auto;
  width: 3.5rem;

  &:hover {
    background-color: var(--border-color);
  }
`;

export const SaveButton = styled.button`
  all: unset;
  padding: 0.7rem 1.75rem;
  background-color: var(--primary-color);
  text-transform: capitalize;
  color: white;
  text-align: center;
  border-radius: 3px;
  width: 3.5rem;

  &:hover {
    background-color: #006800;
  }

  &[disabled] {
    background-color: #006800;
  }
`;

export const DeleteButton = styled.button`
  all: unset;
  font-size: 1.5rem;
  padding: 0.5rem 0.75rem;
  font-family: "material icons";
  justify-self: flex-start;
  flex-grow: 0;
  border-radius: 3px;

  &:hover {
    background-color: var(--border-color);
  }

  &[disabled] {
    background-color: var(--border-color);
  }
`;
