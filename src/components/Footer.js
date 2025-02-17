import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="fotter-logo">
        <img src="./images/banner_discount.svg" alt="Logo PetFood" />
      </div>
      <address>
        <ul className="address-area">
          <li className="address--item">
            <div className="address--item--image">
              <img src="./images/map.svg" alt="" />
            </div>
            <p className="text-light">
              Avenida Teu Sonho, 1400 <br /> Passo Fundo - RS
            </p>
          </li>
          <li className="address--item">
            <div className="address--item--image">
              <img src="./images/phone.svg" alt="" />
            </div>
            <p className="text-light">
              Whatsapp: 54 9999-9999 Telefone: 54 9992-9992
            </p>
          </li>
          <li className="address--item">
            <div className="address--item--image">
              <img src="./images/clock.svg" alt="" />
            </div>
            <p className="text-light">
              Segunda - Sexta: 7h - 20h Sábado - Domingo: 10h - 19h{" "}
            </p>
          </li>
        </ul>
      </address>
    </footer>
  );
}

export default Footer;
