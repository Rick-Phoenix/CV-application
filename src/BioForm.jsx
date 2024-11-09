import { useState } from "react";
import Form from "./Form";

export default function BioForm({ formId, onCompletion, nextStep }) {
  const [inputValue, setInputValue] = useState("");

  function handleTyping(e) {
    setInputValue(e.target.value);
  }

  return (
    <Form formId={formId} onCompletion={onCompletion} nextStep={nextStep}>
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
