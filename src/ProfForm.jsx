import { useState } from "react";
import Form from "./Form";
import ProfInput from "./ProfInput";
import { formData } from "./assets/data";

export default function ProfForm({ formId, nextStep }) {
  const previousData = formData.profForm;
  const [rows, setRows] = useState(previousData.rows);

  const types = ["jobTitle", "employer", "duration"];

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
            <td>Job Title</td>
            <td>Employer</td>
            <td>Duration</td>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr key={row.key}>
                {types.map((type) => {
                  return (
                    <ProfInput
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
