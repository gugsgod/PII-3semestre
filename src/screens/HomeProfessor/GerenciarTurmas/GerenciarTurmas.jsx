import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Titulo from '../../../components/Navbar/Titulo';
import Turma from '../../../components/Turma/Turma';

const GerenciarTurmas = () => {
    const navigate = useNavigate();
    const tipo = localStorage.getItem('tipoUsuario');

    useEffect(() => {
      if (tipo !== 'professor') {
        navigate('/');
      }
    }, [tipo, navigate]);

    // Tira a scrollbar do body
    useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, []);
  return (
    <div>
      <Titulo titulo="Gerenciar Turmas" />

      <div className='flex flex-col items-center justify-center h-screen gap-5 p-10 border-black overflow-y-scroll'>

        <Turma turma="1° Ensino Médio" onClick={() => navigate('/Turma')} />
        <Turma turma="2° Ensino Médio" onClick={() => navigate('/Turma')} />
        <Turma turma="3° Ensino Médio" onClick={() => navigate('/Turma')} />
        <Turma turma="9° Ano" onClick={() => navigate('/Turma')} />
        <Turma turma="8° Ano" onClick={() => navigate('/Turma')} />

      </div>
    </div>
  );
};

export default GerenciarTurmas;
