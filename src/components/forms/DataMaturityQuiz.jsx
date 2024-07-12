import { useState, useEffect } from "react";

// COMPONENTS
import TextInput from "../inputs/TextInput";
import ProgressMeter from "../ProgressMeter";

import { IoMdClose } from "../../../node_modules/react-icons/io";

import "./CenterFormPopup.css";

const DataMaturityQuiz = ({ hidePopup }) => {
  const [stepState, setStepState] = useState(1);
  const formSteps = ["Datos Personales", "Madurez de Datos", "Resultado"];
  const nextStep = () => {
    setStepState(stepState < formSteps.length ? stepState + 1 : stepState);
  };
  const backStep = () => {
    setStepState(stepState > 1 ? stepState - 1 : stepState);
  };

  return (
    <form className="center-form-wrapper">
      <header>
        <ProgressMeter
          currentValue={stepState}
          maxValue={formSteps.length}
          formSteps={formSteps}
        />
      </header>
      <body>
        <TextInput
          label="Nombre completo"
          type="text"
          name="fullName"
          labelInPlaceholder
        />
        <TextInput label="Email" type="text" name="email" labelInPlaceholder />
        <TextInput
          label="Cargo"
          type="text"
          name="position"
          labelInPlaceholder
        />
        <TextInput
          label="Organización"
          type="text"
          name="organization"
          labelInPlaceholder
        />
      </body>
      <footer>
        {stepState === 1 && (
          <button className="center-form-button" onClick={() => hidePopup()}>
            Cancelar
          </button>
        )}
        {stepState > 1 && (
          <button
            type="button"
            className="center-form-button"
            onClick={() => backStep()}
          >
            Atras
          </button>
        )}
        <button
          type="button"
          className="center-form-button"
          onClick={() => nextStep()}
        >
          Siguiente
        </button>
      </footer>
    </form>
  );
};

export default DataMaturityQuiz;
