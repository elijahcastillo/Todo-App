import styled from "styled-components";

export const StyledListItem = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
  overflow: hidden;

  .taskListLink {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    max-width: 100%;
    height: 50px;

    text-decoration: none;
    color: black;
  }

  .taskListName {
    word-wrap: break-word;
  }

  .ListLinkActive {
    background-color: #e0dfdf;
  }

  .taskListLink:hover {
    //background-color: #f2f2f2;
  }
`;
