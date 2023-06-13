import React from "react";
import { AppBackgroundImage } from "./components/background_image/BackgroundImageStyles";
import { images } from "./constants/images";
import styled from "styled-components";
import { Column } from "./styles/layout/Flex";
import TitleIconListTile from "./components/title_icon/TitleIconListTile";
import CreateTodo from "./components/create_todo_input/CreateTodo";
export default function App() {
  return (
    <>
      <img
        src={images.bgDesktopLight}
        style={{ height: "18.75rem", position: "absolute", width: "100%" }}
      />
      <MainContainer>
        <TodoSection>
          <TitleIconListTile />
          <CreateTodo />
        </TodoSection>
      </MainContainer>
    </>
  );
}
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
