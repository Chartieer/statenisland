import React, { FC, useState } from "react";

const Form: FC = () => {
  const [message, setMessage] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // ... implement State solution
        setMessage("");
      }}
    >
      <input
        type="input"
        value={message}
        placeholder="message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        required
      />
      <button type="submit">add</button>
    </form>
  );
};

export default Form;
