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
