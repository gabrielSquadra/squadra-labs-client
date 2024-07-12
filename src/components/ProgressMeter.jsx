
import "./ProgressMeter.css";

const ProgressMeter = ({ currentValue, maxValue, formSteps }) => {
  return (
    <div className="form-steps-meter">
      <progress value={currentValue} max={maxValue}></progress>
      <div className="form-steps-meter-text">
        {formSteps &&
          formSteps.map((step, i) => {
            return (
              <div
                key={step + i}
                style={{
                  color: i < currentValue ? "#f6f6f6" : "#141414",
                  transition: "0.5s",
                }}
              >
                <p>{step}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProgressMeter
