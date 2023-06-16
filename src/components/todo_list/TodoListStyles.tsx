import styled from "styled-components";
// TODO: Add box shadows
const TodoListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 50px;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  border-radius: 2rem;
  background: white;
  box-shadow: 0 35px 50px -15px rgba(194, 195, 214, 0.5);
`;

export { TodoListContainer };
