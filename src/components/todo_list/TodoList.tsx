import React from "react";
import { TodoListContainer } from "./TodoListStyles";
import ListItem from "../list_item/ListItem";

export default function TodoList() {
  return (
    <TodoListContainer>
      <ListItem todo="Aim single mindedly at one thing and see what happens" />
    </TodoListContainer>
  );
}
