import style from "./Button.module.css";

const Button = (props) => {
  const {title} = props;
  return <button className={style.Button}>{title}</button>;
};

export { Button };
