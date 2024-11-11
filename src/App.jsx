import "./App.css";
import Header from "./header";
import { useEffect, useRef, useState } from "react";
import CredentialsForm from "./CredentialsForm";
import Nav from "./Nav";
import { formQueries } from "./assets/static";
import BioForm from "./BioForm";
import EduForm from "./EduForm";

function App() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState([]);

  const forms = [
    null,
    <CredentialsForm
      onCompletion={saveData}
      key={"credentialsForm"}
      formId={"credentialsForm"}
      nextStep={nextStep}
      queries={formQueries.credentialsForm}
      previousData={data[step]?.credentialsForm}
    />,
    <BioForm
      onCompletion={saveData}
      key={"bioForm"}
      formId={"bioForm"}
      nextStep={nextStep}
      previousData={data[step]?.bioForm}
    />,
    <EduForm
      onCompletion={saveData}
      key={"eduForm"}
      formId={"eduForm"}
      nextStep={nextStep}
      previousData={data[step]?.eduForm}
    />,
  ];

  const currentForm = forms[step]?.props.formId;

  function nextStep() {
    setStep((step) => step + 1);
  }

  function previousStep() {
    setStep((prev) => (prev === 0 ? prev : prev - 1));
  }

  function saveData(newData) {
    setData((prevData) => {
      const updatedData = [...prevData];
      updatedData[step] = newData;
      console.log(updatedData);
      return updatedData;
    });
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
          saveData={saveData}
        />
        {renderForm(step)}
      </div>
    </>
  );
}

export default App;
