import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Titulo from "../../../components/Navbar/Titulo"; 
import Pontos from '../../../components/Pontos/Pontos';

const AtividadesDaTurma = () => {
  const navigate = useNavigate();

    const tipo = localStorage.getItem('tipoUsuario');
    useEffect(() => {
      if (tipo !== 'professor') {
        navigate('/atividades');
      }
    }, [tipo, navigate]);


  return (
    <div>
      <Titulo titulo="Atividades da Turma" />
      {/* Conteúdo das atividades */}
      <div className='max-h-[80vh] overflow-auto'>
        <Pontos atividade="Atividade 1"/>
        <Pontos atividade="Atividade 2"/>
        <Pontos atividade="Atividade 3"/>
        <Pontos atividade="Atividade 4"/>
        <Pontos atividade="Atividade 5"/>
        <Pontos atividade="Atividade 6"/>
        <Pontos atividade="Atividade 7"/>
        <Pontos atividade="Atividade 8"/>
      </div>
    </div>
  );
};

export default AtividadesDaTurma;
