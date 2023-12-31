import styled from "styled-components";

const borderRadius = "2rem";

export const StyledInputContainer = styled.div`
  display: flex;

  flex-direction: row;

  height: 4rem;

  align-items: center;

  gap: 0.5rem;

  border-radius: ${borderRadius};

  background: white;

  caret-color: white;

  &: hover {
    background: rgba(200, 200, 200, 0.625);
    // rgba(141, 136, 246, 0.2);
  }
`;

export const StyledInput = styled.input`
  display: block;

  width: 100%;

  height: 100%;

  padding: 0.375rem 0.375rem 0.375rem 4.5rem;

  border: none;

  border-radius: ${borderRadius};

  background: transparent;

  font-family: .AppleSystemUIFont;

  font-size: 1.125rem;

  color: #9495a5;

  letter-spacing: -0.015625rem;

  &: focus {
    border: none;
    outline: none;
  }
`;

export const Wrapper = styled.div`
  padding-top: 2.5rem;
  width: 100%;
`;
