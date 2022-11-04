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
    outline: 1px solid blue;

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

  .middleSection {
    width: 100%;
    height: 70%;
    outline: 1px solid orange;
  }

  .bottomSection {
    width: 100%;
    height: 20%;
    outline: 1px solid purple;
  }
`;
