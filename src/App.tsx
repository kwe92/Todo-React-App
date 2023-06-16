import React from "react";
import { images } from "./constants/images";
import styled from "styled-components";
import { Column } from "./styles/layout/Flex";
import TitleIconListTile from "./components/title_icon/TitleIconListTile";
import CreateTodo from "./components/create_todo_input/CreateTodo";
import BackgroundImage from "./components/app_background_image/BackGroundImage";
import { MainContainer, TodoSection } from "./AppStyles";
export default function App() {
  return (
    <>
      <BackgroundImage src={images.bgDesktopLight} />
      <MainContainer>
        <TodoSection>
          <TitleIconListTile />
          <CreateTodo />
        </TodoSection>
      </MainContainer>
    </>
  );
}
