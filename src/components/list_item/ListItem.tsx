import React, { Fragment, ReactNode, useState } from "react";
import { images } from "../../constants/images";
import {
  CheckCircle,
  HorizontalLine,
  ListItemListTile,
  TodoTextContainer,
} from "./ListItemStyles";

export default function ListItem({ todo }: { todo: string }) {
  const [completeTodo, setCompleteTodo] = useState(false);

  const handleCompleteTodo = () => setCompleteTodo((prevState) => !prevState);
  return (
    <Fragment>
      <ListItemListTile>
        <CheckCircle completeTodo={completeTodo} onClick={handleCompleteTodo}>
          <img src={images.iconCheck} />
        </CheckCircle>
        <TodoTextContainer completeTodo={completeTodo}>
          {todo}
        </TodoTextContainer>
      </ListItemListTile>
      <HorizontalLine />
    </Fragment>
  );
}
