import React from "react";
import Shoe from "./Shoe";

const Shoes = (props) => {
  return (
    <main>
      <section className="shoes-wrapper">
        <div className="row">
          {props.items.map((shoe, index) => (
            <div className="col-3" key={index}>
              <Shoe style={shoe.style} img={shoe.img} price={shoe.price} />
            </div>
          ))}
        </div>
      </section>
      <section className="cart-wrapper">
        <h3>Cart Total: $</h3>
      </section>
    </main>
  );
};

export default Shoes;
