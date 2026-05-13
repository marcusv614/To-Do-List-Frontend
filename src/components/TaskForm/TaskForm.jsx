import { Input, Button } from "../../components";
import style from "./TaskForm.module.css";

const TaskForm = () => {
  return (
    <>
      <div className={style.TaskForm}>
        <h1 className={style.Title}>To Do List</h1>
        <Input type="text" placeholder="Task title"></Input>
        <Button title="Add" variant="add" />
      </div>
    </>
  );
};

export { TaskForm };
