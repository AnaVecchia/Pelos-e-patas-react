import React from "react";

// Componente de carrinho que exibe os produtos no modal do carrinho
const CartModal = ({ cart, updateCart }) => {
  // Função para lidar com o aumento da quantidade de um item no carrinho
  const handleAddQuantity = (index) => {
    // Cria uma cópia do carrinho atual para evitar mutações diretas
    const updatedCart = [...cart];
    // Aumenta a quantidade do item no índice específico
    updatedCart[index].qt += 1;
    // Atualiza o carrinho com a nova quantidade
    updateCart(updatedCart);
  };

  // Função para lidar com a redução da quantidade de um item no carrinho
  const handleRemoveQuantity = (index) => {
    // Cria uma cópia do carrinho atual para evitar mutações diretas
    const updatedCart = [...cart];
    // Verifica se a quantidade do item é maior que 1 antes de diminuir
    if (updatedCart[index].qt > 1) {
      // Diminui a quantidade do item no índice específico
      updatedCart[index].qt -= 1;
      // Atualiza o carrinho com a nova quantidade
      updateCart(updatedCart);
    }
  };

  return (
    <div className="cart-modal">
      {cart ? (
        // Mapeia os itens do carrinho e exibe cada um deles
        cart.map((item, index) => (
          <div key={index} className="cart-product">
            <div className="cart-product--image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cart-product--desc">
              <div className="cart-product--text">
                {/* Exibe a marca do produto */}
                <p className="products-cart--brand small-text">{item.brand}</p>
                {/* Exibe o nome do produto */}
                <h5 className="products-cart--name text-dark bold-text">
                  {item.name}
                </h5>
                {/* Exibe o preço do produto */}
                <h3 className="products-cart--price">
                  R$ {item.price.toFixed(2)}
                </h3>
              </div>
              {/* Área para aumentar ou diminuir a quantidade do produto */}
              <div className="cart--qtarea">
                {/* Botão para diminuir a quantidade do produto */}
                <button
                  className="cart--qtmenos"
                  onClick={() => handleRemoveQuantity(index)}
                >
                  -
                </button>
                {/* Exibe a quantidade atual do produto */}
                <div className="cart--qt">{item.qt}</div>
                {/* Botão para aumentar a quantidade do produto */}
                <button
                  className="cart--qtmais"
                  onClick={() => handleAddQuantity(index)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        // Mensagem exibida quando o carrinho está vazio
        <p>O carrinho está vazio.</p>
      )}
    </div>
  );
};

export default CartModal;
