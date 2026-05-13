import style from "./TasksList.module.css";
import { Item } from "../../components";

const TasksList = ({
  tasksArray,
  cancelEdit,
  editingTaskId,
  editTask,
  removeTask,
  moveTaskUp,
  moveTaskDown,
  updateTaskTitle,
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
          cancelEdit={cancelEdit}
          editTask={() => editTask(item.id)}
          isEditing={editingTaskId === item.id}
          removeTask={() => removeTask(item.id)}
          moveUp={() => moveTaskUp(index)}
          moveDown={() => moveTaskDown(index)}
          updateTaskTitle={(taskTitle) => updateTaskTitle(item, taskTitle)}
        />
      ))}
    </ul>
  ) : (
    <></>
  );
};
export { TasksList };
