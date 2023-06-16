import styled from "styled-components";
import { Column } from "./styles/layout/Flex";

const MainContainer = styled(Column)`
  width: 100vw;
  height: 100vh;
  justify-content: start;
`;

const TodoSection = styled(Column)`
  width: 33.75rem;
  height: 100%;
  position: relative;
  padding-top: 4.375rem;
  justify-content: start;
  z-index: 1;
  // background: #ff9999;
`;

export { MainContainer, TodoSection };
