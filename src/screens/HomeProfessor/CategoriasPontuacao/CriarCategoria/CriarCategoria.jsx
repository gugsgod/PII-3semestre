import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Titulo from "../../../../components/Navbar/Titulo";

const CriarCategoria = () => {
  const navigate = useNavigate();
  const tipo = localStorage.getItem("tipoUsuario");

  useEffect(() => {
    if (tipo !== "professor") {
      navigate("/");
    }
  }, [tipo, navigate]);

  return (
    <div>
        <Titulo titulo="Criar Categoria de Pontuação" />
        
        {/* Aqui você pode adicionar o conteúdo da página de criação de categoria */}
        <div className="bg-white">
          <form action="" className="flex flex-col gap-4 p-6 max-w-md mx-auto mt-24">
            <label htmlFor="categoria">Nome da Categoria:</label>
            <input type="text" id="categoria" />
            <label htmlFor="descricao">Descrição:</label>
            <input type="text" id="descricao" />
          </form>
        </div>
    </div>
  );
};

export default CriarCategoria;
