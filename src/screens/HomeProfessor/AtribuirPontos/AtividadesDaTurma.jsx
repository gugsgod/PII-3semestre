import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAutomatico } from '../../components/Funcoes/funcoes';
import Titulo from "../../../components/Navbar/Titulo"; 
import Pontos from '../../../components/Pontos/Pontos';

const AtividadesDaTurma = () => {
    const navigate = useNavigate();
    const atividade = localStorage.getItem('atividadeSelecionada') || 'Atividade';
    const tipo = localStorage.getItem('tipoUsuario');

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
    const handleVoltarClick = () => {
        navigate("/CategoriasPorTurma");
    };

    return (
        <div>
            <Titulo titulo={`Atividades da Turma ${atividade}`} onClickBotao={handleVoltarClick} mostrarBotao={true}/>
            {/* Conteúdo das atividades */}
            <div className='max-h-[80vh] overflow-auto'>
                <Pontos atividade="Bom comportamento"/>
                <Pontos atividade="Participação ativa na aula"/>
                <Pontos atividade="Trabalho em equipe e colaboração"/>
                <Pontos atividade="Entregas das atividades no prazo"/>
            </div>
        </div>
    );
};

export default AtividadesDaTurma;
