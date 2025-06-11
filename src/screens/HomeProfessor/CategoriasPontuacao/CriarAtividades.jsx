import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Titulo from "../../../components/Navbar/Titulo";
import AtribuirAtividade from "../../../components/AtribuirAtividade/AtribuirAtividade";

import "./CriarAtividades.css"; // Importando o CSS para estilização

const CriarAtividades = () => {
  const navigate = useNavigate();
  const tipo = localStorage.getItem("tipoUsuario");

  useEffect(() => {
    if (tipo !== "professor") {
      navigate("/");
    }
  }, [tipo, navigate]);

  // Tira a scrollbar do body
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div>
      <Titulo titulo="Criar Atividades" />
      <div className="">
        <div className="max-w-[500px] mx-auto mt-10">
            <form action="">
            <label htmlFor="">Nome da atividade</label>
            <input type="text" name="" id="" />
            </form>
        </div>
        <div className="max-w-[500px] mx-auto mt-20">
            <label htmlFor="">Atribuir atividade às turmas</label>
        </div>
        <div className="max-w-[500px] mx-auto mt-10 bg-white p-3 shadow-2xl max-h-[30vh] overflow-y-scroll">
            <AtribuirAtividade />
            <AtribuirAtividade />
            <AtribuirAtividade />
            <AtribuirAtividade />
            <AtribuirAtividade />
        </div>
        </div>
      </div>
  );
};

export default CriarAtividades;
