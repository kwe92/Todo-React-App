import React from "react";

import { StyledImg } from "./BackGroundImageStyles";
interface Props {
  src: string;
}
export default function BackgroundImage(props: Props) {
  return <StyledImg src={props.src} />;
}
