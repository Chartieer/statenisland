import React, { FC } from "react";

const Transactions: FC = () => {
  const store = [];

  return store.length > 0 ? (
    <div>
      <h2>Pending transactions</h2>
      <ul className="pending">
        {store.map((transaction, i) => (
          <li key={i}>{transaction}</li>
        ))}
      </ul>
    </div>
  ) : (
    <div>No Transactions</div>
  );
};

export default Transactions;
