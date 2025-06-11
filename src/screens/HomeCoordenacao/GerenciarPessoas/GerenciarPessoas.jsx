import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Tabela from "../../../components/Tabela/Tabela";

import "./GerenciarPessoas.css";

import Titulo from "../../../components/Navbar/Titulo";


const GerenciarPessoas = () => {
  const navigate = useNavigate();
  const tipo = localStorage.getItem("tipoUsuario");

  useEffect(() => {
    if (tipo !== "coordenacao") {
      navigate("/");
    }
  }, [tipo, navigate]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Titulo titulo="Pessoas cadastradas" />
      <div className="gerenciar-page">
        <div className="flex justify-center gap-10">
          <div className="overflow-x-auto">
            <Tabela
              titulo="Alunos Cadastrados"
              atividade1="Caio Onha Ferreira"
              atividade2="Nicole Silva Mascaretti"
              atividade3="Gustavo Noronha Bomfim"
            />
          </div>
          <div className="overflow-x-auto">
            <Tabela
              titulo="Professores Cadastrados"
              atividade1="Caio Onha Ferreira"
              atividade2="Nicole Silva Mascaretti"
              atividade3="Gustavo Noronha Bomfim"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GerenciarPessoas;
