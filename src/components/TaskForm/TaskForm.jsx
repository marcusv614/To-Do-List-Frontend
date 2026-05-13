import { Input, Button } from "../../components";
import floppyDiskIcon from "../../assets/—Pngtree—pixel art floppy diskette icon_23116937.png";
import pencilIcon from "../../assets/—Pngtree—pixel art pencil icon design_8529404.png";
import style from "./TaskForm.module.css";
import { useState } from "react";

const TaskForm = ({ editingTask, onCancelEdit, onSaveTask }) => {
  const [taskTitle, setTaskTitle] = useState(editingTask?.title ?? "");
  const isEditing = Boolean(editingTask);

  const handleSaveTask = async (event) => {
    event.preventDefault();

    if (!taskTitle.trim()) {
      return;
    }

    await onSaveTask(taskTitle.trim());
    setTaskTitle("");
  };

  return (
    <>
      <form className={style.TaskForm} onSubmit={handleSaveTask}>
        <img
          className={`${style.FormIcon} ${style.LeftIcon}`}
          src={pencilIcon}
          alt=""
        />
        <img
          className={`${style.FormIcon} ${style.RightIcon}`}
          src={floppyDiskIcon}
          alt=""
        />
        <h1 className={style.Title}>To Do List</h1>
        <Input
          type="text"
          placeholder="Task title"
          value={taskTitle}
          onChange={(event) => setTaskTitle(event.target.value)}
        />
        <div className={style.FormActions}>
          <Button
            title={isEditing ? "Save" : "Add"}
            variant={isEditing ? "edit" : "add"}
            type="submit"
          />
          {isEditing && (
            <Button
              title="Cancel"
              variant="cancel"
              type="button"
              onClick={onCancelEdit}
            />
          )}
        </div>
      </form>
    </>
  );
};

export { TaskForm };
