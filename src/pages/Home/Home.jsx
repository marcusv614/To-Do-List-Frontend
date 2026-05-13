import { TasksList, TaskForm } from "../../components";
import style from "./Home.module.css";

const Home = () => {
  return (
    <main className={style.Home}>
      <TaskForm />
      <TasksList />
    </main>
  );
};

export { Home };
