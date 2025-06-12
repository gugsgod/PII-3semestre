import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from "../../components/Navbar/navbar"
import Card from '../../components/CardDeInformacao/card';

import icon1 from "../../assets/Atividadedes_icone.png"
import icon2 from "../../assets/ranking.png"
import { fetchAutomatico } from '../../components/Funcoes/funcoes';

import "./HomeAluno.css"

function HomeAluno() {
    const navigate = useNavigate();
    const tipo = localStorage.getItem('tipoUsuario');


    // useEffect(() => {
    //     fetchAutomatico("http://localhost:8080/jwtaluno")
    //         .then(res => {
    //             if (!res.ok) throw new Error("Não autorizado");
    //             return res.text();
    //         })
    //         .then(data => {
    //             console.log("Resposta:", data);
    //         })
    //         .catch(err => {
    //             console.error("Erro:", err);
    //             alert("Acesso não autorizado");
    //             navigate("/");
    //         });
    // }, []);
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

    const sair = () => {
        navigate("/");
    }

    return (
        <div>
            <Navbar onClick={sair} />

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
