import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from "../../components/Navbar/navbar"
import Card from '../../components/CardDeInformacao/card';

import icon1 from "../../assets/Atividadedes_icone.png"
import icon2 from "../../assets/ranking.png"
import icon3 from "../../assets/relatorio_icone.png"

import "./HomeAluno.css"

function HomeAluno() {
    const navigate = useNavigate();
    const tipo = localStorage.getItem('tipoUsuario');

    useEffect(() => {
        if (tipo !== 'aluno') {
            navigate('/');
        }
    }, [tipo, navigate]);


    return (
        <div>
            <Navbar usuario="Olá, Aluno"/>
            <div className='aluno-background'>
                <div className='card-grid'>
                    <Card icon={icon1} label="Meu pontos e atividades" size="medium"/>
                    <Card icon={icon2} label="Ranking" size="medium"/>
                    <Card icon={icon3} label="Meu relatorio" size="medium"/>
                </div>
            </div>
        </div>
    );
}

export default HomeAluno;
