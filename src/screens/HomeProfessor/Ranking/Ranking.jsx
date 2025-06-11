import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import "./Ranking.css"
import TabelaRanking from "../../../components/Ranking/Ranking"

const Ranking = () => {
    const navigate = useNavigate()
    const tipo = localStorage.getItem("tipoUsuario")

    useEffect(() => {
        if (tipo !== "professor") {
            navigate("/")
        }
    }, [tipo, navigate])

    useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

    return (
        <div className="">
            <div className="flex justify-end bg-transparent p-6">
                <button className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700">
                    Tornar público
                </button>
            </div>
            <div className="ranking-page">
                <div className="flex justify-center">
                    <div>
                        <TabelaRanking/>       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ranking