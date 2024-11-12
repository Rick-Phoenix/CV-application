import { useState } from "react";

export default function HobbiesInput({ formId, counter, type, previousData }) {
  const [inputValue, setInputValue] = useState(previousData?.[type] || "");

  function handleInput(e) {
    setInputValue(e.target.value);
    previousData[type] = e.target.value;
  }

  return (
    <td>
      <input
        name={type + counter}
        id={type + counter}
        value={inputValue}
        onChange={handleInput}
        form={formId}
        placeholder="Hobby / Passion"
        required
      />
    </td>
  );
}
