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
  const formSteps = ["Datos Personales", "Test", "Resultado"];
  const [questionsList, setQuestionsList] = useState([
    "¿Qué tan frecuente es que no tenga los datos actualizados para realizar los análisis que necesitas?",
    "¿Qué tan difícil es poder acceder a los datos de la organización? ¿Qué tan frecuente es que no pueda acceder a los datos de la organización por sí solo y necesite del equipo IT para poder resolver estos problemas?",
    "Cuando observa los datos de su organización, ¿cuán frecuente es que haya dudas sobre si son correctos? (Actualizados, sin errores, sin valores anormales, sin faltantes)",
    "Del 1 al 5, ¿qué tan dispersa se encuentra la información en su empresa? ¿Necesita revisar varios lugares y archivos para poder empezar a realizar un análisis?",
    "¿Qué tan frecuente es en su organización, que se tomen decisiones basadas en datos?",
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
          <p style={{textAlign: "center"}}>
            Seleccione la opción correcta, donde 1 indica que es poco frecuente
            y 5 que es muy frecuente en su organización. Al finalizar el
            cuestionario, podrá ver el nivel de madurez de datos con el que
            cuenta actualmente.
          </p>
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
