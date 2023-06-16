import React, { Fragment, ReactNode } from "react";
import { images } from "../../constants/images";
import {
  CheckCircle,
  HorizontalLine,
  ListItemListTile,
} from "./ListItemStyles";

export default function ListItem({ todo }: { todo: string }) {
  return (
    <Fragment>
      <ListItemListTile>
        <CheckCircle>
          <img src={images.iconCheck} />
        </CheckCircle>
        <div style={{ width: "85%" }}>{todo}</div>
      </ListItemListTile>
      <HorizontalLine />
    </Fragment>
  );
}
