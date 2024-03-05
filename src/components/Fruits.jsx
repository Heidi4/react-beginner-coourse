import React from "react";
import Fruit from "./Fruit";

function Fruits() {
  //   const fruits = ["Apple", "Pears", "Pineaple", "Mango", "Banana"];
  const fruits = [
    {
      name: "Apple",
      price: 10,
      emoji: "🍎",
      soldout: true,
    },
    {
      name: "Mango",
      price: 5,
      emoji: "🥭",
      soldout: true,
    },
    {
      name: "Banana",
      price: 9,
      emoji: "🍌",
      soldout: false,
    },
    {
      name: "Orange",
      price: 6,
      emoji: "🍊",
      soldout: false,
    },
    {
      name: "Pears",
      price: 2,
      emoji: "🍐",
      soldout: true,
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
          emoji={fruit.emoji}
          soldout={fruit.soldout} />
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
