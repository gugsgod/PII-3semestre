import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Titulo from "../../../components/Navbar/Titulo";
import Turma from "../../../components/Turma/Turma";

const CategoriasPorTurma = () => {
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

  const handleAtividadeClick = (nomeTurma) => {
    localStorage.setItem("atividadeSelecionada", nomeTurma);
    navigate("/AtividadesDaTurma");
  };

  return (
    <div>
      <Titulo titulo="Selecione a turma" />
      <div className="flex flex-col items-center max-h-[80vh] gap-5 p-10 border-black overflow-y-scroll">
        <Turma turma="1° Ensino Médio" onClick={() => handleAtividadeClick('1° Ensino Médio')} />
        <Turma turma="2° Ensino Médio" onClick={() => handleAtividadeClick('2° Ensino Médio')} />
        <Turma turma="3° Ensino Médio" onClick={() => handleAtividadeClick('3° Ensino Médio')} />
        <Turma turma="9° Ano" onClick={() => handleAtividadeClick('9° Ano')} />
        <Turma turma="8° Ano" onClick={() => handleAtividadeClick('8° Ano')} />
      </div>
    </div>
  );
}

export default CategoriasPorTurma;