import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAutomatico } from "../../../../components/Funcoes/funcoes";
import Titulo from "../../../../components/Navbar/Titulo";

const CriarCategoria = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [pontos, setPontos] = useState("");

  const tipo = localStorage.getItem("tipoUsuario");

  // useEffect(() => {
  //   fetchAutomatico("http://localhost:8080/jwtprofessor")
  //     .then(res => {
  //       if (!res.ok) throw new Error("Não autorizado");
  //       return res.text();
  //     })
  //     .then(data => {
  //       console.log("Resposta:", data);
  //     })
  //     .catch(err => {
  //       console.error("Erro:", err);
  //       alert("Acesso não autorizado");
  //       navigate("/");
  //     });
  // }, []);

  const handleVoltarClick = () => {
    navigate("/CategoriasPontuacao");
  };

  const handleSalvar = async () => {
    if (!nome || !pontos) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/categorias", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome,
          pontos: Number(pontos),
        }),
      });

      if (!response.ok) throw new Error("Erro ao salvar categoria");

      alert("Categoria criada com sucesso!");
      navigate("/CategoriasPontuacao");
    } catch (err) {
      console.error(err);
      alert("Erro ao criar categoria.");
    }
  };

  return (
    <div>
      <Titulo
        titulo="Criar Categoria de Pontuação"
        onClickBotao={handleVoltarClick}
        mostrarBotao={true}
      />

      <div className="bg-white">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4 p-6 max-w-md mx-auto mt-24"
        >
          <label htmlFor="categoria">Nome da Categoria:</label>
          <input
            type="text"
            id="categoria"
            className="border-2 border-gray-500 p-2 rounded-xl"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label htmlFor="descricao">Pontos da categoria:</label>
          <input
            type="number"
            id="descricao"
            className="border-2 border-gray-500 p-2 rounded-xl"
            value={pontos}
            onChange={(e) => setPontos(e.target.value)}
          />
        </form>

        <div className="flex justify-between items-center p-6 max-w-md mx-auto mt-4">
          <button
            className="bg-[#33B1FF] p-2 rounded-3xl w-36 text-white"
            onClick={handleSalvar}
          >
            Salvar
          </button>
          <button
            className="bg-[#253E7D] p-2 rounded-3xl w-36 text-white"
            onClick={handleVoltarClick}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CriarCategoria;
