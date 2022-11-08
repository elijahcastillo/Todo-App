import styled from "styled-components";

export const StyledTaskHome = styled.div``;

export const StyledCreate = styled.div`
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

  @media only screen and (max-width: 900px) {
    .title {
      font-size: 1.3em;
    }
    .newTaskInputWrapper {
      flex-direction: column;
    }
  }
`;

export const StyledTaskItem = styled.div`
  width: 100%;
  min-height: 50px;
  outline: 1px solid red;
  margin-top: 15px;
  display: flex;
  gap: 20px;
  font-family: "Rubik", sans-serif;

  .contentContainer {
    width: 100%;

    .content {
      font-size: 1.1em;
    }

    .contentDate {
      font-size: 0.8em;
      color: #999999;
    }
  }

  .taskIcons {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 5px;
  }

  .icon {
    width: 35px;
    height: 35px;
    cursor: pointer;
  }

  .icon > path {
    fill: black;
  }

  .checkmark:hover,
  .checkmarkActive {
    path {
      fill: green;
    }
  }

  .trash:hover {
    path {
      fill: red;
    }
  }

  .UnDo:hover,
  .UnDoActive {
    path {
      fill: orange;
    }
  }
`;
