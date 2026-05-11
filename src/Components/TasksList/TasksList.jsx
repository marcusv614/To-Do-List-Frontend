import style from "./TasksList.module.css";

const TasksList = () => {
  return (
    <ul className={style.TasksList}>
      <li>
        Item 1<button>Delete</button>
      </li>
      <li>
        Item 2<button>Delete</button>
      </li>
      <li>
        Item 3<button>Delete</button>
      </li>
    </ul>
  );
};
export { TasksList };
