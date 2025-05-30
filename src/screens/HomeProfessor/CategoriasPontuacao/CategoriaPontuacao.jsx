import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Titulo from "../../../components/Navbar/Titulo";
import Card from "../../../components/CardDeInformacao/card";
import Tabela from "../../../components/Tabela/Tabela";

import icon1 from "../../../assets/add.png";

import "./CategoriaPontuacao.css"

const CategoriaPontuacao = () => {
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
        <Titulo titulo="Editar Categorias de Pontuação"/>
        <div className="categoria-background">
            <div className="flex items-center justify-center w-full gap-24">
                <Card icon={icon1} size="categorias" label="Criar atividade"/>
                <Tabela titulo="Atividades existentes" atividade="Atividade - Historia"/>
            </div>
        </div>
    </div>
  );
};

export default CategoriaPontuacao;
