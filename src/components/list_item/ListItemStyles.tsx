import styled from "styled-components";
import { Column, Row } from "../../styles/layout/Flex";

const ListItemListTile = styled(Row)`
  width: 100%;
  height: 64px;
  justify-content: start;
  padding-top: 12px;
  padding-bottom: 12px;
`;

type CompleteTodoProp = { completeTodo: boolean };

const CheckCircle = styled(Column)<CompleteTodoProp>`
  width: 24px;
  height: 24px;
  margin-left: 24px;
  margin-right: 24px;
  border-radius: 12px;
  border: 1px solid #979797;
  background-image: ${(props) =>
    props.completeTodo
      ? "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
      : "none"};
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  }
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: #e3e4f1;
`;

const TodoTextContainer = styled.div<CompleteTodoProp>`
  width: 85%;
  text-decoration: ${(props) => (props.completeTodo ? "line-through" : "none")};
`;
export { ListItemListTile, CheckCircle, HorizontalLine, TodoTextContainer };
