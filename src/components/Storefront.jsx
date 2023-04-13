import React from "react";
import inventoryData from "../inventory";
import Shoes from "./Shoes";

const Storefront = () => {
  const inventory = inventoryData;
  //console.log(inventory);
  return (
    <div className="Storefront">
      <h1>New Releases</h1>
      <Shoes items={inventory} />
    </div>
  );
};

export default Storefront;
