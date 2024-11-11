import "./App.css";
import Header from "./header";
import { useEffect, useRef, useState } from "react";
import CredentialsForm from "./CredentialsForm";
import Nav from "./Nav";
import { formQueries } from "./assets/static";
import BioForm from "./BioForm";
import EduForm from "./EduForm";
import ProfForm from "./ProfForm";
import { formData } from "./assets/data";

function App() {
  const [step, setStep] = useState(0);

  const forms = [
    null,
    <CredentialsForm
      key={"credentialsForm"}
      formId={"credentialsForm"}
      nextStep={nextStep}
      queries={formQueries.credentialsForm}
    />,
    <BioForm key={"bioForm"} formId={"bioForm"} nextStep={nextStep} />,
    <EduForm key={"eduForm"} formId={"eduForm"} nextStep={nextStep} />,
    <ProfForm key={"profForm"} formId={"profForm"} nextStep={nextStep} />,
  ];

  const currentForm = forms[step]?.props.formId;

  function nextStep() {
    setStep((step) => step + 1);
  }

  function previousStep() {
    setStep((prev) => (prev === 0 ? prev : prev - 1));
  }

  function renderForm(step) {
    return forms[step];
  }

  return (
    <>
      <div className="wrapper">
        <Header step={step} />
        <Nav
          step={step}
          nextStep={nextStep}
          previousStep={previousStep}
          form={currentForm}
        />
        {renderForm(step)}
      </div>
    </>
  );
}

export default App;
