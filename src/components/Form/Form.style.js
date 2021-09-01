import styled from "@emotion/styled";

export const CustomForm = styled.form`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  /* border-style: dashed;
  border-color: aqua;
  outline-color: tomato;
  margin-bottom: 15px; */
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 8px;
  outline: none;
  border: 1px solid #b0cfe0;
  transition: all 0.3s ease-in-out;

  &:focus {
    box-shadow: 0 0 5px #b0cfe0;
    border: 1px solid #b0cfe0;
  }
`;
