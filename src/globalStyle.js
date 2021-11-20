import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Kanit', sans-serif;
        -webkit-user-select: none; 
        -webkit-touch-callout: none; 
        -moz-user-select: none; 
        -ms-user-select: none; 
        user-select: none;
    }
    `;