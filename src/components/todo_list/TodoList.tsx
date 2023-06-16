import React from "react";
import { TodoListContainer } from "./TodoListStyles";
import ListItem from "../list_item/ListItem";

export default function TodoList() {
  const qoutes = [
    "Aim single mindedly at one thing and see what happens",
    "Begin to begin is half the work let half still remain again begin this and though wilt have finished",
    "Do not respect the judgement of any man, but hear any man regardless of his station, but do not fear any man because the judment of man is GODS",
    "Read in the morning.",
  ];

  const listItems = qoutes.map((quote, index) => {
    return <ListItem key={quote.substring(0, 15) + index} todo={quote} />;
  });

  return <TodoListContainer>{listItems}</TodoListContainer>;
}
