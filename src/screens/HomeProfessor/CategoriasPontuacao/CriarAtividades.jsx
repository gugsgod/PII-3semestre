import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchAutomatico } from "../../../components/Funcoes/funcoes";
import Titulo from "../../../components/Navbar/Titulo";
import AtribuirAtividade from "../../../components/AtribuirAtividade/AtribuirAtividade";

import "./CriarAtividades.css"; // Importando o CSS para estilização

const CriarAtividades = () => {
  const navigate = useNavigate();
  const tipo = localStorage.getItem("tipoUsuario");

  // useEffect(() => {
  //     fetchAutomatico("http://localhost:8080/jwtprofessor")
  //         .then(res => {
  //             if (!res.ok) throw new Error("Não autorizado");
  //             return res.text();
  //         })
  //         .then(data => {
  //             console.log("Resposta:", data);
  //         })
  //         .catch(err => {
  //             console.error("Erro:", err);
  //             alert("Acesso não autorizado");
  //             navigate("/");

  //         });
  // }, []);
  // Tira a scrollbar do body
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleVoltarClick = () => {
    navigate("/CategoriasPontuacao");
  };

  return (
    <div className="criar-atividades-container">
      <Titulo
        titulo="Criar Atividades"
        onClickBotao={handleVoltarClick}
        mostrarBotao={true}
      />

      <form className="atividade-form flex flex-col items-center justify-center mt-8">
        <div className="flex flex-col items-start gap-2 w-full max-w-xs">
          <label htmlFor="" className="font-medium">
            Nome da atividade
          </label>
          <input
            type="text"
            className="border rounded-xl p-2 w-full"
          />
          <div className="flex items-center w-full mt-2">
            <input type="checkbox" className="mr-2" />
            <label className="select-none">
              Essa atividade é uma prova
            </label>
          </div>
        </div>
      </form>

      <div className="flex flex-wrap justify-center items-start mt-10 gap-10">
        <div className="flex flex-col">
          <label className="mb-2 font-medium self-start">
            Atribuir atividade às turmas
          </label>
          <div className="flex flex-col p-4 bg-white shadow-2xl rounded-xl min-w-[500px] max-h-60 overflow-y-scroll">
            <AtribuirAtividade turma="1° Ensino Médio" />
            <AtribuirAtividade turma="1° Ensino Médio" />
            <AtribuirAtividade turma="1° Ensino Médio" />
            <AtribuirAtividade turma="1° Ensino Médio" />
            <AtribuirAtividade turma="1° Ensino Médio" />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-medium self-start">
            Selecionar matéria
          </label>
          <div className="flex flex-col p-4 bg-white shadow-2xl rounded-xl min-w-[500px] max-h-60 overflow-y-scroll">
            <AtribuirAtividade turma="2° Ensino Médio" />
            <AtribuirAtividade turma="2° Ensino Médio" />
            <AtribuirAtividade turma="2° Ensino Médio" />
            <AtribuirAtividade turma="2° Ensino Médio" />
            <AtribuirAtividade turma="2° Ensino Médio" />
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-32 mt-14">
        <button
          type="submit"
          className="bg-[#33B1FF] hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-8 rounded-2xl shadow w-32"
        >
          Salvar
        </button>
        <button
          type="button"
          className="bg-[#253E7D] hover:bg-[#1D2A5D] transition-colors text-white font-semibold py-2 px-8 rounded-2xl shadow w-32"
          onClick={handleVoltarClick}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default CriarAtividades;
