import styled from "styled-components";
import { StyledTitleProp } from "./interface";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 15vw 1fr;
  grid-template-rows: 10vh 1fr;
  gap: 0;
`;

export const SidePanel = styled.div`
  grid-row: 1/3;
  height: 100vh;
  background-color: rgb(50, 62, 77);
`;

export const NavBar = styled.div`
  background-color: white;
  filter: drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.2));
`;

export const Content = styled.div`
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin: 4rem 1rem;
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
