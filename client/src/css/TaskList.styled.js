import styled from "styled-components";

export const StyledListItem = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;

  .taskListLink {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    height: 50px;
    text-decoration: none;
    color: black;
  }

  .taskListLink:hover {
    background-color: #f2f2f2;

    .DelTask {
      display: block;
    }
  }

  .DelTask {
    color: red;
    font-weight: bold;
    font-size: 1.25em;

    display: none;
  }
`;
