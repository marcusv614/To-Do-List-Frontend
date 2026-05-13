import { Input, Button } from "../../components";
import floppyDiskIcon from "../../assets/—Pngtree—pixel art floppy diskette icon_23116937.png";
import pencilIcon from "../../assets/—Pngtree—pixel art pencil icon design_8529404.png";
import style from "./TaskForm.module.css";

const TaskForm = () => {
  return (
    <>
      <div className={style.TaskForm}>
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
        <Input type="text" placeholder="Task title"></Input>
        <Button title="Add" variant="add" />
      </div>
    </>
  );
};

export { TaskForm };
