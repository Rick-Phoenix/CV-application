import { formData } from "./assets/data";

export default function Form({ formId, nextStep, children }) {
  function handleSubmit(e) {
    e.preventDefault();
    nextStep();
    console.log(formData);
  }

  return (
    <div>
      <form action="" id={formId} onSubmit={handleSubmit}>
        {children}
      </form>
    </div>
  );
}
