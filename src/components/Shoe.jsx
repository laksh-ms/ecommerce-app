import React from "react";

const Shoe = (props) => {
  return (
    <figure className="Shoe">
      <figcaption>{props.style}</figcaption>
      <img src={props.img} alt={props.style} />
      <figcaption>$ {props.price}</figcaption>
    </figure>
  );
};
export default Shoe;
