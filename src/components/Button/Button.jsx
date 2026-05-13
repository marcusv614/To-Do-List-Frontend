import style from "./Button.module.css";

const Button = (props) => {
  const { title, variant = "default", ...buttonProps } = props;
  const buttonClasses = `${style.Button} ${style[variant] ?? style.default}`;

  return (
    <button className={buttonClasses} {...buttonProps}>
      {title}
    </button>
  );
};

export { Button };
