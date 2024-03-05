import React from "react";
import Welcome from "./Welcome";
import Code from "./Code";

function Conditional() {
  const display = false;
  if (display) {
return <Welcome></Welcome>
  } else {
    return <Code></Code>
  }
}

export default Conditional;
