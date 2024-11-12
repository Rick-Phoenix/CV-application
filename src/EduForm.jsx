import { useRef, useState } from "react";
import Form from "./Form";
import EduInput from "./EduInputFields";
import { formData } from "./assets/data";

export default function EduForm({ formId, nextStep }) {
  const previousData = formData.eduForm;
  const [rows, setRows] = useState(previousData.rows);

  const types = ["eduType", "institutionName", "finalGrade"];

  function handleNewInput() {
    previousData.counter++;
    previousData.rows = [...previousData.rows, { key: previousData.counter }];
    setRows(previousData.rows);
  }

  function handleRemoveInput(key) {
    if (previousData.rows.length === 1) return;
    previousData.rows = previousData.rows.filter((row) => row.key !== key);
    setRows(previousData.rows);
  }

  return (
    <Form formId={formId} nextStep={nextStep}>
      <table>
        <thead>
          <tr>
            <td>Type of Education</td>
            <td>Institution</td>
            <td>Final Grade</td>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr key={row.key}>
                {types.map((type) => {
                  return (
                    <EduInput
                      key={type + row.key}
                      type={type}
                      counter={row.key}
                      formId={formId}
                      previousData={previousData.rows.find(
                        (item) => item.key === row.key
                      )}
                    />
                  );
                })}
                <td>
                  <button type="button" onClick={handleNewInput}>
                    New
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveInput(row.key)}
                  >
                    Remove
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
