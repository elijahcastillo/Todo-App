import React, { useEffect, useState } from "react";
import { StyledTaskHome } from "../../css/TaskHome.styled";
import { useParams } from "react-router-dom";
import CreateTaskItem from "./CreateTaskItem";
import axios from "axios";
import { useSelector } from "react-redux";
import DisplayTaskItems from "./DisplayTaskItems";

export interface ITaskItem {
  id: number;
  name: string;
  date: string;
  compleated: number;
}

const TaskHome = () => {
  const [taskItems, setTaskItems] = useState<ITaskItem[]>([]);
  const { accessToken } = useSelector((state: any) => state.auth);
  const { listId } = useParams();

  useEffect(() => {
    axios
      .post(
        "http://localhost:3001/task-item/by-id",
        {
          listId,
        },
        {
          headers: {
            authorization: `bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        setTaskItems(res.data.taskItems);
      })
      .catch((error) => {
        return console.log(error.response.data.error);
      });
  }, [listId]);

  return (
    <StyledTaskHome>
      <div className="offsetContainer">
        <CreateTaskItem setTaskItems={setTaskItems} />
        <DisplayTaskItems taskItems={taskItems} />
      </div>
    </StyledTaskHome>
  );
};

export default TaskHome;
