import "./App.css";
import Header from "./header";
import { useEffect, useRef, useState } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import Nav from "./Nav";
import { formQueries } from "./assets/static";
import BioForm from "./BioForm";
import EduForm from "./EduForm";
import ProfForm from "./ProfForm";
import { formData } from "./assets/data";
import HobbiesForm from "./HobbiesForm";
import CV from "./CV";

function App() {
  const [step, setStep] = useState(0);

  const forms = [
    null,
    <PersonalInfoForm
      key={"personalInfoForm"}
      formId={"personalInfoForm"}
      nextStep={nextStep}
      queries={formQueries.credentialsForm}
    />,
    <BioForm key={"bioForm"} formId={"bioForm"} nextStep={nextStep} />,
    <EduForm key={"eduForm"} formId={"eduForm"} nextStep={nextStep} />,
    <ProfForm key={"profForm"} formId={"profForm"} nextStep={nextStep} />,
    <HobbiesForm
      key={"hobbiesForm"}
      formId={"hobbiesForm"}
      nextStep={outputCV}
    />,
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

  function outputCV() {
    nextStep();
    setTimeout(() => {
      nextStep();
    }, 4000);
  }

  return (
    <>
      {step < 7 && <Header step={step} />}
      {step < 6 && (
        <Nav
          step={step}
          nextStep={nextStep}
          previousStep={previousStep}
          form={currentForm}
        />
      )}
      {step < 6 && renderForm(step)}
      {step === 7 && <CV />}
    </>
  );
}

export default App;
