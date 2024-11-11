import { useState } from "react";

export default function EduInput({ formId, counter, type, previousData }) {
  const [inputValue, setInputValue] = useState(previousData?.[type] || "");

  function handleInput(e) {
    setInputValue(e.target.value);
    previousData[type] = e.target.value;
  }

  return type === "eduType" ? (
    <td>
      <select
        name={type + counter}
        id={type + counter}
        value={inputValue}
        onChange={handleInput}
        form={formId}
        required
      >
        <option value="" disabled hidden>
          Type of Education
        </option>
        <option value="High School">High School</option>
        <option value="Bachelor's Degree">Bachelor&aposs Degree</option>
        <option value="Master's Degree">Master&aposs Degree</option>
        <option value="PhD">PhD</option>
        <option value="Professional Diploma">Professional Diploma</option>
      </select>
    </td>
  ) : type === "institutionName" ? (
    <td>
      <input
        type="text"
        id={type + counter}
        name={type + counter}
        value={inputValue}
        onChange={handleInput}
        form={formId}
        placeholder="Institution Name"
        required
      />
    </td>
  ) : (
    <td>
      <input
        type="text"
        id={type + counter}
        name={type + counter}
        value={inputValue}
        onChange={handleInput}
        form={formId}
        placeholder="Final Grade"
        required
      />
    </td>
  );
}
