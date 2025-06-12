import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAutomatico } from '../../../components/Funcoes/funcoes';
import Titulo from "../../../components/Navbar/Titulo";
import Turma from "../../../components/Turma/Turma";

const CategoriasPorTurma = () => {
    const navigate = useNavigate();
    const tipo = localStorage.getItem("tipoUsuario");

    // useEffect(() => {
    //     fetchAutomatico("http://localhost:8080/jwtprofessor")
    //         .then(res => {
    //             if (!res.ok) throw new Error("Não autorizado");
    //             return res.text();
    //         })
    //         .then(data => {
    //             console.log("Resposta:", data);
    //         })
    //         .catch(err => {
    //             console.error("Erro:", err);
    //             alert("Acesso não autorizado");
    //             navigate("/");

    //         });
    // }, []);
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const turmas = [
        { id: 1, nome: "1° Ensino Médio" },
        { id: 2, nome: "2° Ensino Médio" },
        { id: 3, nome: "3° Ensino Médio" },
        { id: 4, nome: "9° Ano" },
        { id: 5, nome: "8° Ano" }
    ];

    const handleAtividadeClick = (turma) => {
        localStorage.setItem("turmaSelecionada", turma.nome);
        localStorage.setItem("idTurmaSelecionada", turma.id);
        navigate("/AtividadesDaTurma");
    };

    const handleVoltarClick = () => {
        navigate("/TelainicialAtribuirPontos");
    };

    return (
        <div>
            <Titulo titulo="Selecione a turma" onClickBotao={handleVoltarClick} mostrarBotao={true} />
            <div className="flex flex-col items-center max-h-[80vh] gap-5 p-10 border-black overflow-y-scroll">
                {turmas.map((turma, index) => (
                    <Turma key={index} turma={turma.nome} onClick={() => handleAtividadeClick(turma)} />
                ))}

            </div>
        </div>
    );
}

export default CategoriasPorTurma;
