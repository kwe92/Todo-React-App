import React from "react";
import { images } from "./constants/images";
import TitleIconListTile from "./components/title_icon/TitleIconListTile";
import CreateTodo from "./components/create_todo_input/CreateTodo";
import BackgroundImage from "./components/app_background_image/BackGroundImage";
import { MainContainer, TodoSection } from "./AppStyles";
import { styled } from "styled-components";
export default function App() {
  return (
    <>
      <BackgroundImage src={images.bgDesktopLight} />
      <MainContainer>
        <TodoSection>
          <TitleIconListTile />
          <CreateTodo />
          <TodoListContainer></TodoListContainer>
        </TodoSection>
      </MainContainer>
    </>
  );
}

const TodoListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background: #e981f5;
`;
