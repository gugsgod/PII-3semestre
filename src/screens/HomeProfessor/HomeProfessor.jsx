import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';

import './HomeProfessor.css';

import icone1 from '../../assets/atribuir.png';
import icone2 from '../../assets/ranking.png';
import icone3 from '../../assets/categorias.png';
import icone4 from '../../assets/turmas.png';

function HomeProfessor() {
  const navigate = useNavigate();
  const tipo = localStorage.getItem('tipoUsuario');

  useEffect(() => {
    if (tipo !== 'professor') {
      navigate('/');
    }
  }, [tipo, navigate]);

  return (
    <>
      <Navbar />
      <div className="home-background">
        <div className="card-grid">
          <Card icon={icone1} label="Atribuir pontos" />
          <Card icon={icone2} label="Ranking" />
          <Card icon={icone3} label="Editar categorias de pontuação" />
          <Card icon={icone4} label="Gerenciar turmas" />
        </div>
      </div>
    </>
  );
}

export default HomeProfessor;

