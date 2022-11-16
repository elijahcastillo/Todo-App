import { StyledTaskHome } from "../../css/TaskHome.styled";
import InfoBar from "../InfoBar/InfoBar";
import CreateTaskItem from "./CreateTaskItem";
import DisplayTaskItems from "./DisplayTaskItems";

const TaskHome = () => {
  return (
    <StyledTaskHome>
      <div className="offsetPageContainer">
        <InfoBar />
        <CreateTaskItem />
        <DisplayTaskItems />
      </div>
    </StyledTaskHome>
  );
};

export default TaskHome;
