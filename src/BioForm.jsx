import { useState } from "react";

export default function Bio({ formId }) {
  const [inputValue, setInputValue] = useState("");

  function handleTyping(e) {
    setInputValue(e.target.value);
  }

  return (
    <textarea
      name="bio"
      id="bio"
      value={inputValue}
      form={formId}
      onChange={handleTyping}
    ></textarea>
  );
}
