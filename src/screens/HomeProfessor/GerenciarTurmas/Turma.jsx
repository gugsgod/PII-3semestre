import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Titulo from "../../../components/Navbar/Titulo";
import Tabela from "../../../components/Tabela/Tabela";

import "./Turma.css";

const Turma = () => {
    const navigate = useNavigate();
    const tipo = localStorage.getItem("tipoUsuario");
    const turmaSelecionada = localStorage.getItem("turmaSelecionada") || "1° Ensino Médio";


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
    // Tira a scrollbar do body
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleVoltarClick = () => {
        localStorage.removeItem("turmaSelecionada");
        navigate("/GerenciarTurmas");
    };

    return (
        <div>
            <Titulo titulo={`${turmaSelecionada}`} onClickBotao={handleVoltarClick} mostrarBotao={true} />
            <div className="turma-background">
                <div className="flex items-center justify-center w-full gap-48">
                    <div className="flex gap-24">
                        <div className="w-[60vh] h-[60vh]">
                            <Tabela
                                titulo="Atividades"
                                atividade1="Atividade 1"
                                atividade2="Atividade 2"
                                atividade3="Atividade 3"
                            />
                        </div>
                        <div className="w-[60vh] h-[60vh]">
                            <Tabela
                                titulo="Alunos"
                                atividade1="João da Silva"
                                atividade2="Maria Oliveira"
                                atividade3="Pedro Santos"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Turma;
