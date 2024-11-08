import "./App.css";
import Header from "./header";
import { useRef, useState } from "react";
import NameForm from "./nameform";
import Nav from "./nav";

function App() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState([]);

  const formRef = useRef(null);

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
        <Nav step={step} nextStep={nextStep} previousStep={previousStep} />
        {step > 0 && (
          <NameForm
            ref={formRef}
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
