export default function Nav({ step, nextStep, previousStep, form, saveData }) {
  if (step === 0) return <button onClick={nextStep}>{"Let's start!"}</button>;
  else
    return (
      <nav>
        <button type="button" onClick={previousStep}>
          Previous
        </button>
        <button type="submit" form={form}>
          Next
        </button>
      </nav>
    );
}
