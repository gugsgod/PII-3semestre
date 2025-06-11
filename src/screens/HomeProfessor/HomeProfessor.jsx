import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/navbar";
import Card from "../../components/CardDeInformacao/card";

import "./HomeProfessor.css";

import icon1 from "../../assets/atribuir_pontos.png";
import icon2 from "../../assets/ranking.png";
import icon3 from "../../assets/categorias_pontuacao.png";
import icon4 from "../../assets/atribuir_turmas.png";

function HomeProfessor() {
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

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className="ms-4 mt-4 flex justify-start text-center p-1">
        <button className="bg-[#D9D9D9] rounded-2xl p-1 w-24 shadow-lg hover:text-white" onClick={handleLogout}>Sair</button>
      </div>
      <div className="professor-background flex justify-center items-center min-h-[80vh]">
        <div className="flex flex-wrap justify-center items-center gap-14 w-full max-w-2-[1280px] px-2">
          <Card icon={icon1} label={"Atribuir Pontos"} onClick={() => navigate("/TelainicialAtribuirPontos")} size="small"/>
          <Card icon={icon2} label={"Ranking"} onClick={() => navigate("/Ranking")} size="small"/>
          <Card icon={icon3} label={"Categorias de Pontuação"} onClick={() => navigate("/CategoriasPontuacao")} size="small"/>
          <Card icon={icon4} label={"Atribuir Turmas"} onClick={() => navigate("/GerenciarTurmas")} size="small"/>
        </div>
      </div>
    </div>
  );
}

export default HomeProfessor;
