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

const NameForm = forwardRef(function NameForm(props, ref) {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(ref.current);
    const dataObj = {};
    for (const [key, value] of data.entries()) {
      dataObj[key] = value;
    }
    props.onCompletion(dataObj);
  }

  return (
    <div>
      <form action="" id="credentialsForm" ref={ref} onSubmit={handleSubmit}>
        <table>
          <tbody>
            {queries.map((query) => {
              return (
                <InputField
                  key={query.name}
                  query={query.name}
                  type={query.inputType}
                  form={"credentialsForm"}
                />
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
});

export default NameForm;
