import "./CustomInput.css";

const TextInput = ({ label, type, name, labelInPlaceholder }) => {
  return (
    <div className="input-wrapper">
      {!labelInPlaceholder && <label htmlFor={name}>{label ?? "Input"}</label>}
      <input
        className="input"
        type={type ?? "text"}
        name={name}
        id={name}
        placeholder={labelInPlaceholder ? label : "Input"}
      />
    </div>
  );
};
export default TextInput;
