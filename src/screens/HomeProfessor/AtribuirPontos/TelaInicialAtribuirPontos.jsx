import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Titulo from "../../../components/Navbar/Titulo";
import Barra from "../../../components/Barra/Barra"; // Importando a barra de navegação
import icon from "../../../assets/icon-atividade.png"; // Importando o ícone da atividade
import icon2 from "../../../assets/calendario.png"

import "./TelaInicialAtribuirPontos.css"; // Importando o CSS específico

const TelaInicialAtribuirPontos = () => {
  const navigate = useNavigate();
  const tipo = localStorage.getItem("tipoUsuario");

  useEffect(() => {
    if (tipo !== "professor") {
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
    <div>
      <Titulo titulo="Atribuir pontos"/>
      <div className="page-background">
        <div className="flex flex-col gap-12">
          <Barra icon={icon} titulo="Atividades por turma" onClick={() => navigate("/AtividadePorTurma")} />
          <Barra icon={icon2} titulo="Todas as atividades" onClick={() => navigate("/AtribuirPontos")} />
        </div>
      </div>
    </div>
  );
};

export default TelaInicialAtribuirPontos;
