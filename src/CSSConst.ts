
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Nunito Sans";
    }
`

export const defaultTheme = {
    breakpoints: {
        tablet: "1155px",
        mobile: "640px",
    },
    colors: {
        main: "#3075C6",
        black: "#313131",
        white: "#FFFFFF",
        gray: "#AEAEAE"
    }
}