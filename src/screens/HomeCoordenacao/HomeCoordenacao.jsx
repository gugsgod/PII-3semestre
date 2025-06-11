import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Card from "../../components/CardDeInformacao/card";

import "./HomeCoordenacao.css";

import icon1 from "../../assets/icone-adicionar-pessoas.png";
import icon2 from "../../assets/atribuir_turmas.png";

function HomeCoordenacao() {
  const navigate = useNavigate();
  const tipo = localStorage.getItem("tipoUsuario");

  useEffect(() => {
    if (tipo !== "coordenacao") {
      navigate("/");
    }
  }, [tipo, navigate]);

  return (
    <div>
      <Navbar usuario="Olá, Coordenação" />
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
