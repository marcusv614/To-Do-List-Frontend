import { Button } from "../..";
import style from "./Item.module.css";

const Item = (props) => {
  const { task } = props;

  return (
    <li className={style.Item}>
      <Button title="Up" variant="up" />
      <Button title="Down" variant="down" />
      <span className={style.TaskName}>{task}</span>
      <span className={style.DeleteAction}>
        <Button title="Delete" variant="delete" />
      </span>
    </li>
  );
};

export { Item };
