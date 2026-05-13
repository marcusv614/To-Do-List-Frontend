import style from "./TasksList.module.css";
import { Item, Button } from "../../components";
import { useState, useEffect } from "react";
import { getTasks } from "../../service/TaskService";

const TasksList = ({tasksArray}) => {

  return (
    tasksArray.length >0 ?  (
    <ul className={style.TasksList}>
      {tasksArray.map((item) => (
        <Item key={item.id} task={item.title} />
      ))}
    </ul>) : (<></>)
    );
};
export { TasksList };
