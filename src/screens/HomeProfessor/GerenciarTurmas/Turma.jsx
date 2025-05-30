import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Titulo from "../../../components/Navbar/Titulo";
import Tabela from "../../../components/Tabela/Tabela";

import "./Turma.css";

const Turma = () => {
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
    <div className>
      <Titulo titulo="Turma"/>
      <div className="turma-background">
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Turma;