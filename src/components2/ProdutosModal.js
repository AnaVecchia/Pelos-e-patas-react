import React, { useState } from "react";

// Componente de modal para exibir detalhes do produto e permitir adição ao carrinho
const ProdutosModal = ({ products, modalProductIndex, closeModal }) => {
  // Estados locais para controlar a quantidade e o tamanho selecionado
  const [modalQt, setModalQt] = useState(1);
  const [selectedSize, setSelectedSize] = useState(0);

  // Função para lidar com o clique em um tamanho disponível
  const handleSizeClick = (sizeIndex) => {
    setSelectedSize(sizeIndex);
  };

  // Função para decrementar a quantidade do produto no modal
  const handleDecrement = () => {
    if (modalQt > 1) {
      setModalQt(modalQt - 1);
    }
  };

  // Função para incrementar a quantidade do produto no modal
  const handleIncrement = () => {
    setModalQt(modalQt + 1);
  };

  // Função chamada ao adicionar o produto ao carrinho
  const addToCart = () => {
    // Obtém o produto selecionado
    const selectedProduct = products[modalProductIndex];
    // Cria um objeto representando o item a ser adicionado ao carrinho
    const cartItem = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      size: selectedProduct.sizes[selectedSize],
      quantity: modalQt,
      price: selectedProduct.price,
    };

    // Aqui você pode adicionar lógica para adicionar o item ao carrinho,
    // como chamar uma função de atualização de carrinho passada como propriedade.

    // Agora renderizamos o conteúdo do modal
    return (
      <div className="products-modal">
        <div className="products-modal--area">
          <div className="products-modal--image">
            <img src={products[modalProductIndex].img} alt="Product Image" />
          </div>
          <div className="products-modal--info">
            {/* Exibe o nome do produto */}
            <h1 className="orange-text">{products[modalProductIndex].name}</h1>
            {/* Exibe a descrição do produto */}
            <p className="small-text">
              {products[modalProductIndex].description}
            </p>

            <h3>TAMANHO</h3>
            {/* Exibe os tamanhos disponíveis e permite a seleção */}
            <div className="products-modal--sizes">
              {products[modalProductIndex].sizes.map((size, index) => (
                <div
                  key={index}
                  data-key={index}
                  className={`products-modal--size ${
                    selectedSize === index ? "selected" : ""
                  }`}
                  onClick={() => handleSizeClick(index)}
                >
                  <p className="bold-text">{size}</p>
                </div>
              ))}
            </div>

            <div>
              <h3>PREÇO</h3>
              {/* Exibe o preço do produto */}
              <div className="products-modal--price">
                <h1 className="text-dark products-modal--actualPrice">
                  R$ {products[modalProductIndex].price}
                </h1>
                {/* Permite ajustar a quantidade do produto */}
                <div className="products-modal--qtarea">
                  <button
                    className="products-modal--qtmenos"
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <div className="products-modal--qt">{modalQt}</div>
                  <button
                    className="products-modal--qtmais"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Botões para adicionar ao carrinho ou fechar o modal */}
            <div className="products-modal--buttons">
              <a
                href="#"
                className="button products-modal--button-add"
                onClick={addToCart}
              >
                Adicionar ao carrinho
              </a>
              <a
                href="#"
                className="text-dark products-modal--button-close"
                onClick={closeModal}
              >
                Cancelar
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

// Exporta o componente para uso em outros arquivos
export default ProdutosModal;
