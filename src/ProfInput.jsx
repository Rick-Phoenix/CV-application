import { useState } from "react";

export default function ProfInput({ formId, counter, type, previousData }) {
  const [inputValue, setInputValue] = useState(previousData?.[type] || "");

  function handleInput(e) {
    setInputValue(e.target.value);
    previousData[type] = e.target.value;
  }

  return type === "jobTitle" ? (
    <td>
      <input
        name={type + counter}
        id={type + counter}
        value={inputValue}
        onChange={handleInput}
        form={formId}
        placeholder="Job Title"
        required
      />
    </td>
  ) : type === "employer" ? (
    <td>
      <input
        type="text"
        id={type + counter}
        name={type + counter}
        value={inputValue}
        onChange={handleInput}
        form={formId}
        placeholder="Employer"
        required
      />
    </td>
  ) : (
    <td>
      <input
        className="duration"
        type="number"
        id={type + counter}
        name={type + counter}
        value={inputValue}
        onChange={handleInput}
        form={formId}
        placeholder="Duration"
        max={40}
        required
      />{" "}
      years
    </td>
  );
}
