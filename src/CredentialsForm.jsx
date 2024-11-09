import { forwardRef, useRef, useState } from "react";
import InputField from "./InputField";

const queries = [
  { name: "First name", inputType: "text" },
  { name: "Last name", inputType: "text" },
  { name: "Country of origin", inputType: "country" },
  { name: "Country of residence", inputType: "country" },
  { name: "Phone number", inputType: "number" },
  { name: "Email address", inputType: "email" },
];

const CredentialsForm = forwardRef(function CredentialsForm(props, ref) {
  function handleSubmit(e) {
    e.preventDefault();
    const formNode = document.getElementById(props.formId);
    const data = new FormData(formNode);
    const dataObj = {};
    for (const [key, value] of data.entries()) {
      dataObj[key] = value;
    }
    props.onCompletion(dataObj);
    props.nextStep();
  }

  return (
    <div>
      <form action="" id={props.formId} ref={ref} onSubmit={handleSubmit}>
        <table>
          <tbody>
            {queries.map((query) => {
              return (
                <InputField
                  key={query.name}
                  query={query.name}
                  type={query.inputType}
                  form={props.formId}
                />
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
});

export default CredentialsForm;
