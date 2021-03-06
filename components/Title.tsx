import React, { FC } from "react";

const Title: FC = ({ blocks, ...props }) => {
  const NumberofBlocks = "1";
  return <h1>{blocks}- Blocks</h1>;
};

export default Title;
