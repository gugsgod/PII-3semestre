import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Card from "../../components/CardDeInformacao/card";
import { fetchAutomatico } from '../../components/Funcoes/funcoes';
import "./HomeCoordenacao.css";

import icon1 from "../../assets/icone-adicionar-pessoas.png";
import icon2 from "../../assets/atribuir_turmas.png";

function HomeCoordenacao() {
    const navigate = useNavigate();
    const tipo = localStorage.getItem("tipoUsuario");


    useEffect(() => {
        fetchAutomatico("http://localhost:8080/jwtcoordenacao")
            .then(res => {
                if (!res.ok) throw new Error("Não autorizado");
                return res.text();
            })
            .then(data => {
                console.log("Resposta:", data);
            })
            .catch(err => {
                console.error("Erro:", err);
                alert("Acesso não autorizado");
                navigate("/");

            });
    }, []);
    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div>
            <Navbar usuario="Olá, Coordenação" />
            <div className="ms-4 mt-4 flex justify-start text-center p-1">
                <button className="bg-[#D9D9D9] rounded-2xl p-1 w-24 shadow-lg hover:text-white" onClick={handleLogout}>Sair</button>
            </div>
            <div className="coordenacao-background">
                <div className="card-grid1">
                    <Card
                        icon={icon1}
                        label={"Adicionar Pessoas"}
                        onClick={() => navigate("/AdicionarPessoas")}
                        size="large"
                        className="card-adicionar"
                    />
                    <Card
                        icon={icon2}
                        label={"Gerenciar Pessoas"}
                        onClick={() => navigate("/GerenciarPessoas")}
                        size="large"
                        className="card-gerenciar"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomeCoordenacao;
