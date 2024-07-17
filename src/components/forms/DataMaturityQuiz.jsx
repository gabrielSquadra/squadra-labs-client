import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// COMPONENTS
import TextInput from "../inputs/TextInput";
import ProgressMeter from "../ProgressMeter";

import "./CenterFormPopup.css";

const DataMaturityQuiz = ({ hidePopup }) => {
  const [stepState, setStepState] = useState(1);
  const formSteps = ["Datos Personales", "Madurez de Datos", "Resultado"];

  const schema = yup.object({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    position: yup.string().required(),
    organization: yup.string().required(),
  });

  const { register, handleSubmit, formState, trigger, watch } = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      setStepState(stepState < formSteps.length ? stepState + 1 : stepState);
    }
  };

  const backStep = () => {
    setStepState(stepState > 1 ? stepState - 1 : stepState);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="center-form-wrapper" onSubmit={handleSubmit(onSubmit)}>
      <header>
        <ProgressMeter
          currentValue={stepState}
          maxValue={formSteps.length}
          formSteps={formSteps}
        />
      </header>
      {stepState === 1 && (
        <div className="center-form-body">
          <TextInput
            label="Nombre completo"
            type="text"
            name="fullName"
            error={errors.fullName}
            register={register}
            trigger={trigger}
            watch={watch}
            labelInPlaceholder
          />
          <TextInput
            label="Email"
            type="text"
            name="email"
            error={errors.email}
            register={register}
            trigger={trigger}
            watch={watch}
            labelInPlaceholder
          />
          <TextInput
            label="Cargo"
            type="text"
            name="position"
            error={errors.position}
            register={register}
            trigger={trigger}
            watch={watch}
            labelInPlaceholder
          />
          <TextInput
            label="Organización"
            type="text"
            name="organization"
            error={errors.organization}
            register={register}
            trigger={trigger}
            watch={watch}
            labelInPlaceholder
          />
        </div>
      )}
      <footer>
        {stepState === 1 && (
          <button
            className="center-form-button"
            type="button"
            onClick={hidePopup}
          >
            Cancelar
          </button>
        )}
        {stepState > 1 && (
          <button
            type="button"
            className="center-form-button"
            onClick={backStep}
          >
            Atras
          </button>
        )}
        {stepState < formSteps.length && (
          <button
            type="button"
            className="center-form-button"
            onClick={nextStep}
          >
            Siguiente
          </button>
        )}
        {stepState === formSteps.length && (
          <button type="submit" className="center-form-button">
            Confirmar
          </button>
        )}
      </footer>
    </form>
  );
};

export default DataMaturityQuiz;
