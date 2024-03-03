import styled from "styled-components";

const RadioButtonInput = styled.input`
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 50%;
  outline: none;
  margin-right: 5px;

  &:checked {
    background-color: #0081cf;
    border-color: #0081cf;
  }
`;

export default RadioButtonInput;
