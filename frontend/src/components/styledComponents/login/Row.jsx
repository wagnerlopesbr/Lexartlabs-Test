import styled from "styled-components";

const Row = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width) 550px {
    display: block;
  }
`;

export default Row;
