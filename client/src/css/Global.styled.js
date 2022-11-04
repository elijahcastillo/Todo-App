import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
    box-sizing: border-box;
    }

    * {
    margin: 0;
    }

    html, body {
    height: 100%;
    }

    body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    }

    img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    }

    input, button, textarea, select {
    font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    }

    .offsetContainer{
        background-color: rgb(242, 244, 247);;
        margin-left: 250px;
        padding: 20px 50px;
        height: 100vh;
    }

`;

export default GlobalStyle;
