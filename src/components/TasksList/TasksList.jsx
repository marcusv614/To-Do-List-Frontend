import style from "./TasksList.module.css";
import { Item } from "../../components";

const TasksList = () => {
  return (
    <ul className={style.TasksList}>
      <Item task="Item 1"></Item>
      <Item task="Item 2"></Item>
      <Item task="Item 3"></Item>
    </ul>
  );
};
export { TasksList };
