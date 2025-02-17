import React from "react";
import { useNavigate } from "react-router-dom";
import "../login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login clicked");
    navigate("/home");

    console.log("Usuário redirecionado para a página inicial!");
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="./images/cadastro.webp" alt="Logo" className="logo-content" />
      </div>

      {/* Imagem acima do formulário */}
      <div className="header-image">
        <img
          src="./images/Pelos_Patas.png"
          alt="Imagem de destaque"
          className="header-image-content"
        />
      </div>

      {/* Formulário */}
      <div className="login-form">
        {/* Campos de entrada de email e senha */}
        <input type="email" placeholder="Digite seu email" />
        <input type="password" placeholder="Digite sua senha" />

        {/* Botão de login */}
        <button onClick={handleLogin}>Logar</button>

        <p>
          Usuário não cadastrado? <a href="/Cadastro">Cadastrar</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
