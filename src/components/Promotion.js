import React from "react";

function Promotion() {
  return (
    <section id="promotion">
      <div className="container">
        <h2>Destaque da semana</h2>
        <div className="promotion-area">
          <div className="promotion-featured">
            <img
              className="promotion--img"
              src="./images/dog food.png"
              alt="Imagem ração para gatos e cachorros"
            />
            <h2 className="medium-text">Produtos de qualidade</h2>
            <p>
              Encontre medicamentos, petiscos, rações, brinquedos educativos e
              outros objetos indispensáveis em nossa loja online.
            </p>
            <a href="#" className="orange-text">
              Ver mais produtos
            </a>
          </div>
          <div className="promotion-products">
            <div className="promotion-products--item">
              <img
                className="promotion-products--item--image"
                src="./images/golden_gatos_frango.png"
                alt="Imagem da ração de frango para gatos Golden"
              />
              <h5>Golden</h5>
              <p className="small-text bold-text">
                Ração Golden para Gatos Adultos Sabor Frango
              </p>
              <h3>R$30,00</h3>
            </div>
            <div className="promotion-products--item">
              <img
                className="promotion-products--item--image"
                src="./images/royal_canin_maxi.png"
                alt="Imagem da ração de frango para gatos Golden"
              />
              <h5>Royal Canin</h5>
              <p className="small-text bold-text">
                Ração Royal Canin Maxi - Cães Adultos
              </p>
              <h3>R$212,00</h3>
            </div>
            <div className="promotion-products--item">
              <img
                className="promotion-products--item--image"
                src="./images/recovery_roytal_canin.png"
                alt="Imagem da ração de frango para gatos Golden"
              />
              <h5>Royal Canin</h5>
              <p className="small-text bold-text">
                Recovery Royal Canin Veterinary Ração Lata
              </p>
              <h3>R$25,80</h3>
            </div>
            <div className="promotion-products--item">
              <img
                className="promotion-products--item--image"
                src="./images/peitoral_zeedog.png"
                alt="Imagem da ração de frango para gatos Golden"
              />
              <h5>Zoo</h5>
              <p className="small-text bold-text">
                Peitoral para Cachorros Air Mesh Phantom
              </p>
              <h3>R$136,99</h3>
            </div>
            <div className="promotion-products--item">
              <img
                className="promotion-products--item--image"
                src="./images/ração_umida_whiskas.png"
                alt="Imagem da ração de frango para gatos Golden"
              />
              <h5>Whiskas</h5>
              <p className="small-text bold-text">
                Whiskas Sachê Adulto Carne Molho
              </p>
              <h3>R$4,99</h3>
            </div>
            <div className="promotion-products--item">
              <img
                className="promotion-products--item--image"
                src="./images/areia_pipicat.png"
                alt="Imagem da ração de frango para gatos Golden"
              />
              <h5>Pipicat</h5>
              <p className="small-text bold-text">
                Areia Sanitária Pipicat Classic para Gatos
              </p>
              <h3>R$22,90</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promotion;
