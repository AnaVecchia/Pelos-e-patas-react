import React from "react";
import { Link } from "react-router-dom";
import "../header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header-area">
          <Link to="/">
            <img
              src="./images/Pelos_Patas.png"
              width="100px"
              alt="Logo PetFood"
            />
          </Link>
          <nav>
            <ul className="menu-area">
              <li className="menu--item">
                <Link to="#header">Início</Link>
              </li>
              <li className="menu--item">
                <a href="#about">Sobre</a>
              </li>
              <li className="menu--item">
                <a href="./home2">Produtos</a>
              </li>
              <li className="menu--item">
                <a href="#footer">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
