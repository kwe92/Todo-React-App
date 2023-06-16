import { Wrapper } from "./CreateTodoStyles";
import { StyledInput } from "./CreateTodoStyles";
import { StyledInputContainer } from "./CreateTodoStyles";
export default function CreateTodo() {
  return (
    <Wrapper>
      <StyledInputContainer>
        <StyledInput
          placeholder="Create a new todo..."
          onChange={() => {}}
          value={""}
        />
      </StyledInputContainer>
    </Wrapper>
  );
}
