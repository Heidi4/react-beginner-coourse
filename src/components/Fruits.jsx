import React from "react";

function Fruits() {
  //   const fruits = ["Apple", "Pears", "Pineaple", "Mango", "Banana"];
  const fruits = [
    {
      name: "Apple",
      price: 10,
      emoji: "🍎",
    },
    {
      name: "Mango",
      price: 5,
      emoji: "🥭",
    },
    {
      name: "Banana",
      price: 2,
      emoji: "🍌",
    },
    {
      name: "Orange",
      price: 2,
      emoji: "🍊",
    },
    {
      name: "Pears",
      price: 2,
      emoji: "🍐",
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map(fruit => <li key={fruit.name}>{fruit.emoji} {fruit.name} ${fruit.price}</li>)}
      </ul>
    </div>
  );
}

export default Fruits;
