import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
    box-sizing: border-box;
    }

    * {
    margin: 0;
    //outline: 1px solid green;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-thumb {
  background: #bebebe;
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
        min-height: 100vh;
    }

    .offsetPageContainer{
        background-color: rgb(242, 244, 247);;
        margin-left: 250px;
        margin-top: 75px;
        padding: 20px 50px;
        min-height: 100vh;
    }

    //Spinner
    @keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading-spinner {
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
}

    @media only screen and (max-width: 1200px) {
        .offsetContainer{
            margin-left: 0;
        }

        .offsetPageContainer{
            margin-left: 0;
        }
    }

`;

export default GlobalStyle;
