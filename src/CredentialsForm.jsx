import { forwardRef, useRef, useState } from "react";
import CredentialsInputs from "./CredentialsInputs";
import Form from "./Form";

function CredentialsForm({ formId, onCompletion, nextStep, queries }) {
  return (
    <div>
      <Form formId={formId} onCompletion={onCompletion} nextStep={nextStep}>
        <table>
          <tbody>
            {queries.map((query) => {
              return (
                <CredentialsInputs
                  key={query.name}
                  query={query.name}
                  type={query.inputType}
                  form={formId}
                />
              );
            })}
          </tbody>
        </table>
      </Form>
    </div>
  );
}

export default CredentialsForm;
