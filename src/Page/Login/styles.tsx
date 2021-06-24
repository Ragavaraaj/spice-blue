import styled from "styled-components";

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 300px;
`;

export const Title = styled.p`
  font-size: 2rem;
`;

export const LoginButton = styled.button`
  all: unset;
  padding: 0.5rem 1.75rem;
  background-color: var(--primary-color);
  text-transform: capitalize;
  border-radius: 5px;
  color: white;
  text-align: center;
  margin-left: auto;

  &:hover {
    background-color: #006800;
  }
`;

export const TextInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid var(--border-color);

  &:focus-visible {
    outline: unset;
    border: 1px solid var(--primary-color);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
