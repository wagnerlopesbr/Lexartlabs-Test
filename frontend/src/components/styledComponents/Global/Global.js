import { createGlobalStyle } from "styled-components";
import lexartBg from "../../../utils/images/lexart-light-bg.png";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
  }

  body {
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #e5e5e5;
    background-image: url(${lexartBg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    width: 100%;
  }
`;

export default Global;
