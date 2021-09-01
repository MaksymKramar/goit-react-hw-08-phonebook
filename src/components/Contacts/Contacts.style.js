import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 450px;
  background: #fafafa63;
  padding: 30px;
  margin: 50px auto;
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  border: 6px solid #305a72;
`;

export const ContactList = styled.ul`
  display: inline-block;
  list-style-type: decimal;
  font-size: x-large;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

export const TextP = styled.p`
  font-size: x-large;
  margin-right: 20px;
`;

export const NameSpan = styled.span`
  font-weight: bold;
  font-family: sans-serif;
`;

export const DelBtn = styled.button`
  /* background-color: red;
  border-radius: 45%;
  width: 60px;
  height: 30px; */
  box-shadow: inset 0px 1px 0px 0px #3985b1;
  background-color: #216288;
  border: 1px solid #17445e;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  padding: 8px 18px;
  text-decoration: none;
  font: 12px Arial, Helvetica, sans-serif;

  &:hover {
    background: linear-gradient(to bottom, #2d77a2 5%, #337da8 100%);
    background-color: #28739e;
  }
`;
