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
            <div className="flex justify-end items-end p-3">
                <button>Tornar público</button>
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