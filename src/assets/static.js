export const formQueries = {
  credentialsForm: [
    { name: "First name", inputType: "text" },
    { name: "Last name", inputType: "text" },
    { name: "Country of origin", inputType: "country" },
    { name: "Country of residence", inputType: "country" },
    { name: "Phone number", inputType: "number" },
    { name: "Email address", inputType: "email" },
  ],
};

export function saveForm(formId) {
  const formNode = document.getElementById(formId);
  const data = new FormData(formNode);
  const dataObj = { [formId]: {} };
  for (const [key, value] of data.entries()) {
    dataObj[formId][key] = value;
  }
  return dataObj;
}
