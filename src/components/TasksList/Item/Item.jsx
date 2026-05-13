import { useState } from "react";
import { Button, Input } from "../..";
import style from "./Item.module.css";

const Item = (props) => {
  const {
    task,
    cancelEdit,
    editTask,
    isEditing,
    itemRef,
    removeTask,
    moveUp,
    moveDown,
    updateTaskTitle,
  } = props;
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    setEditedTitle(task.title);
    editTask();
  };

  const handleCancelEdit = () => {
    setEditedTitle(task.title);
    cancelEdit();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!editedTitle.trim()) {
      return;
    }

    await updateTaskTitle(editedTitle.trim());
  };

  return (
    <li className={style.Item} ref={itemRef}>
      <Button title="Up" variant="up" type="button" onClick={moveUp} />
      <Button title="Down" variant="down" type="button" onClick={moveDown} />
      {isEditing ? (
        <form className={style.EditForm} onSubmit={handleSubmit}>
          <Input
            type="text"
            value={editedTitle}
            onChange={(event) => setEditedTitle(event.target.value)}
          />
          <Button title="Save" variant="edit" type="submit" />
          <Button
            title="Cancel"
            variant="cancel"
            type="button"
            onClick={handleCancelEdit}
          />
        </form>
      ) : (
        <span className={style.TaskName}>{task.title}</span>
      )}
      <span className={style.TaskActions}>
        {!isEditing && (
          <Button title="Edit" variant="edit" type="button" onClick={handleEdit} />
        )}
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
