import style from "./TasksList.module.css";
import { Item } from "../../components";

const TasksList = ({
  tasksArray,
  editTask,
  removeTask,
  moveTaskUp,
  moveTaskDown,
  taskRefs,
}) => {
  return tasksArray.length > 0 ? (
    <ul className={style.TasksList}>
      {tasksArray.map((item, index) => (
        <Item
          key={item.id}
          itemRef={(element) => {
            taskRefs.current[item.id] = element;
          }}
          task={item}
          editTask={() => editTask(item)}
          removeTask={() => removeTask(item.id)}
          moveUp={() => moveTaskUp(index)}
          moveDown={() => moveTaskDown(index)}
        />
      ))}
    </ul>
  ) : (
    <></>
  );
};
export { TasksList };
