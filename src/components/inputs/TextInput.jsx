import { useEffect } from "react";

import "./CustomInput.css";

const TextInput = ({
  label,
  type,
  name,
  labelInPlaceholder,
  error,
  register,
  isValid,
  watch,
}) => {
  useEffect(() => {
    isValid();
  }, [watch(name)]);
  return (
    <div className="input-wrapper">
      {!labelInPlaceholder && <label htmlFor={name}>{label ?? "Input"}</label>}
      <input
        className="input"
        type={type ?? "text"}
        name={name}
        id={name}
        placeholder={labelInPlaceholder ? label : "Input"}
        {...register(name)}
      />
    </div>
  );
};
export default TextInput;
