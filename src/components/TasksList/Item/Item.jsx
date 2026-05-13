import { Button } from "../..";
import style from "./Item.module.css";

const Item = (props) => {
  const { task, editTask, itemRef, removeTask, moveUp, moveDown } = props;

  return (
    <li className={style.Item} ref={itemRef}>
      <Button title="Up" variant="up" type="button" onClick={moveUp} />
      <Button title="Down" variant="down" type="button" onClick={moveDown} />
      <span className={style.TaskName}>{task.title}</span>
      <span className={style.TaskActions}>
        <Button title="Edit" variant="edit" type="button" onClick={editTask} />
        <Button
          title="Delete"
          variant="delete"
          type="button"
          onClick={removeTask}
        />
      </span>
    </li>
  );
};

export { Item };
