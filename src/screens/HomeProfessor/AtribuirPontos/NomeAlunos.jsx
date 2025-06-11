import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Titulo from "../../../components/Navbar/Titulo";
import Nomes from "../../../components/Nomes/Nomes";

const NomeAlunos = () => {
  const navigate = useNavigate();
  const tipo = localStorage.getItem("tipoUsuario");
  const turma = localStorage.getItem("turmaSelecionada") || "Turma";

  useEffect(() => {
    if (tipo !== "professor") {
      navigate("/");
    }
  }, [tipo, navigate]);

  const handleVoltarClick = () => {
    navigate("/AtividadePorTurma");
  };

  return (
    <div>
      <Titulo titulo={`Alunos ${turma}`} onClickBotao={handleVoltarClick} mostrarBotao={true}/>
      {/* Conteúdo das categorias */}
      <div className='max-h-[80vh] overflow-auto'>
        <Nomes atividade="Rafa Moreira" alunos={[]} />
        <Nomes atividade="Julio Cezar" alunos={[]} />
        <Nomes atividade="Bruno Henrique" alunos={[]} />
      </div>
    </div>
  );
};

export default NomeAlunos;