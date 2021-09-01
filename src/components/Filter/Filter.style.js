import styled from "@emotion/styled";

export const Container = styled.div`
  margin-bottom: 15px;
`;

export const TextP = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  color: linen;
  font-size: 25px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
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
