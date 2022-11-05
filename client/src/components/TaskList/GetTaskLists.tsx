import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useAxios from "../../hooks/useAxios";
import { setTaskList } from "../../store/authStore";
import TaskListItem from "./TaskListItem";

export interface TaskList {
  id: number;
  name: string;
}

const GetTaskLists = () => {
  const { accessToken, TaskList } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  //const [data, setData] = useState<TaskList[]>([]);
  const { res, err, loading }: any = useAxios({
    url: "/task-list",
    method: "get",
    body: {},
    headers: {
      authorization: `bearer ${accessToken}`,
    },
  });

  useEffect(() => {
    if (res && res.data) {
      const data: TaskList[] = res.data.taskList;
      dispatch(setTaskList(data));
    }
  }, [res]);

  if (err) return <div>Error</div>;
  if (loading) return <div>...Loading</div>;

  return (
    <div>
      {TaskList.map((item: any, i: number) => {
        return <TaskListItem id={item.id} name={item.name} key={i} />;
      })}
    </div>
  );
};

export default GetTaskLists;
