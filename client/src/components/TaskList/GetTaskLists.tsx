import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useAxios from "../../hooks/useAxios";
import TaskListItem from "./TaskListItem";

export interface TaskList {
  id: number;
  name: string;
}

const GetTaskLists = () => {
  const { accessToken } = useSelector((state: any) => state.auth);

  const [data, setData] = useState<TaskList[]>([]);
  const { res, err, loading }: any = useAxios({
    url: "/task-list",
    method: "get",
    body: {},
    headers: {
      authorization: `bearer ${accessToken}`,
    },
  });

  useEffect(() => {
    if (res && res.data) setData(res.data.taskList);
  }, [res]);

  if (err) return <div>Error</div>;
  if (loading) return <div>...Loading</div>;

  return (
    <div>
      {data.map((item, i) => {
        return <TaskListItem id={item.id} name={item.name} key={i} />;
      })}
    </div>
  );
};

export default GetTaskLists;
