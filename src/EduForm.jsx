import { useState } from "react";
import Form from "./Form";

export default function EduForm({ formId, onCompletion, nextStep }) {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  return (
    <Form formId={formId} onCompletion={onCompletion} nextStep={nextStep}>
      <table>
        <thead>
          <tr>
            <td>Type of Education</td>
            <td>Institution</td>
            <td>Final Grade</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {/* Move inputs to a separate comp to be able to generate more of them */}
              <select
                name="eduType"
                id="eduType"
                value={inputValue}
                onChange={handleInput}
              >
                <option value="" disabled hidden>
                  Type of Education
                </option>
                <option value=""></option>
              </select>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Form>
  );
}
