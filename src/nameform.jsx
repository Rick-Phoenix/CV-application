import { useRef, useState } from "react";
import InputField from "./InputField";

const queries = [
  { name: "First name", inputType: "text" },
  { name: "Last name", inputType: "text" },
  { name: "Country of origin", inputType: "country" },
  { name: "Country of residence", inputType: "country" },
  { name: "Phone number", inputType: "number" },
  { name: "Email address", inputType: "email" },
];

export default function NameForm({ previousStep, nextStep, onCompletion }) {
  const formRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(formRef.current);
    const dataObj = {};
    for (const [key, value] of data.entries()) {
      dataObj[key] = value;
    }
    onCompletion(dataObj);
  }

  function handlePrevious() {
    previousStep();
  }

  return (
    <div>
      <form
        action=""
        id="credentialsForm"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <nav>
          <button type="button" onClick={handlePrevious}>
            Previous
          </button>
          <button type="submit">Next</button>
        </nav>
        <table>
          <tbody>
            {queries.map((query) => {
              return (
                <InputField
                  key={query.name}
                  query={query.name}
                  type={query.inputType}
                  form={"credentialsForm"}
                />
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
}
