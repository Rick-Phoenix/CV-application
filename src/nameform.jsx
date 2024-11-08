import { useState } from "react";
import InputField from "./InputField";

const queries = [
  { name: "First name", inputType: "text" },
  { name: "Last name", inputType: "text" },
  { name: "Country of origin", inputType: "country" },
  { name: "Country of residence", inputType: "country" },
  { name: "Phone number", inputType: "number" },
  { name: "Email address", inputType: "email" },
];

export default function NameForm({ previousStep, nextStep }) {
  const [queryId, setQueryId] = useState(0);
  const [info, setInfo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleNext() {
    if (queryId === queries.length - 1) return nextStep();
    setQueryId((id) => id + 1);
  }

  function handlePrevious() {
    if (info.length === 0 && queryId === 0) return previousStep();
    setInfo((info) => info.slice(0, -1));
    if (queryId !== 0) setQueryId((id) => id - 1);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <nav>
          <button type="button" onClick={handlePrevious}>
            Previous
          </button>
          <button type="button" onClick={handleNext}>
            Next
          </button>
        </nav>
        <table>
          <tbody>
            {queries.map((query) => {
              return (
                <InputField
                  key={query.name}
                  query={query.name}
                  type={query.inputType}
                />
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
}
