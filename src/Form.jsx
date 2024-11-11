import { saveForm } from "./assets/static";

export default function Form({ formId, onCompletion, nextStep, children }) {
  function handleSubmit(e) {
    e.preventDefault();
    const dataObj = saveForm(formId);
    onCompletion(dataObj);
    nextStep();
  }

  return (
    <div>
      <form action="" id={formId} onSubmit={handleSubmit}>
        {children}
      </form>
    </div>
  );
}
