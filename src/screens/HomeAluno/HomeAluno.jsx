import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from "../../components/Navbar/navbar"
import Card from '../../components/CardDeInformacao/card';

import icon1 from "../../assets/Atividadedes_icone.png"
import icon2 from "../../assets/ranking.png"


import "./HomeAluno.css"

function HomeAluno() {
    const navigate = useNavigate();
    const tipo = localStorage.getItem('tipoUsuario');

    useEffect(() => {
        if (tipo !== 'aluno') {
            navigate('/');
        }
    }, [tipo, navigate]);

    useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);


    return (
        <div>
            <Navbar usuario="Olá, Aluno"/>
            <div className='aluno-page'>
                <div className='card-grid2'>
                    <Card icon={icon1} label="Meu pontos e atividades" size="medium"  onClick={() => navigate("/MeusPontosEAtividades")}/>
                    <Card icon={icon2} label="Ranking" size="medium" className="card-ranking"/>
                  
                </div>
            </div>
        </div>
    );
}

export default HomeAluno;
