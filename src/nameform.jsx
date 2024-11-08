import { useState } from "react";

const queries = [
  "First name",
  "Last name",
  "Country of origin",
  "Country of residence",
  "Phone number",
  "Email address",
];

export default function NameForm({ previousStep, nextStep }) {
  const [input, setInput] = useState("");
  const [queryId, setQueryId] = useState(0);
  const [info, setInfo] = useState([]);
  const query = queries[queryId];

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleTyping(e) {
    setInput(e.target.value);
  }

  function handleNext() {
    const newData = { data: query, value: input };
    setInfo((info) => [...info, newData]);
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
                <tr key={query}>
                  <td>
                    <label htmlFor={query}>{query}:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder={query}
                      value={input}
                      id={query}
                      onChange={handleTyping}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
}
