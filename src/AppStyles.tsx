import styled from "styled-components";
import { Column } from "./styles/layout/Flex";

const MainContainer = styled(Column)`
  width: 100vw;
  height: 100vh;
  justify-content: start;
`;

const TodoSection = styled(Column)`
  position: relative;
  padding-top: 70px;
  align-items: start;
  justify-content: start;
  width: 540px;
  height: 740px;
  z-index: 1;
  // background: #ff9999;
`;

export { MainContainer, TodoSection };
