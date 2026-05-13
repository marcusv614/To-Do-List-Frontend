import { TasksList, TaskForm } from "../../components";
import { useState, useEffect } from "react";
import style from "./Home.module.css";
import { getTasks } from "../../service/TaskService";

const Home = () => {
  const [tasksArray, setTasksArray] = useState([]);

  const loadTasks = async () => {
    try {
      const responseArray = await getTasks();
      setTasksArray(responseArray.data);
    } catch (error) {
      console.error("Tasks not found", error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <main className={style.Home}>
      <TaskForm loadTasks={loadTasks} />
      <TasksList tasksArray={tasksArray} />
    </main>
  );
};

export { Home };
