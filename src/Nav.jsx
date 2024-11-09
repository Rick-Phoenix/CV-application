import { useEffect } from "react";

export default function Nav({ step, nextStep, previousStep, form }) {
  console.log(step, form);
  if (step === 0) return <button onClick={nextStep}>{"Let's start!"}</button>;
  else
    return (
      <nav>
        <button type="button" onClick={previousStep}>
          Previous
        </button>
        <button
          type="submit"
          onClick={() => {
            console.log(form);
          }}
          form={form}
        >
          Next
        </button>
      </nav>
    );
}
