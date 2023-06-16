import styled from "styled-components";
import { Column, Row } from "../../styles/layout/Flex";

const ListItemListTile = styled(Row)`
  width: 100%;
  height: 64px;
  justify-content: start;
  background: orange;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CheckCircle = styled(Column)`
  width: 24px;
  height: 24px;
  margin-left: 24px;
  margin-right: 24px;
  border-radius: 12px;
  //   TODO: Change border color
  border: 1px solid grey;
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: grey;
`;
export { ListItemListTile, CheckCircle, HorizontalLine };
