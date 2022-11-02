import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  width: 100vw;

  //svg
  .svgContainer {
    flex: 2;
    height: 100vh;
    display: flex;
    align-items: center;
  }

  .svgContainer img {
    width: 80%;
    height: 500px;
  }

  //form
  .loginContainer {
    flex: 1.5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .formWrapper {
    outline: 1px solid red;
    width: max(65%, 400px);
    height: 60%;
  }

  @media only screen and (max-width: 1000px) {
    .svgContainer {
      display: none;
    }
  }
`;
