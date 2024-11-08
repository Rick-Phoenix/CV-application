import "./App.css";
import Header from "./header";
import { useState } from "react";
import NameForm from "./nameform";

function App() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState([]);

  const nextStep = () => setStep((step) => step + 1);
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
        {step === 0 && <button onClick={nextStep}>{"Let's start!"}</button>}
        {step > 0 && (
          <NameForm
            previousStep={previousStep}
            nextStep={nextStep}
            onCompletion={handleNewData}
          />
        )}
      </div>
    </>
  );
}

export default App;
