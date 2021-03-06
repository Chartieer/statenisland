import React, { FC } from "react";

const Transactions: FC<any> = ({ transactions, ...props }) => {
  const store = [];

  return transactions.length > 0 ? (
    <div>
      <h2>Pending transactions</h2>
      <ul className="pending">
        {transactions.map((transaction, i) => (
          <li key={i}>{transaction}</li>
        ))}
      </ul>
    </div>
  ) : (
    <div>No Transactions</div>
  );
};

export default Transactions;
