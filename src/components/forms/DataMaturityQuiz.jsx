import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// COMPONENTS
import TextInput from "../inputs/TextInput";
import ProgressMeter from "../ProgressMeter";

import "./CenterFormPopup.css";
import MultiRadioButtonsInput from "../inputs/MultiRadioButtonsInput";

const DataMaturityQuiz = ({ hidePopup }) => {
  const [stepState, setStepState] = useState(1);
  const formSteps = ["Datos Personales", "Madurez de Datos", "Resultado"];
  const [questionsList, setQuestionsList] = useState([
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?",
    "Excepteur sint occaecat cupidatat non proident. unt in culpa qui officia deserunt mollit anim id est laborum?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?",
    "Excepteur sint occaecat cupidatat non proident. unt in culpa qui officia deserunt mollit anim id est laborum?",
  ]);

  const quizRequirementsGenerator = () => {
    const requirements = {};
    for (let i = 0; i < questionsList.length; i++) {
      requirements[`question-${i}`] = yup.string().required();
    }
    return requirements;
  };

  const quizRequirementsList =
    stepState === 2 ? quizRequirementsGenerator() : {};

  const schema = yup.object({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    position: yup.string().required(),
    organization: yup.string().required(),
    ...quizRequirementsList,
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
    nextStep();
  };

  return (
    <form className="center-form-wrapper" onSubmit={handleSubmit(onSubmit)}>
      <header>
        <h2 className="center-form-title">¡Test de maduración de datos!</h2>
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
          <footer>
            <button
              className="center-form-button"
              type="button"
              onClick={hidePopup}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="center-form-button"
              onClick={nextStep}
            >
              Siguiente
            </button>
          </footer>
        </div>
      )}
      {stepState === 2 && (
        <div className="center-form-body">
          {questionsList.map((question, i) => {
            const name = `question-${i}`;
            return (
              <MultiRadioButtonsInput
                key={name}
                question={question}
                name={name}
                error={errors[name]}
                register={register}
                trigger={trigger}
                watch={watch}
              />
            );
          })}
          <footer>
            <button
              type="button"
              className="center-form-button"
              onClick={backStep}
            >
              Atras
            </button>{" "}
            <button type="submit" className="center-form-button">
              Confirmar
            </button>
          </footer>
        </div>
      )}
      {stepState === 3 && (
        <div className="center-form-body">
          Muchas Gracias!
          <footer>
            <button
              type="buttn"
              className="center-form-button"
              onClick={hidePopup}
            >
              Cerrar
            </button>
          </footer>
        </div>
      )}
    </form>
  );
};

export default DataMaturityQuiz;
