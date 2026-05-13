import { Input, Button } from "../../components";

const TaskForm = () => {
  return (
    <>
      <Input type="text" placeholder="Add Task"></Input>
      <Button title="+" />
    </>
  );
};

export { TaskForm };
