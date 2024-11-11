export function createFormObject(formId) {
  const formNode = document.getElementById(formId);
  const data = new FormData(formNode);
  const dataObj = { [formId]: {} };
  for (const [key, value] of data.entries()) {
    dataObj[formId][key] = value;
  }
  return dataObj;
}
