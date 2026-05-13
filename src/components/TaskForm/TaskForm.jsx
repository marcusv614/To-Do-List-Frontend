import { Input, Button } from "../../components";
import style from "./TaskForm.module.css";

const TaskForm = () => {
  return (
    <>
      <div className={style.TaskForm}>
        <Input type="text" placeholder="Add Task"></Input>
        <Button title="Add" />
      </div>
    </>
  );
};

export { TaskForm };
