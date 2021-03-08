import React from "react";

type IBlockchain = {
  hash: string;
  transactions: string[];
};

interface IState {
  transactions: any;
  blockchain: IBlockchain[];
  numBlocks: () => number;
  updateTransactions: (transaction: string) => void;
}
export const defaultState: IState = {
  transactions: ["eins", "zwei"],
  blockchain: [{ hash: "876556zuihkjhg", transactions: ["123", "123"] }],
  numBlocks: 1,

  updateTransactions(transaction) {
    // this.transactions.push(transaction);
    // console.log("saveTransactions", this.transactions);
  },
};

export const StateContext = React.createContext(defaultState);

export default StateContext;
