import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAutomatico } from '../../components/Funcoes/funcoes';
import Titulo from "../../../components/Navbar/Titulo";
import Barra from "../../../components/Barra/Barra"; // Importando a barra de navegação
import icon from "../../../assets/icon-atividade.png"; // Importando o ícone da atividade
import icon2 from "../../../assets/calendario.png"

import "./TelaInicialAtribuirPontos.css"; // Importando o CSS específico

const TelaInicialAtribuirPontos = () => {
    const navigate = useNavigate();
    const tipo = localStorage.getItem("tipoUsuario");

    useEffect(() => {
        fetchAutomatico("http://localhost:8080/jwtprofessor")
            .then(res => {
                if (!res.ok) throw new Error("Não autorizado");
                return res.text();
            })
            .then(data => {
                console.log("Resposta:", data);
            })
            .catch(err => {
                console.error("Erro:", err);
                alert("Acesso não autorizado");
                navigate("/");

            });
    }, []);
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
            <Titulo titulo="Atribuir pontos" onClickBotao={handleVoltarClick} mostrarBotao={true}/>
            <div className="page-background">
                <div className="flex flex-col gap-12">
                    <Barra icon={icon} titulo="Atividades" onClick={() => navigate("/AtividadePorTurma")}/>
                    <Barra icon={icon2} titulo="Categorias de pontuação" onClick={() => navigate("/CategoriasPorTurma")}/>
                </div>
            </div>
        </div>
    );
};

export default TelaInicialAtribuirPontos;
