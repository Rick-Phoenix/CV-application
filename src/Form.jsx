export default function Form({ formId, onCompletion, nextStep, children }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formNode = document.getElementById(formId);
    const data = new FormData(formNode);
    const dataObj = { [formId]: {} };
    for (const [key, value] of data.entries()) {
      dataObj[formId][key] = value;
    }
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
