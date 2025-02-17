import React from "react";

const Brands = () => {
  return (
    <section id="brand">
      <div className="container">
        <ul className="brand-area">
          <li className="brand-area--item">
            <img src="./images/premiere.png" alt="Marca 1" />
          </li>
          <li className="brand-area--item">
            <img src="./images/royal_canin.png" alt="Marca 2" />
          </li>
          <li className="brand-area--item">
            <img src="./images/whiskas.png" alt="Marca 3" />
          </li>
          <li className="brand-area--item">
            <img src="./images/benebone.png" alt="Marca 4" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Brands;
