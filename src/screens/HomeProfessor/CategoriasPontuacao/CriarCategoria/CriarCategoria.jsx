import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAutomatico } from '../../../../components/Funcoes/funcoes';
import Titulo from "../../../../components/Navbar/Titulo";

const CriarCategoria = () => {
  const navigate = useNavigate();
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


  return (
    <div>
      <Titulo titulo="Criar Categoria de Pontuação" onClickBotao={handleVoltarClick} mostrarBotao={true} />

      {/* Aqui você pode adicionar o conteúdo da página de criação de categoria */}
      <div className="bg-white">
        <form action="" className="flex flex-col gap-4 p-6 max-w-md mx-auto mt-24">
          <label htmlFor="categoria">Nome da Categoria:</label>
          <input type="text" id="categoria" className="border-2 border-gray-500 p-2 rounded-xl" />
          <label htmlFor="descricao">Pontos da categoria:</label>
          <input type="text" id="descricao" className="border-2 border-gray-500 p-2 rounded-xl" />
        </form>
        <div className="flex justify-between items-center p-6 max-w-md mx-auto mt-4">
          <div>
            <button className="bg-[#33B1FF] p-2 rounded-3xl w-36 text-white">Salvar</button>
          </div>
          <div>
            <button className="bg-[#253E7D] p-2 rounded-3xl w-36 text-white" onClick={() => navigate("/CategoriasPontuacao")}>Fechar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriarCategoria;
