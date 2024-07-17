import { useEffect } from "react";
import "./MultiRadioButtonsInput.css";

const MultiRadioButtonsInput = ({ question, name, error, register, watch }) => {
  return (
    <div className="input-wrapper">
      <label className="input-long-label" htmlFor={name}>
        {question ?? "Input"}
      </label>
      <div className="radio-buttons-row">
        <progress
          className="radio-buttons-level-bar"
          value={parseInt(watch(name)) + 1}
          max={5}
        ></progress>
        {[0, 1, 2, 3, 4].map((num, i) => (
          <label
            key={i}
            className={`radio-label radio-label-${num}`}
            style={{
              color: i < parseInt(watch(name)) + 1 ? "#f6f6f6" : "#141414",
              transition: "0.5s",
            }}
          >
            <input
              className={`radio-button input-radio-${num} ${
                error !== undefined
                  ? "input-error"
                  : watch(name) && "input-success"
              }`}
              type="radio"
              name={name}
              id={`${name}-${num}`}
              value={num}
              {...register(name)}
            />
            {num + 1}
          </label>
        ))}
      </div>
    </div>
  );
};

export default MultiRadioButtonsInput;
