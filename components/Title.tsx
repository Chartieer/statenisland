import React, { FC, useContext } from "react";
import StateContext from "../src/store";

const Title: FC = ({ blocks, ...props }) => {
  const state = useContext(StateContext);
  console.log("state", state);
  return <h1>{state?.numBlocks} - Blocks</h1>;
};

export default Title;
