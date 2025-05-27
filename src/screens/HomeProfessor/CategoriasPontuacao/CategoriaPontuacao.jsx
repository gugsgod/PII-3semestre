import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Titulo from "../../../components/Titulo/Titulo";
import Card from "../../../components/CardDeInformacao/card";
import Tabela from "../../../components/Tabela/Tabela";

const CategoriaPontuacao = () => {

    const navigate = useNavigate();
    const tipo = localStorage.getItem("tipoUsuario");
    
    useEffect(() => {
        if (tipo !== "professor") {
            navigate("/");
        }
    }, [tipo, navigate]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="overflow-hidden">
            <Titulo titulo="Categorias de Pontuação" />
            <div className="categorias-page">
                <div className="flex justify-center">
                    <Tabela/>
                    <Card/>
                </div>
            </div>
        </div>
    );
}

export default CategoriaPontuacao;