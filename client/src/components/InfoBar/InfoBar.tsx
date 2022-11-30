
import { StyledInfoBar } from "../../css/InfoBar.styled";
import FilterTaskItems from "./FilterTaskItems";
import TaskStatus from "./TaskStatus";


const InfoBar = () => {
  return (
    <StyledInfoBar>
      <TaskStatus />
      <FilterTaskItems />
    </StyledInfoBar>
  );
};

export default InfoBar;
