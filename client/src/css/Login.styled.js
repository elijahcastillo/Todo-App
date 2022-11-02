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
    justify-content: center;
    flex-direction: column;
    gap: 60px;
    background-color: #a1e8c0;
    color: white;
  }

  .compMoto {
    font-family: "Open Sans", sans-serif;
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
    //background-color: #97edbc;
    gap: 10px;
  }

  .formWrapper {
    border-radius: 10px;
    width: min(400px, 80%);
    height: 450px;
    background-color: #fff;
    padding: 15px;
  }

  .formInfo {
    font-family: "Rubik", sans-serif;
    font-size: 2.5em;
    font-weight: bold;
    text-align: center;
    border-bottom: 1.5px solid #e6e6e6;
    color: #6de4a0;
  }

  .formBody {
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .formInput {
  }

  .formInput input {
    background-color: #f8f8f8;
    padding: 0.8rem 1rem;
    width: 100%;
    border: none;
    border-left: 4px solid #6de4a0;
  }

  .formInput input:focus {
    outline: none;
  }
  .formInput input::placeholder {
    font-family: "Open Sans", sans-serif;
    color: #b0b0b0;
  }

  .formFooter {
    margin-top: 15px;
  }

  .formFooter .message {
    font-size: 0.85em;
    font-family: "Rubik", sans-serif;
    font-weight: bold;
    color: #829cf4;
    cursor: pointer;
  }

  .formFooter .sub {
    width: 100%;
    margin-top: 25px;
    background-color: #62c68e;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 15px;
    cursor: pointer;
  }

  @media only screen and (max-width: 1000px) {
    .svgContainer {
      display: none;
    }
  }
`;
