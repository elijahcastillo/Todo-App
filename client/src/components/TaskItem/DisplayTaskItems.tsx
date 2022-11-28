import React, { useEffect, useState } from "react";
import { ITaskItem, ItemDateSort } from "../../types/allTypes";
import { useGetTaskItemByIdQuery } from "../../redux/api";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCompleated, setTotal } from "../../redux/slices/taskItemSlice";
import { ItemFilter } from "../../types/allTypes";
import TaskItem from "./TaskItem";
import LoadingSpinner from "../LoadingSpinner";

const DisplayTaskItems = () => {
  const { listId } = useParams();
  const dispatch = useDispatch();
  const [taskItemsData, setTaskItemsData] = useState<ITaskItem[]>([]);

  //current selection on filter
  const { filterItem, sortItem } = useSelector((state: any) => state.taskItem);

  const { data, error, isLoading } = useGetTaskItemByIdQuery({ listId });

  //helper Function
  const sortDates = (toSort: ITaskItem[]) => {
    //sort the data
    const sortedData = toSort.sort((a, b) => {
      if (Date.parse(a.date) > Date.parse(b.date)) {
        return -1;
      } else {
        return 1;
      }
    });

    //reverse if needed
    if (sortItem === ItemDateSort.ASCENDING) {
      return sortedData;
    } else if (sortItem === ItemDateSort.DESCENDING) {
      return sortedData.reverse();
    }
  };

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

      //update List
      const updatedList: ITaskItem[] = sortDates(filteredList) as ITaskItem[];
      setTaskItemsData(updatedList);

      //update Status
      dispatch(setCompleated(totalCompleated));
      dispatch(setTotal(data.taskItems.length));
    }
  }, [data, filterItem, sortItem]);

  if (isLoading) return <LoadingSpinner />;
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
