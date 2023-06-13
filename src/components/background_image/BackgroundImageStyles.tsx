import React from "react";
import styled from "styled-components";
import { Row } from "../../styles/layout/Flex";

const AppBackgroundImage = styled(Row)<{
  url: string;
}>`
  position: absolute;
  width: 100vw;
  height: 18.75rem;
  color: #1429a9;
`;

export { AppBackgroundImage };
