import "./App.css";
import Header from "./header";
import { useEffect, useRef, useState } from "react";
import NameForm from "./nameform";
import Nav from "./nav";

function App() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState([]);
  const [currentForm, setCurrentForm] = useState(null);

  const nextStep = () => {
    setStep((step) => step + 1);
  };

  const previousStep = () => setStep((prev) => (prev === 1 ? prev : prev - 1));

  function handleNewData(newData) {
    setData((prevData) => {
      const updatedData = [...prevData];
      updatedData[step - 1] = newData;
      console.log(updatedData);
      return updatedData;
    });
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
        {step > 0 && (
          <NameForm
            ref={(node) => setCurrentForm(() => node)}
            onCompletion={handleNewData}
          />
        )}
      </div>
    </>
  );
}

export default App;
