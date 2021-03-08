import React, { FC, useEffect, useState } from "react";
import Head from "next/head";
import Title from "../components/Title";
import Form from "../components/Form";
import Blocks from "../components/blocks";
import Transactions from "../components/Transactions";
import sha256 from "crypto-js/sha256";

import StateContext, { defaultState } from "../src/store";

export default function Home({ children, ...props }) {
  const [_transactions, setTransactions] = useState(["mongo"]);
  const [_blockchain, setBlockchain] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      writeBlocks();
    }, 5000);

    return () => {
      console.log("clear");
      clearInterval(interval);
    };
  }, [_transactions, _blockchain]);

  const writeBlocks = () => {
    if (_transactions.length === 0) return;

    const prevBlock = _transactions[_transactions.length - 1] ?? {
      hash: "",
    };

    const hash = sha256(
      `${prevBlock.hash}${JSON.stringify(_transactions)}`
    ).toString();

    setTransactions([]);

    setBlockchain([
      ..._blockchain,
      { hash: hash, transactions: _transactions },
    ]);
  };

  const state = {
    transactions: _transactions,
    blockchain: _blockchain,
    get numBlocks() {
      return _blockchain.length;
    },

    updateTransactions(transaction) {
      console.log("update");
      setTransactions([..._transactions, transaction]);
    },
  };

  return (
    <StateContext.Provider value={state}>
      <main className="">
        <Title />
        <Form />
        <Transactions />
        <Blocks />
      </main>
    </StateContext.Provider>
  );
}
