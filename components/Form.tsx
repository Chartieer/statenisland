import React, { FC, useContext, useState } from "react";
import StateContext from "../src/store";

interface IForm {
  onSubmit: (event) => {};
}

const Form: FC<IForm> = ({ onSubmit, ...props }) => {
  const store = useContext(StateContext);
  const [message, setMessage] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        store.updateTransactions(message);
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
