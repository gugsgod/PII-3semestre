import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Titulo from '../../../components/Navbar/Titulo';
import Turma from '../../../components/Turma/Turma';
import { fetchAutomatico } from '../../../components/Funcoes/funcoes';

const GerenciarTurmas = () => {
    const navigate = useNavigate();
    const tipo = localStorage.getItem('tipoUsuario');
    const [turmas, setTurmas] = useState([]);

    // useEffect(() => {
    //     fetchAutomatico("http://localhost:8080/jwtprofessor")
    //         .then(res => {
    //             if (!res.ok) throw new Error("Não autorizado");
    //             return res.text();
    //         })
    //         .then(data => console.log("Resposta:", data))
    //         .catch(err => {
    //             console.error("Erro:", err);
    //             alert("Acesso não autorizado");
    //             navigate("/");
    //         });
    // }, []);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/turmas")
            .then(res => res.json())
            .then(data => setTurmas(data))
            .catch(err => {
                console.error("Erro ao buscar turmas:", err);
                setTurmas([]);
            });
    }, []);

    const handleTurmaClick = (nomeTurma) => {
        localStorage.setItem('turmaSelecionada', nomeTurma);
        navigate('/Turma');
    };

    const handleVoltarClick = () => {
        localStorage.removeItem('turmaSelecionada');
        navigate('/Professor');
    };

    return (
        <div>
            <Titulo titulo="Gerenciar Turmas" onClickBotao={handleVoltarClick} mostrarBotao={true} />
            <div className='flex flex-col items-center justify-center h-screen gap-5 p-10 border-black overflow-y-scroll'>
                {turmas.map((turma, i) => (
                    <Turma key={i} turma={turma.nome} onClick={() => handleTurmaClick(turma.nome)} />
                ))}
            </div>
        </div>
    );
};

export default GerenciarTurmas;
