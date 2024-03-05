import React from "react";
import Welcome from "./Welcome";
import Code from "./Code";

function Conditional() {
  const display = true;

  return display ? <Welcome></Welcome> : <Code />;
}

export default Conditional;
