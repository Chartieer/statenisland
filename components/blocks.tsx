import React, { FC } from "react";

const Blocks: FC = () => {
  const blocks = [];

  return (
    <div>
      <h2>Blocks</h2>
      <ul className="blocks">
        {[...blocks].reverse().map((block) => (
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
