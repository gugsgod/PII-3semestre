import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Tabela from "../../../components/Tabela/Tabela";
import Pessoas from "../../../components/Pessoas/Pessoas";
import Professor from "../../../components/Pessoas/Professores";

import "./GerenciarPessoas.css";

import Titulo from "../../../components/Navbar/Titulo";


const GerenciarPessoas = () => {
    const navigate = useNavigate();
    const tipo = localStorage.getItem("tipoUsuario");


    // // useEffect(() => {
    // //     fetchAutomatico("http://localhost:8080/jwtcoordenacao")
    // //         .then(res => {
    // //             if (!res.ok) throw new Error("Não autorizado");
    // //             return res.text();
    // //         })
    // //         .then(data => {
    // //             console.log("Resposta:", data);
    // //         })
    // //         .catch(err => {
    // //             console.error("Erro:", err);
    // //             alert("Acesso não autorizado");
    // //             navigate("/");

    // //         });
    // }, []);
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    const handleVoltarClick = () => {
        localStorage.removeItem('turmaSelecionada');
        navigate('/Coordenacao');
    }
    return (
        <div className="overflow-hidden">
            <Titulo titulo="Pessoas cadastradas" onClickBotao={handleVoltarClick} mostrarBotao={true} />
            <div className="gerenciar-page">
                <div className="flex justify-center gap-20">
                    <Pessoas
                        titulo="Alunos Cadastrados"
                        nome1="Nicole Mascaretti"
                        nome2="Caio Onha Ferreira"
                        nome4="Gustavo Noronha Bomfim"
                        nome5="Pietro Maffesoni"
                    />
                    <Professor
                        titulo="Professores Cadastrados"
                        nome1="Caio Onha Ferreira"
                        nome2="Nicole Silva Mascaretti"
                        nome3="Gustavo Noronha Bomfim"
                        nome4="Ana Clara"
                        nome5="Roberto Carlos"
                    />
                </div>
            </div>
        </div>
    );
};

export default GerenciarPessoas;
