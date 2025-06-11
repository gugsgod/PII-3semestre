import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./RankingAluno.css";

function RankingAluno() {
    const [rankingVisivel, setRankingVisivel] = useState(null);
    const [ranking, setRanking] = useState([]);
    const [erro, setErro] = useState(false);
    const navigate = useNavigate();
    const tipo = localStorage.getItem('tipoUsuario');
    useEffect(() => {
        if (tipo !== 'aluno') {
            navigate('/');
        }
    }, [tipo, navigate]);

    fetch("http://localhost:8080/ranking/visibilidade")
        .then(res => res.json())
        .then(data => {
            setRankingVisivel(data.visivel);

            if (data.visivel) {
                fetch("http://localhost:8080/ranking/aluno", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwt")}`
                    }
                })
                    .then(res => res.json())
                    .then(setRanking)
                    .catch(() => setErro(true));
            }
        })
        .catch(() => setErro(true));

    if (rankingVisivel === null) {

    
    return (
        <div className="ranking-container">
            <div className="ranking-box">
                <div className="ranking-header">Sua posição no ranking</div>
                <div className="ranking-content">
                    <div className="ranking-item">3°</div>
                    <div className="ranking-item">Gustavo Noronha Bomfim</div>
                    <div className="ranking-item">15</div>
                </div>
            </div>
            <div className="ranking-bar">
                <div className="bar red"></div>
                <div className="bar blue"></div>
                <div className="bar yellow"></div>
            </div>
        </div>
    );
}

    if (!rankingVisivel) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-gray-700 text-lg">
                    O ranking ainda não foi liberado pelo professor.
                </p>
            </div>
        );
    }

    if (erro) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-600 text-lg">Erro ao carregar ranking.</p>
            </div>
        );
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold text-center mb-6">Seu Ranking</h2>
            <ul className="max-w-md mx-auto space-y-4">
                {ranking.map((item, index) => (
                    <li
                        key={item.id}
                        className="bg-white p-4 rounded shadow flex justify-between items-center"
                    >
                        <span className="font-bold">{index + 1}º</span>
                        <span>{item.nome}</span>
                        <span className="text-blue-800 font-medium">{item.pontos} pts</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RankingAluno;
