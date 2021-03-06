import React, { FC } from "react";

const Blocks: FC<any> = ({ blockchain, ...props }) => {
  return (
    <div>
      <h2>Blocks</h2>
      <ul className="blocks">
        {[...blockchain].reverse().map((block) => (
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
