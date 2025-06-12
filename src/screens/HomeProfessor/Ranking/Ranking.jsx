import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Ranking.css";
import TabelaRanking from "../../../components/Ranking/Ranking";
import Titulo from "../../../components/Navbar/Titulo"; // Importando o componente de título
import { fetchAutomatico } from '../../../components/Funcoes/funcoes';
const Ranking = () => {
    const navigate = useNavigate();
    const tipo = localStorage.getItem("tipoUsuario");


    // useEffect(() => {
    //     fetchAutomatico("http://localhost:8080/jwtprofessor")
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

    return (
        <div>
            <div className="flex items-center p-6 justify-between">
                <div className="">
                    <button className="mr-4 bg-[#D9D9D9] rounded-2xl p-1 w-24 shadow-lg hover:text-white" onClick={() => navigate("/Professor")}>
                        Voltar
                    </button>
                </div>
                <div>
                    <button className="mr-4 bg-[#253E7D] rounded-2xl p-1 w-36 shadow-lg text-white">
                        Tornar publico
                    </button>
                </div>
            </div>
            <div className="aluno-page">
                <div className="ranking-container">
                    <TabelaRanking />
                </div>
            </div>
        </div>
    );
};

export default Ranking;
