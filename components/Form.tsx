import React, { FC, useState } from "react";

interface IForm {
  onSubmit: (event) => {};
}

const Form: FC<IForm> = ({ onSubmit, ...props }) => {
  const [message, setMessage] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        onSubmit(message);
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
