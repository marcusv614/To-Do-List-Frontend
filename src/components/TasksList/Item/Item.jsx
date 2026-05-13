import { Button } from "../..";
import style from "./Item.module.css";

const Item = (props) => {
  const { task } = props;

  return (
    <li className={style.Item}>
      <Button title="Up"/>
      <Button title="Down"/>
      {task}
      <Button title="Delete" />
    </li>
  );
};

export { Item };
