import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header2 = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header id="header">
      <div className="container">
        <div className="header-area">
          <Link to="/principal">
            <img
              src="./images/Pelos_Patas.png"
              width="200px"
              alt="Logo PetFood"
            />
          </Link>
          <nav>
            <div className="menu-mobile">
              <img src="./images/images/menu.svg" alt="Menu" />
            </div>
            <li
              className={`cart-mobile ${isCartOpen ? "cart-open" : ""}`}
              onClick={toggleCart}
            >
              🛒
            </li>
            <ul className="menu-area">
              <li className="menu--item">
                <Link to="/home">Início</Link>
              </li>
              <li className="menu--item">
                <Link to="/home">Sobre</Link>
              </li>
              <li className="menu--item">
                <Link to="#produtos">Loja</Link>
              </li>
              <li className="menu--item">
                <Link to="/home">Contato</Link>
              </li>
              <li className="menu--item" onClick={toggleCart}>
                🛒
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <ul
            className={`menu-mobile-area ${
              isCartOpen ? "cart-open" : "closed"
            }`}
          >
            <li className="menu-mobile--item">
              <Link to="#header">INÍCIO</Link>
            </li>
            <li className="menu-mobile--item">
              <Link to="#about">SOBRE</Link>
            </li>
            <li className="menu-mobile--item">
              <Link to="/produtos">Loja</Link>
            </li>
            <li className="menu-mobile--item">
              <Link to="#footer">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header2;
