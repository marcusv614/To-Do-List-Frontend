const Input = (props) => {
  const {type, placeholder, ...outrosAtributos } = props;
  return <input type={type} placeholder={placeholder} { ...outrosAtributos} />;
};

export { Input };
