import React, { useEffect, useState } from "react";
import { ITaskItem } from "../../types/allTypes";
import { useGetTaskItemByIdQuery } from "../../redux/api";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCompleated, setTotal } from "../../redux/slices/taskItemSlice";
import { ItemFilter } from "../../types/allTypes";
import TaskItem from "./TaskItem";

const DisplayTaskItems = () => {
  const { listId } = useParams();
  const dispatch = useDispatch();
  const [taskItemsData, setTaskItemsData] = useState<ITaskItem[]>([]);

  //current selection on filter
  const { filterItem } = useSelector((state: any) => state.taskItem);

  const { data, error, isLoading } = useGetTaskItemByIdQuery({ listId });

  useEffect(() => {
    //Get number of compleated items
    let totalCompleated = 0;

    if (data) {
      const filteredList = data.taskItems.filter((item: ITaskItem) => {
        //Status
        if (item.compleated) totalCompleated++;

        //Filter
        if (filterItem == ItemFilter.ALL) {
          return item;
        } else if (filterItem == ItemFilter.COMPLEATED) {
          if (item.compleated == 1) {
            return item;
          }
        } else if (filterItem == ItemFilter.TODO) {
          if (item.compleated == 0) {
            return item;
          }
        }
      });

      //update Filter
      setTaskItemsData(filteredList);

      //update Status
      dispatch(setCompleated(totalCompleated));
      dispatch(setTotal(data.taskItems.length));
    }
  }, [data, filterItem]);

  if (isLoading) return <div>...Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <>
      {taskItemsData.map((item: ITaskItem, i: number) => {
        return (
          <TaskItem
            id={item.id}
            name={item.name}
            date={item.date}
            compleated={item.compleated}
          />
        );
      })}
    </>
  );
};

export default DisplayTaskItems;
