// GerenciarPessoas.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Titulo from "../../../components/Navbar/Titulo";
import Pessoas from "../../../components/Pessoas/Pessoas";
import Professor from "../../../components/Pessoas/Professores";

import "./GerenciarPessoas.css";

const GerenciarPessoas = () => {
  const navigate = useNavigate();
  const tipo = localStorage.getItem("tipoUsuario");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleVoltarClick = () => {
    localStorage.removeItem("turmaSelecionada");
    navigate("/Coordenacao");
  };

  return (
    <div className="overflow-hidden">
      <Titulo titulo="Pessoas cadastradas" onClickBotao={handleVoltarClick} mostrarBotao={true} />
      <div className="gerenciar-page">
        <div className="flex justify-center gap-20">
          <Pessoas titulo="Alunos Cadastrados" />
          <Professor titulo="Professores Cadastrados" />
        </div>
      </div>
    </div>
  );
};

export default GerenciarPessoas;

