import style from "./TasksList.module.css";
import { Button } from "../Button";

const TasksList = () => {
  return (
    <ul className={style.TasksList}>
      <li>
        Item 1 <Button buttonName="Delete"></Button>
      </li>
      <li>
        Item 2 <Button></Button>
      </li>
      <li>
        Item 3 <Button></Button>
      </li>
    </ul>
  );
};
export { TasksList };
