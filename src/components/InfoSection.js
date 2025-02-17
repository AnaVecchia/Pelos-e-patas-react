import React from "react";

function InfoSection() {
  return (
    <section className="info">
      <div className="container">
        <img className="info-image" src="../images/paw.svg" alt="" />
        <ul className="info-area">
          <RenderInfoCard
            title="ENTREGA EXPRESS"
            description="Entrega express para toda cidade de Passo Fundo"
            icon="/truck.svg"
          />

          <RenderInfoCard
            title="MELHORES MARCAS"
            description="Vendemos apenas produtos que confiamos"
            icon="/handbag.svg" // Assuming you want to use an icon for this as well
          />

          <RenderInfoCard
            title="COMPRA SEGURA"
            description="Pagamentos processados pelo mercado pago"
            icon="/card.svg" // Fixing the typo here as well
          />
        </ul>
      </div>
    </section>
  );
}

function RenderInfoCard({ title, description, icon }) {
  return (
    <li className="info-card" key={title}>
      <div className="info-card-image">
        <img src={`../images/${icon}`} alt={`Ícone de ${title}`} />
      </div>
      <div className="info-card-desc">
        <div className="info-card-desc-text">
          <h3>{title}</h3>
          <p className="small-text">{description}</p>
        </div>
      </div>
    </li>
  );
}

export default InfoSection;
