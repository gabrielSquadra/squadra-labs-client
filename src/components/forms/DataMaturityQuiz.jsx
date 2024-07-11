// COMPONENTS
import TextInput from "../inputs/TextInput";
import ProgressMeter from "../ProgressMeter";

import { IoMdClose } from "../../../node_modules/react-icons/io";

import "./CenterFormPopup.css";

const DataMaturityQuiz = ({ hidePopup }) => {
  return (
    <form className="center-form-wrapper">
      <header>
        <button
          className="center-form-close-button"
          onClick={() => hidePopup()}
        >
          <IoMdClose className="center-form-close-button-icon" />
        </button>
        <ProgressMeter />
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
      <footer></footer>
    </form>
  );
};

export default DataMaturityQuiz;
