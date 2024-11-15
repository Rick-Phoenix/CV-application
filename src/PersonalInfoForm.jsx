import { forwardRef, useRef, useState } from "react";
import PersonalInfoInputs from "./PersonalInfoInputs";
import Form from "./Form";
import { formData } from "./assets/data";

function PersonalInfoForm({ formId, nextStep, queries }) {
  const previousData = formData?.[formId];

  return (
    <div>
      <Form formId={formId} nextStep={nextStep}>
        <table>
          <tbody>
            {queries.map((query) => {
              return (
                <PersonalInfoInputs
                  key={query.name}
                  query={query.name}
                  type={query.inputType}
                  form={formId}
                  previousData={previousData?.[query.name]}
                />
              );
            })}
          </tbody>
        </table>
      </Form>
    </div>
  );
}

export default PersonalInfoForm;
