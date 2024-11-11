import { useEffect } from "react";
import { saveForm } from "./assets/static";

export default function Nav({ step, nextStep, previousStep, form, saveData }) {
  function handlePrevious() {
    const dataObj = saveForm(form);
    saveData(dataObj);
    previousStep();
  }

  if (step === 0) return <button onClick={nextStep}>{"Let's start!"}</button>;
  else
    return (
      <nav>
        <button type="button" onClick={handlePrevious}>
          Previous
        </button>
        <button type="submit" form={form}>
          Next
        </button>
      </nav>
    );
}
