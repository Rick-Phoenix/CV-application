import { useRef, useState } from "react";
import Form from "./Form";
import EduInput from "./EduInput";

export default function EduForm({ formId, onCompletion, nextStep }) {
  const [counter, setCounter] = useState(1);
  const rowsCount = Array.from({ length: counter });

  const types = ["eduType", "institutionName", "finalGrade"];

  function renderInputFields() {
    counter.current++;
    return (
      <tr>
        {types.map((type) => {
          return (
            <EduInput
              key={type + counter.current}
              type={type}
              counter={counter.current}
              formId={formId}
            />
          );
        })}
        <td>
          <button type="button" onClick={() => renderInputFields()}>
            New
          </button>
        </td>
      </tr>
    );
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
        <tbody>{}</tbody>
      </table>
    </Form>
  );
}
