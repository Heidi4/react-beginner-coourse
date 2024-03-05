import React from "react";

function Fruits() {
  const fruits = ["Apple", "Pears", "Pineaple", "Mango", "Banana"];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
