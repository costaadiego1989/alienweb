import { createGlobalStyle } from "styled-components";
import ExoSpace from '../assets/fonts/exospace.ttf';
import Youthanasia from '../assets/fonts/youthanasia.ttf';

export const Theme = {
  color: {
    primary: {
      fontFamily: `${ExoSpace}`,
      main: "#fffae3",
      contrastText: "#c1d9d0",
    },

    secundary: {
      main: "#736681",
      contrastText: "#62455b",
    },
  },
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: pala;
    src: url(${ExoSpace}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalStyle;
