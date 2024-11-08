import "./App.css";
import Header from "./header";
import { useState } from "react";
import NameForm from "./nameform";

function App() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((step) => step + 1);
  const previousStep = () => setStep((prev) => (prev === 1 ? prev : prev - 1));

  return (
    <>
      <div className="wrapper">
        <Header step={step} />
        {step === 0 && <button onClick={nextStep}>{"Let's start!"}</button>}
        {step > 0 && (
          <NameForm previousStep={previousStep} nextStep={nextStep} />
        )}
      </div>
    </>
  );
}

export default App;
