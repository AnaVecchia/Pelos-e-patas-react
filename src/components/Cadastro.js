// Cadastro.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, database, ref } from "../firebase";
import { useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../cadastro.css";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = async () => {
    try {
      console.log("Cadastrar clicado");
      alert("Usuário Cadastrado!");

      // Criação do usuário no Firebase Authentication
      const response = await createUserWithEmailAndPassword(auth, email, senha);
      const userId = response.user.uid;

      // Armazenamento de dados adicionais no Realtime Database
      await database.ref(`usuarios/${userId}`).set({
        nome,
        email,
      });

      console.log("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar usuário", error.message);
    }
  };

  return (
    <div className="cadastro-container">
      {/* Imagem no canto superior esquerdo */}
      <div className="top-left-image">
        <img
          src="./images/Pelos_Patas.png"
          alt="Imagem Top Left"
          className="top-left-image-content"
        />
      </div>

      {/* Logo acima do formulário */}
      <div className="logo-container">
        <img
          src="./images/cadastro.webp"
          alt="Logo"
          className="logo-content"
        />
      </div>

      <div className="cadastro-form">
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />

        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
        />

        <button onClick={handleCadastro}>Cadastrar</button>

        <p>
          Já possui uma conta? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Cadastro;
