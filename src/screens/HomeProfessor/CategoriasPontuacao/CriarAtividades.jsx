import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Titulo from "../../../components/Navbar/Titulo";
import AtribuirAtividade from "../../../components/AtribuirAtividade/AtribuirAtividade";

import "./CriarAtividades.css"; // Importando o CSS para estilização

const CriarAtividades = () => {
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
        <div>
            <Titulo
                titulo="Criar Atividades"
                onClickBotao={handleVoltarClick}
                mostrarBotao={true}
            />
            <div className="">
                <div className="max-w-[500px] mx-auto mt-20">
                    <label htmlFor="">Atribuir atividade às turmas</label>
                </div>
                <div className="max-w-[500px] mx-auto mt-10 bg-white p-3 shadow-2xl max-h-[30vh] overflow-y-scroll">
                    <AtribuirAtividade turma="1° Ensino Médio"/>
                    <AtribuirAtividade turma="2° Ensino Médio"/>
                    <AtribuirAtividade turma="3° Ensino Médio"/>
                    <AtribuirAtividade turma="9° ano"/>
                    <AtribuirAtividade turma="8° ano"/>
                </div>
                <div className="flex justify-between max-w-[500px] mx-auto mt-10">
                    <div>
                        <button className="bg-[#33B1FF] p-2 rounded-3xl w-36 text-white">
                            Salvar
                        </button>
                    </div>
                    <div>
                        <button className="bg-[#253E7D] p-2 rounded-3xl w-36 text-white" onClick={() => navigate("/CategoriasPontuacao")}>
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CriarAtividades;
