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
        <Pontos atividade="Bom comportamento"/>
        <Pontos atividade="Participação ativa na aula"/>
        <Pontos atividade="Trabalho em equipe e colaboração"/>
        <Pontos atividade="Entregas das atividades no prazo"/>
      </div>
    </div>
  );
};

export default AtividadesDaTurma;
