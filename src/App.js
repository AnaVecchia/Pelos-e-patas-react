import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Header from "./components/Header";
import Banner from "./components/Banner";
import InfoSection from "./components/InfoSection";
import AboutUs from "./components/AboutUs";
import Brands from "./components/Brands";
import Promotion from "./components/Promotion";
import Footer from "./components/Footer";
import Header2 from "./components2/Header2";
import Cart from "./components2/Cart";
import Banner2 from "./components2/Banner2";
import Produtos from "./components2/Produtos";
import ProdutosModal from "./components2/ProdutosModal";
import CartModal from "./components2/CartModal"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/home"
          element={
            <div>
              <Header />
              <Banner />
              <InfoSection />
              <AboutUs imagePath="./images/dog_and_cat" />
              <Brands />
              <Promotion />
              <Footer />
            </div>
          }
        />
        <Route
          path="/home2"
          element={
            <div>
              <Header2 />
              <Banner2 />
              <Cart />
              <Produtos />
              <ProdutosModal />
              <CartModal />

            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
