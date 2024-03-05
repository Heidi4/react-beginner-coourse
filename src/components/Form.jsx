import React, { useState } from "react";

function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <form>
        {name.firstName} - {name.lastName}
        <p></p>
        <input
          // onChange={(e) => handleChange(e)}
          type="text"
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          value={name.firstName}
          placeholder=" Firstname"
        />
        <input
          type="text"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          value={name.lastName}
          placeholder="Lastname"
        />
      </form>
    </div>
  );
}

export default Form;
