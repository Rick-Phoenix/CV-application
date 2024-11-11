import { useState } from "react";
import Form from "./Form";
import { formData } from "./assets/data";

export default function BioForm({ formId, nextStep }) {
  const previousData = formData?.[formId]?.bio;
  const [inputValue, setInputValue] = useState(previousData || "");

  function handleTyping(e) {
    setInputValue(e.target.value);
    formData.bioForm.bio = e.target.value;
  }

  return (
    <Form formId={formId} nextStep={nextStep}>
      <textarea
        name="bio"
        id="bio"
        value={inputValue}
        form={formId}
        onChange={handleTyping}
        required
      ></textarea>
    </Form>
  );
}
