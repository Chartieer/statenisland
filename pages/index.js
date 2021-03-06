import React, { FC, useEffect, useState } from "react";
import Head from "next/head";
import Title from "../components/Title";
import Form from "../components/Form";
import Blocks from "../components/blocks";
import Transactions from "../components/Transactions";
import sha256 from "crypto-js/sha256";

export default function Home({ children, ...props }) {
  const [transactions, setTransactions] = useState([]);
  const [blockchain, setBlockchain] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      writeBlocks();
    }, 5000);

    return () => {
      console.log("clear");
      clearInterval(interval);
    };
  }, [transactions, blockchain]);

  const saveTransactions = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const writeBlocks = () => {
    if (transactions.length === 0) return;

    const prevBlock = transactions[transactions.length - 1] ?? {
      hash: "",
    };

    const hash = sha256(
      `${prevBlock.hash}${JSON.stringify(transactions)}`
    ).toString();

    setTransactions([]);

    setBlockchain([...blockchain, { hash: hash, transactions: transactions }]);
  };

  return (
    <main className="">
      <Title blocks={blockchain.length} />
      <Form onSubmit={saveTransactions} />
      <Transactions transactions={transactions} />
      <Blocks blockchain={blockchain} />
    </main>
  );
}
