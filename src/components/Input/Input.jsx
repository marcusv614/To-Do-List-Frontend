import style from "./Input.module.css"

const Input = (props) => {
  const {type, placeholder, ...outrosAtributos } = props;
  return <input className={style.Input} type={type} placeholder={placeholder} { ...outrosAtributos} />;
};

export { Input };
