import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/3;

  & > label {
    font-size: 1rem;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }
`;

export const TextInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 5px;

  &:focus-visible {
    outline: unset;
    border: 1px solid var(--primary-color);
  }
`;
