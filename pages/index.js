import Head from "next/head";
import Title from "../components/Title";
import Form from "../components/Form";
import Blocks from "../components/blocks";
import Transactions from "../components/Transactions";

export default function Home({ children, ...props }) {
  return (
    <div className="">
      <Head>
        <title>State(n+1) Island</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Title />
        <Form />
        <Transactions />
        <Blocks />
      </main>

      <footer className=""></footer>
    </div>
  );
}
