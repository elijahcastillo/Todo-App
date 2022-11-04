import styled from "styled-components";

export const StyledCreateList = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px; */

  .title {
    color: #666565a0;
    font-size: 1.5em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-bottom: 20px;
  }
  .newTaskContainer {
    background-color: white;
    border-radius: 5px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  /*Inputs*/
  .newTaskInputWrapper {
    display: flex;
    gap: 20px;
  }

  .newTaskInput {
    flex: 1;
    width: 100%;
  }

  .inputTitle {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 0.9em;
    margin-bottom: 10px;
  }

  .inp {
    padding: 0.6rem;
    border: 1px solid grey;
    background-color: rgba(246, 247, 248, 0.855);
    width: 100%;
  }

  .inp:focus {
    outline: none;
  }

  /*Button*/

  .newTaskFooter button {
    padding: 10px 25px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    background-color: #36c26e;
    color: white;
  }

  .backBtn {
    border: none;
    padding: 0.5rem 2rem;
    background-color: #51a9fc;
    color: white;
    border-radius: 5px;

    margin-top: 30px;
    cursor: pointer;
  }

  @media only screen and (max-width: 900px) {
    .title {
      font-size: 1.3em;
    }
    .newTaskInputWrapper {
      flex-direction: column;
    }
  }
`;
