import React from "react";
import { Title, TitleIcon } from "./TitleIconListTileStyles";
import { images } from "../../constants/images";

export default function TitleIconListTile() {
  return (
    <TitleIcon>
      <Title>TODO</Title>
      <img src={images.iconMoon} />
    </TitleIcon>
  );
}
