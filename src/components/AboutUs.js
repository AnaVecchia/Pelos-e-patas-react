import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <img
          src="./images/dog_and_cat.png"
          alt="Cachorro e Gato"
          className="about-area--image"
        />

        <div className="about-area--desc">
          <h4>Sobre nós</h4>
          <h2>O melhor para seu pet</h2>
          <p>
            A nossa missão é fornecer itens essenciais para animais de estimação
            com alta qualidade, garantindo o bem-estar e a felicidade deles.
          </p>

          <ul className="about-area--list">
            <li>Produtos de alta qualidade</li>
            <li>Variedade de opções para cada necessidade</li>
            <li>Atendimento ao cliente excepcional</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
