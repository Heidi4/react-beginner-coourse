import React from "react";
import Fruit from "./Fruit";

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
        {fruits.map((fruit) => (
          <Fruit 
          key={fruit.name}
          name={fruit.name} 
          price={fruit.price} 
          emoji={fruit.emoji} />
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
