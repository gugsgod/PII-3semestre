import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAutomatico } from '../../../components/Funcoes/funcoes';
import Titulo from "../../../components/Navbar/Titulo";
import Nomes from "../../../components/Nomes/Nomes";
import { AiOutlineWarning } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai";



const NomeAlunos = () => {
    const navigate = useNavigate();
    const tipo = localStorage.getItem("tipoUsuario");
    const turma = localStorage.getItem("turmaSelecionada") || "Turma";
    const idTurma = localStorage.getItem("idTurmaSelecionada");

    const [alunos, setAlunos] = useState([]);
    const [erro, setErro] = useState(false);

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
        fetch(`http://localhost:8080/turmas/${idTurma}/alunos`)
            .then(res => {
                if (!res.ok) throw new Error("Erro na requisição");
                return res.json();
            })
            .then(data => {
                setAlunos(data);
            })
            .catch(err => {
                console.error("Erro ao buscar alunos:", err);
                setErro(true);
            });
    }, [idTurma]);

    const handleVoltarClick = () => {
        navigate("/AtividadePorTurma");
    };

    return (
        <div>
            <Titulo titulo={`Alunos ${turma}`} onClickBotao={handleVoltarClick} mostrarBotao={true} />
            <div className="max-h-[80vh] overflow-auto">
                {erro ? (
                    <div className="flex justify-center items-center min-h-[60vh]">
                        <div className="flex flex-col items-center text-red-600">
                            <AiOutlineWarning size={40} className="mb-2" />
                            <p className="text-center text-lg font-semibold">
                                Ocorreu um erro ao carregar os alunos.<br />
                                Por favor, tente novamente mais tarde.
                            </p>
                        </div>
                    </div>
                ) : alunos.length === 0 ? (
                    <div className="flex flex-col justify-center items-center min-h-[60vh] text-gray-600">
                        <AiOutlineLoading3Quarters size={36} className="animate-spin mb-3" />
                        <p className="text-lg font-medium">Carregando alunos...</p>
                    </div>

                ) : (
                    alunos.map((aluno, index) => (
                        <Nomes
                            key={index}
                            nome={aluno.nome}
                            idAluno={aluno.id} 
                        />
                    ))
                )}


            </div>
        </div>
    );
};

export default NomeAlunos;
