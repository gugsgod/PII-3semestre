import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Titulo from "../../../components/Navbar/Titulo";
import Card from "../../../components/CardDeInformacao/card";
import Tabela from "../../../components/Tabela/Tabela";

import icon1 from "../../../assets/add.png"

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
        <div>
            <Titulo titulo="Categorias de Pontuação"/>

            <div className="flex items-center justify-center">
                <Card label="adicionar" icon={icon1} />
                <Tabela titulo="Categorias Existentes" />
            </div>
        </div>
    );
}

export default CategoriaPontuacao;