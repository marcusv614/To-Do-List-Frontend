import style from "./Button.module.css";

const Button = (props) => {
  const { title, variant = "default" } = props;
  const buttonClasses = `${style.Button} ${style[variant] ?? style.default}`;

  return <button className={buttonClasses}>{title}</button>;
};

export { Button };
