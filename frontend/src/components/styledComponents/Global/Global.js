import { createGlobalStyle } from "styled-components";
import bgimg from "../../../utils/images/bgimg.jpg";

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
    background-image: url(${bgimg});
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    width: 100%;
  }
`;

export default Global;
