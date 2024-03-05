import React from "react";

function Fruit({ name, price, emoji, soldout }) {
  return (
    <>
    <li>{emoji} {name} {price} {soldout ? "Sold out" : ""}</li>
       
      {/* {price > 5 ? (
        <li>
          {emoji} {name} {price}
        </li>
      ) : (
        ""
      )} */}
    </>
  );
}

export default Fruit;
