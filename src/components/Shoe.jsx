import React from "react";

const Shoe = (props) => {
  return (
    <div className="Shoe">
      <figure>
        <img src={props.img} alt={props.style} />
        <figcaption>{props.style}</figcaption>
      </figure>
    </div>
  );
};
export default Shoe;
