import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAutomatico } from '../../../components/Funcoes/funcoes';
import Titulo from "../../../components/Navbar/Titulo";
import Pontos from '../../../components/Pontos/Pontos';
import { AiOutlineWarning, AiOutlineLoading3Quarters } from "react-icons/ai";

const AtividadesDaTurma = () => {
    const navigate = useNavigate();
    const atividade = localStorage.getItem('atividadeSelecionada') || 'Atividade';
    const tipo = localStorage.getItem('tipoUsuario');
    const nomeTurma = localStorage.getItem('turmaSelecionada') || 'Turma';
    const idTurma = localStorage.getItem('idTurmaSelecionada');
    const [categorias, setCategorias] = useState([]);
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
        fetch(`http://localhost:8080/turmas/${idTurma}/categorias`)
            .then(res => {
                if (!res.ok) throw new Error("Erro na requisição");
                return res.json();
            })
            .then(data => {
                setCategorias(data); // espera-se: [{ id: 1, nome: "Participação ativa" }, ...]
            })
            .catch(err => {
                console.error("Erro ao buscar categorias:", err);
                setErro(true);
            });
    }, [idTurma]);

    const handleVoltarClick = () => {
        navigate("/CategoriasPorTurma");
    };

    return (
        <div>
            <Titulo titulo={`Atividades da Turma ${atividade}`} onClickBotao={handleVoltarClick} mostrarBotao={true} />
            {/* Conteúdo das atividades */}
            <div className='max-h-[80vh] overflow-auto'>
                {erro ? (
                    <div className="flex justify-center items-center min-h-[60vh]">
                        <div className="flex flex-col items-center text-red-600">
                            <AiOutlineWarning size={40} className="mb-2" />
                            <p className="text-center text-lg font-semibold">
                                Ocorreu um erro ao carregar as categorias.<br />
                                Por favor, tente novamente mais tarde.
                            </p>
                        </div>
                    </div>
                ) : categorias.length === 0 ? (
                    <div className="flex flex-col justify-center items-center min-h-[60vh] text-gray-600">
                        <AiOutlineLoading3Quarters size={36} className="animate-spin mb-3" />
                        <p className="text-lg font-medium">Carregando categorias...</p>
                    </div>
                ) : (
                    categorias.map((categoria, index) => (
                        <Pontos key={index} atividade={categoria.nome} />
                    ))
                )}

            </div>
        </div>
    );
};

export default AtividadesDaTurma;
