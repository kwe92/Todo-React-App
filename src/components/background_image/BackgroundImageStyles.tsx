import React from "react";
import styled from "styled-components";
import { Row } from "../../styles/layout/Flex";

interface Props {
  url: string;
}

const AppBackgroundImage = styled(Row)<Props>`
  position: absolute;
  width: 100vw;
  height: 18.75rem;
  color: #1429a9;
`;

export { AppBackgroundImage };
