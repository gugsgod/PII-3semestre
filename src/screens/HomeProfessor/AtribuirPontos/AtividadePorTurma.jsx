import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Titulo from "../../../components/Navbar/Titulo";
import Turma from "../../../components/Turma/Turma";

const AtividadePorTurma = () => {
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
      <Titulo titulo="Atividades por turma" />
      <div className="flex flex-col items-center max-h-[80vh] gap-5 p-10 border-black  overflow-y-scroll">
        <Turma turma="1° Ensino Médio" onClick={() => navigate('/AtividadesDaTurma')} />
        <Turma turma="2° Ensino Médio" onClick={() => navigate('/AtividadesDaTurma')} />
        <Turma turma="3° Ensino Médio" onClick={() => navigate('/AtividadesDaTurma')} />
        <Turma turma="9° Ano" onClick={() => navigate('/AtividadesDaTurma')} />
        <Turma turma="8° Ano" onClick={() => navigate('/AtividadesDaTurma')} />
      </div>
    </div>
  );
}

export default AtividadePorTurma;