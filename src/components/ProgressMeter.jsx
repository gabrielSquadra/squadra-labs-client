
import "./ProgressMeter.css";

const ProgressMeter = ({currentValue= 1, maxValue= 2}) => {
    return (
      <div className="form-steps-meter">
        <progress value={currentValue} max={maxValue}></progress>
        <div className="form-steps-meter-text">
          <div>
            <p>Datos Personales</p>
          </div>
          <div>
            <p>Madurez de Datos</p>
          </div>
        </div>
      </div>
    );
}

export default ProgressMeter
