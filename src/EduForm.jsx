import { useRef, useState } from "react";
import Form from "./Form";
import EduInput from "./EduInput";

export default function EduForm({ formId, onCompletion, nextStep }) {
  const [counter, setCounter] = useState(1);
  const rowsCount = Array.from({ length: counter }, (v, i) => i + 1);
  console.log(rowsCount);

  const types = ["eduType", "institutionName", "finalGrade"];

  function handleNewInput() {
    setCounter((c) => c + 1);
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
          {rowsCount.map((row) => {
            return (
              <tr key={row}>
                {types.map((type) => {
                  return (
                    <EduInput
                      key={type + row}
                      type={type}
                      counter={row}
                      formId={formId}
                    />
                  );
                })}
                <td>
                  <button type="button" onClick={handleNewInput}>
                    New
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Form>
  );
}
