import React, { useState, useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase";
import ProdutosModal from "./ProdutosModal";

const Produtos = ({ addToCart }) => {
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const [modalProductIndex, setModalProductIndex] = useState(null);

  const handleSizeClick = (key) => {
    setSelectedSize(key);
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const openModal = (index) => {
    setModalProductIndex(index);
  };

  const closeModal = () => {
    setModalProductIndex(null);
  };

  const handleAddToCart = (index) => {
    if (index !== null) {
      addToCart(selectedSize);

      closeModal();
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let list = [];
        const starCountRef = ref(database, "products/");
        onValue(starCountRef, (snapshot) => {
          snapshot.forEach((prod) => {
            list.push(prod.val());
            console.log(prod.val());
          });
        });
        setProducts(list);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main>
      <section className="products">
        <div className="models"></div>
        <h2>Produtos recomendados</h2>
        <div className="products-area">
          {products.map((product, index) => (
            <div key={index} onClick={() => openModal(index)}>
              <div className="products-card--image">
                <img src={product.img} alt={product.title} />
              </div>
              <p className="products-card--brand small-text">{product.brand}</p>
              <h5 className="products-card--name text-dark bold-text">
                {product.title}
              </h5>
              <h3 className="products-card--price">
                R$ {product.price.toFixed(2)}
              </h3>
            </div>
          ))}
        </div>
      </section>
      {modalProductIndex !== null && (
        <ProdutosModal
          products={products}
          modalKey={modalProductIndex}
          closeModal={closeModal}
          addToCart={handleAddToCart}
        />
      )}
    </main>
  );
};

export default Produtos;
