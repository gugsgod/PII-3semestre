import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Ranking.css";
import TabelaRanking from "../../../components/Ranking/Ranking";

const Ranking = () => {
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
    <div className="aluno-page">
      <div className="ranking-container">
        <TabelaRanking />
      </div>
    </div>
  );
};

export default Ranking;
