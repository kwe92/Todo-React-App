import styled from "styled-components";
import { Row } from "../../styles/layout/Flex";
const TodoListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  border-radius: 2rem;
  background: white;
  box-shadow: 0 35px 50px -15px rgba(194, 195, 214, 0.5);
`;

const BottomSection = styled(Row)`
  width: 100%;
  height: 3.125rem;
  justify-content: space-between;
`;

const ItemsLeftSection = styled(Row)`
  padding-left: 1.5rem;
`;

const FilterSection = styled(Row)``;

const TextButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  &:active {
    color: orange;
  }
  &:hover {
    color: rgba(117, 160, 248, 1);
  }
`;

const ButtonContainer = styled(Row)`
  width: 10.3125rem;
  justify-content: space-evenly;
`;

export {
  TodoListContainer,
  BottomSection,
  ItemsLeftSection,
  FilterSection,
  TextButton,
  ButtonContainer,
};
