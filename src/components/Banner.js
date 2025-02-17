import React from "react";

function Banner() {
  return (
    <section id="banner">
      <div className="container">
        <div className="banner-area">
          <div className="desc">
            <div>
              <h1>Tudo o que seu pet precisa a Pelos e Patas tem!</h1>
              <p className="text-light">
                Seja para comprar um petisco ou uma roupinha estilosa... basta
                você selecionar o produto, escolher como deseja pagar e pronto!
              </p>
              <a href="#promotion" className="button">
                Conferir destaques
              </a>
            </div>
          </div>
          <div>
            <img src="./images/dog.png" alt="Imagem de um cachorro" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
