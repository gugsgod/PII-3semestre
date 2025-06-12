import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAutomatico } from '../../../components/Funcoes/funcoes';
import Titulo from "../../../components/Navbar/Titulo";
import Tabela from "../../../components/Tabela/Tabela";

import "./Turma.css";

const Turma = () => {
  const navigate = useNavigate();
  const tipo = localStorage.getItem("tipoUsuario");
  const turmaSelecionada = localStorage.getItem("turmaSelecionada") || "";

  const [atividades, setAtividades] = useState([]);
  const [alunos, setAlunos] = useState([]);

  // useEffect(() => {
  //   fetchAutomatico("http://localhost:8080/jwtprofessor")
  //     .then(res => {
  //       if (!res.ok) throw new Error("Não autorizado");
  //       return res.text();
  //     })
  //     .then(data => {
  //       console.log("Resposta:", data);
  //     })
  //     .catch(err => {
  //       console.error("Erro:", err);
  //       alert("Acesso não autorizado");
  //       navigate("/");
  //     });
  // }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (!turmaSelecionada) return;

    fetch(`http://localhost:8080/turmas/${encodeURIComponent(turmaSelecionada)}/atividades`)
      .then((res) => res.json())
      .then(setAtividades)
      .catch((err) => {
        console.error("Erro ao buscar atividades:", err);
        alert("Erro ao carregar atividades");
      });

    fetch(`http://localhost:8080/turmas/${encodeURIComponent(turmaSelecionada)}/alunos`)
      .then((res) => res.json())
      .then(setAlunos)
      .catch((err) => {
        console.error("Erro ao buscar alunos:", err);
        alert("Erro ao carregar alunos");
      });
  }, [turmaSelecionada]);

  const handleDeleteAtividade = async (id) => {
    const confirmar = window.confirm("Deseja realmente deletar esta atividade?");
    if (!confirmar) return;

    try {
      await fetch(`http://localhost:8080/atividades/${id}`, {
        method: "DELETE",
      });
      setAtividades((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      console.error("Erro ao deletar atividade:", err);
      alert("Erro ao deletar atividade.");
    }
  };

  const handleDeleteAluno = async (id) => {
    const confirmar = window.confirm("Deseja realmente remover este aluno?");
    if (!confirmar) return;

    try {
      await fetch(`http://localhost:8080/alunos/${id}`, {
        method: "DELETE",
      });
      setAlunos((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      console.error("Erro ao remover aluno:", err);
      alert("Erro ao remover aluno.");
    }
  };

  const handleVoltarClick = () => {
    localStorage.removeItem("turmaSelecionada");
    navigate("/GerenciarTurmas");
  };

  return (
    <div>
      <Titulo titulo={turmaSelecionada} onClickBotao={handleVoltarClick} mostrarBotao={true} />
      <div className="turma-background">
        <div className="flex items-center justify-center w-full gap-48">
          <div className="flex gap-24">
            <div className="w-[60vh] h-[60vh]">
              <Tabela titulo="Atividades" itens={atividades} onDelete={handleDeleteAtividade} />
            </div>
            <div className="w-[60vh] h-[60vh]">
              <Tabela titulo="Alunos" itens={alunos} onDelete={handleDeleteAluno} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Turma;


