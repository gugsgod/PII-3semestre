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

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };


    return (
        <div>
            <Navbar usuario="Olá, Aluno" />
            <div className="ms-4 mt-4 flex justify-start text-center p-1">
                <button className="bg-[#D9D9D9] rounded-2xl p-1 w-24 shadow-lg hover:text-white" onClick={handleLogout}>Sair</button>
            </div>
            <div className='aluno-page'>
                <div className='card-grid2'>
                    <Card icon={icon1} label="Meu pontos e atividades" size="medium" onClick={() => navigate("/MeusPontosEAtividades")} />
                    <Card icon={icon2} label="Ranking" size="medium" className="card-ranking" onClick={() => navigate("/RankingAluno")} />

                </div>
            </div>
        </div>
    );
}

export default HomeAluno;
