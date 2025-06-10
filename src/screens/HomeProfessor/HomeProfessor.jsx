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
      <Navbar />
      <div className="professor-background">
        <div className="card-grid">
          <Card icon={icon1} label="Atribuir pontos" onClick={() => navigate("/TelaInicialAtribuirPontos")} size="medium" />
          <Card icon={icon2} label="Ranking" onClick={() => navigate("/Ranking")} size="medium" />
          <Card icon={icon3} label="Editar pontuação" size="medium" onClick={() => navigate("/CategoriasPontuacao")} />
          <Card icon={icon4} label="Gerenciar turmas" onClick={() => navigate("/GerenciarTurmas")} size="medium" />
        </div>
      </div>
    </>
  );
}

export default HomeProfessor;

