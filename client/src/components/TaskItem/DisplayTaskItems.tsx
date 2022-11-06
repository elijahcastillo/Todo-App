import React from "react";
import { ITaskItem } from "../../types/allTypes";
import { useGetTaskItemByIdQuery } from "../../redux/api";
import { useParams } from "react-router-dom";

const DisplayTaskItems = () => {
  const { listId } = useParams();
  const { data, error, isLoading } = useGetTaskItemByIdQuery({ listId });

  if (isLoading) return <div>...Loading</div>;
  if (error) return <div>Error</div>;
  return (
    <>
      {data.taskItems.map((item: ITaskItem) => {
        return <div>{item.name}</div>;
      })}
    </>
  );
};

export default DisplayTaskItems;
