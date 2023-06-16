import styled from "styled-components";
import { Column, Row } from "../../styles/layout/Flex";

const ListItemListTile = styled(Row)`
  width: 100%;
  height: 64px;
  justify-content: start;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CheckCircle = styled(Column)`
  width: 24px;
  height: 24px;
  margin-left: 24px;
  margin-right: 24px;
  border-radius: 12px;
  border: 1px solid #979797;
  // background-image: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  }
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: grey;
`;
export { ListItemListTile, CheckCircle, HorizontalLine };