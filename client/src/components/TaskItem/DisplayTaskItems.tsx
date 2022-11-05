import React from "react";
import { ITaskItem } from "./TaskHome";

interface TaskItemProps {
  taskItems: ITaskItem[];
}

const DisplayTaskItems = ({ taskItems }: TaskItemProps) => {
  return (
    <div>
      {taskItems.map((item: ITaskItem) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
};

export default DisplayTaskItems;
