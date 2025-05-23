import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/Navbar/navbar';
import Card from '../../components/CardDeInformacao/card';

import './HomeProfessor.css';

import icon1 from '../../assets/atribuir_pontos.png';
import icon2 from '../../assets/ranking.png';
import icon3 from '../../assets/categorias_pontuacao.png';
import icon4 from '../../assets/atribuir_turmas.png';

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
      <Navbar usuario="Olá, Professor"/>
      <div className="home-background">
        <div className="card-grid">
          <Card icon={icon1} label="Atribuir pontos" onClick={() => navigate("/AtribuirPontos")}/>
          <Card icon={icon2} label="Ranking" onClick={() => navigate("/Ranking")}/>
          <Card icon={icon3} label="Editar categorias de pontuação" />
          <Card icon={icon4} label="Gerenciar turmas" onClick={() => navigate("/GerenciarTurmas")}/>
        </div>
      </div>
    </>
  );
}

export default HomeProfessor;

