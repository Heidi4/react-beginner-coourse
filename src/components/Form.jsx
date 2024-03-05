import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <form>
        <input
          // onChange={(e) => handleChange(e)}
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
      </form>
    </div>
  );
}

export default Form;
