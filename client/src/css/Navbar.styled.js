import styled from "styled-components";

export const StyledNavbar = styled.div`
  width: 250px;
  height: 100vh;
  position: absolute;
  box-shadow: 1px 2px 3px 2px #d3d3d3;

  .topSection {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 10%;
    border-bottom: 1px solid #b6b5b5;

    .logo {
      font-size: 2.2em;
      color: #5ee484;
      font-family: "Rubik", sans-serif;
    }

    .username {
      font-family: "Open Sans", sans-serif;
      font-size: 0.9em;
      text-align: center;
      color: #7f7d7d;
    }
  }
  .addTaskList {
    display: flex;
    width: 100%;
    justify-content: center;
    text-decoration: none;
    font-size: 2em;
    font-weight: bolder;
    transition: all 300ms ease-in-out;
    box-shadow: 0px 0px 4px 0px #d3d3d3;
  }
  .middleSection {
    width: 100%;
    height: 70%;

    overflow-y: auto;
  }

  .bottomSection {
    width: 100%;
    height: 20%;
    outline: 1px solid purple;
  }
`;
