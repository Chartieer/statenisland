import React, { FC } from "react";
import StoreContext from "../src/store";
const Transactions: FC<any> = ({ transactions, ...props }) => {
  const store = React.useContext(StoreContext);
  console.log(store.transactions);
  return store.transactions.length > 0 ? (
    <div>
      <h2>Pending transactions</h2>
      <ul className="pending">
        {store.transactions.map((transaction, i) => (
          <li key={`${i}-transaction-${Math.random()}`}>{transaction}</li>
        ))}
      </ul>
    </div>
  ) : (
    <div>No Transactions</div>
  );
};

export default Transactions;
