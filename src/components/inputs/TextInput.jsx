import { useEffect } from "react";
import "./CustomInput.css";

const TextInput = ({
  label,
  type,
  name,
  labelInPlaceholder,
  error,
  register,
  trigger,
  watch,
}) => {
  const handleBlur = () => {
    trigger(name);
  };

  return (
    <div className="input-wrapper">
      {!labelInPlaceholder && <label htmlFor={name}>{label ?? "Input"}</label>}
      <input
        className={`input ${
          error !== undefined ? "input-error" : watch(name) && "input-success"
        }`}
        type={type ?? "text"}
        name={name}
        id={name}
        placeholder={labelInPlaceholder ? label : "Input"}
        {...register(name)}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default TextInput;
