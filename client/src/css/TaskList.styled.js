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

  .ListLinkActive {
    background-color: #e0dfdf;
  }

  .taskListLink:hover {
    //background-color: #f2f2f2;
  }
`;
