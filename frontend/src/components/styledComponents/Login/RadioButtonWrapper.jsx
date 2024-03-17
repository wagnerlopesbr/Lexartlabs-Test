import styled from "styled-components";

const RadioButtonWrapper = styled.label`
  display: inline-block;
  cursor: pointer;
  border: ${({ checked }) => (checked ? "2px solid #333" : "white")}
  border: 2px solid #333;
  border-radius: 8px;
  padding: 8px 16px;
  margin-right: 10px;
  width: 60px;
  background-color: ${({ checked }) => (checked ? "#333" : "white")};
  color: ${({ checked }) => (checked ? "#fff" : "#333")};
`;

export default RadioButtonWrapper;
