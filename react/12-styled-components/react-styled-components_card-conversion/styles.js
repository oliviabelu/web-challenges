import { createGlobalStyle } from "styled-components";
import { Oswald, Montserrat } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });
//const playwrite = Playwrite_DE_SAS({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${montserrat.style.fontFamily};
    line-height: 1.5;
  }

  main {
    max-width: 480px;
    margin: 0 auto;
    padding: 8px;
  }
`;
