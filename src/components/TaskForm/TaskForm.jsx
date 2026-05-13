import { Input, Button } from "../../components";
import floppyDiskIcon from "../../assets/—Pngtree—pixel art floppy diskette icon_23116937.png";
import pencilIcon from "../../assets/—Pngtree—pixel art pencil icon design_8529404.png";
import style from "./TaskForm.module.css";
import { useState } from "react";
import { postTask } from "../../service/TaskService";

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleCreateTask = async (event) => {
    event.preventDefault();

    const taskData = {
      title: taskTitle,
      completed: false,
    };

    try {
      const response = await postTask(taskData);

      console.log("Task Created: ", response.data);
      setTaskTitle("");
    } catch (error) {
      console.error("Error creating task: ", error);
    }
  };

  return (
    <>
      <form className={style.TaskForm} onSubmit={handleCreateTask}>
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
        <Button title="Add" variant="add" type="submit" />
      </form>
    </>
  );
};

export { TaskForm };
