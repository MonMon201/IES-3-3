import { createGlobalStyle } from "styled-components";
import { colors } from "./constants";

export const GlobalStyles = createGlobalStyle`
    #root {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        height: 100vh;
        background: ${colors.black10};
    }
`;
