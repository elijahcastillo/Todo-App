import styled from "styled-components";

export const StyledInfoBar = styled.div`
  outline: 1px solid limegreen;
  position: fixed;
  top: 0;
  left: 252px;
  width: calc(100vw - 200px);

  height: 80px;
  background-color: white;
  padding: 0 20px;

  display: flex;
  align-items: center;
  gap: 20px;

  .listTitle {
    font-size: 1.5em;
  }

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const StyledStatus = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  font-family: "Rubik", sans-serif;

  .statusItem {
    display: flex;
    flex-direction: column;
    align-items: center;

    .counter {
      font-weight: 100;
      font-size: 1.5em;
    }

    .desc {
      font-size: 1em;
    }
  }
`;

export const StyledFilter = styled.div`
  display: flex;
  align-items: center;

  gap: 35px;
  font-family: "Rubik", sans-serif;

  .filterWrapper {
    display: flex;
    gap: 10px;
  }
  .filterItem {
    padding: 2px 10px;
    cursor: pointer;
    text-align: center;
  }

  .filterActive {
    border-radius: 15px;
    background-color: #70b2df;
    color: white;
  }

  .sortingWrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .sortTitle {
    text-align: center;
  }

  .DelList {
    padding: 3px 12px;
    border-radius: 12px;
    border: none;
    background-color: #e54949;
    color: white;
    cursor: pointer;
  }
  @media only screen and (max-width: 1200px) {
    padding: 20px 0px;
    flex-direction: column;

    .filterWrapper {
      align-items: center;
      justify-content: center;
    }
  }
`;
