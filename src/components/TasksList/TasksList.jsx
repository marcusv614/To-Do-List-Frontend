import style from "./TasksList.module.css";
import { Item } from "../../components";

const TasksList = () => {
  const taskArray = [
    {
      id: 1,
      name: "Item 1",
    },
    {
      id: 2,
      name: "Item 2",
    },
    {
      id: 3,
      name: "Item 3",
    },
  ];

  return (
    <ul className={style.TasksList}>
      {taskArray.map((item) => (
        <Item key={item.id} task={item.name} />
      ))}
    </ul>
  );
};
export { TasksList };
