// Banner.js

import React from "react";

const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="banner-area">
          <div className="banner--desc">
            <div className="banner--desc--text">
              <h1>Tudo o que seu pet precisa a Pelos e Patas tem!</h1>
              <p className="text-light">
                Seja para comprar um petisco ou uma roupinha estilosa... basta
                você selecionar o produto, escolher como deseja pagar e pronto!
              </p>
              <a href="#produtos" className="button">
                Conferir produtos
              </a>
            </div>
          </div>
          <div className="banner--image">
            <img src="./images/dog.png" alt="Imagem de um cachorro" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
