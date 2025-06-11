import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Titulo from "../../../components/Navbar/Titulo";
import Card from "../../../components/CardDeInformacao/card";
import Tabela from "../../../components/Tabela/Tabela";

import icon1 from "../../../assets/mais.png";

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

  const handleVoltarClick = () => {
    navigate("/Professor");
  };

  return (
    <div>
        <Titulo titulo="Editar Categorias e atividades" onClickBotao={handleVoltarClick} mostrarBotao={true}/>
        <div className='categoria-background'>
            <div className="flex items-center justify-center w-full gap-48">
                <div className="flex flex-col gap-14">
                    <Card
                        titulo="Categorias de Pontuação"
                        descricao="Gerencie as categorias de pontuação para suas atividades."
                        icon={icon1}
                        label={"Criar Atividade"}
                        onClick={() => navigate("/CriarAtividades")}
                        size="small"
                    />
                    <Card
                        titulo="Atividades"
                        descricao="Gerencie as atividades associadas às categorias de pontuação."
                        icon={icon1}
                        label={"Criar Categorias"}
                        onClick={() => navigate("/CriarCategoria")}
                        size="small"
                    />
                </div>
                <div className="overflow-y-auto h-[50vh] w-[50vw]">
                    <Tabela titulo="Atividades e categorias" atividade1="Bom comportamento - Historia" atividade2="Atividade 1- História" atividade3="Apresentação Filosofia" atividade4="Bom comportamento - Filosofia" atividade5="Entrega no prazo - História"/>	
                </div>
            </div>
        </div>
    </div>
  );
};

export default CategoriaPontuacao;
