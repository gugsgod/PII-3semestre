import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Titulo from '../../../components/Navbar/Titulo';
import Turma from '../../../components/Turma/Turma';

const GerenciarTurmas = () => {
    const navigate = useNavigate();
    const tipo = localStorage.getItem('tipoUsuario');

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
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleTurmaClick = (nomeTurma) => {
        localStorage.setItem('turmaSelecionada', nomeTurma);
        navigate('/Turma');
    }

    const handleVoltarClick = () => {
        localStorage.removeItem('turmaSelecionada');
        navigate('/Professor');
    }

    return (
        <div>
            <Titulo titulo="Gerenciar Turmas" onClickBotao={handleVoltarClick} mostrarBotao={true}/>

            <div className='flex flex-col items-center justify-center h-screen gap-5 p-10 border-black overflow-y-scroll'>
                <Turma turma="1° Ensino Médio" onClick={() => handleTurmaClick("1° Ensino Médio")} />
                <Turma turma="2° Ensino Médio" onClick={() => handleTurmaClick("2° Ensino Médio")} />
                <Turma turma="3° Ensino Médio" onClick={() => handleTurmaClick("3° Ensino Médio")} />
                <Turma turma="9° Ano" onClick={() => handleTurmaClick("9° Ano")} />
                <Turma turma="8° Ano" onClick={() => handleTurmaClick("8° Ano")} />
            </div>
        </div>
    );
};

export default GerenciarTurmas;
