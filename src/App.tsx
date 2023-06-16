import React from "react";
import { images } from "./constants/images";
import TitleIconListTile from "./components/title_icon/TitleIconListTile";
import CreateTodo from "./components/create_todo_input/CreateTodo";
import BackgroundImage from "./components/app_background_image/BackGroundImage";
import { MainContainer, TodoSection } from "./AppStyles";
import { styled } from "styled-components";
import TodoList from "./components/todo_list/TodoList";
import ListItem from "./components/list_item/ListItem";

// TODO: Create ListItemListTile

export default function App() {
  return (
    <>
      <BackgroundImage src={images.bgDesktopLight} />
      <MainContainer>
        <TodoSection>
          <TitleIconListTile />
          <CreateTodo />
          <TodoList />
        </TodoSection>
      </MainContainer>
    </>
  );
}
