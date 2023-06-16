import React, { ReactNode } from "react";
import { Column, Row } from "../../styles/layout/Flex";
import styled from "styled-components";
import { images } from "../../constants/images";

export default function ListItem({ todo }: { todo: string }) {
  return (
    <ListItemListTile>
      <CheckCircle>
        <img src={images.iconCheck} />
      </CheckCircle>
      {todo}
    </ListItemListTile>
  );
}

const ListItemListTile = styled(Row)`
  width: 100%;
  height: 64px;
  justify-content: start;
  background: orange;
`;

const CheckCircle = styled(Column)`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  //   TODO: Change border color
  border: 1px solid grey;
`;
