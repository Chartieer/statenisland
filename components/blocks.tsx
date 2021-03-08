import React, { FC, useContext } from "react";
import StateContext from "../src/store";

const Blocks: FC<any> = ({ blockchain, ...props }) => {
  const store = useContext(StateContext);
  return (
    <div>
      <h2>Blocks</h2>
      <ul className="blocks">
        {[...store.blockchain].reverse().map((block) => (
          <li key={block.hash}>
            <h3>{block.hash}</h3>
            <pre>{JSON.stringify(block.transactions)}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blocks;
