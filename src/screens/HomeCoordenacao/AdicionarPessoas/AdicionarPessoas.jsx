import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./AdicionarPessoas.css";

function AdicionarPessoas() {
  const navigate = useNavigate();
  const tipo = localStorage.getItem("tipoUsuario");

  useEffect(() => {
    if (tipo !== "coordenacao") {
      navigate("/");
    }
  }, [tipo, navigate]);

  return (
    <div className="adicionar-page">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg">
        {/* Tituto */}
        <div className="bg-gray-200 rounded-t-3xl px-6 py-4">
          <h1 className="text-center text-xl text-gray-800">
            Adicionar Pessoas
          </h1>
        </div>

        {/* Formulário */}
        <form className="px-6 py-6 space-y-4 mb-6 mt-6">
          <div>
            <label className="block text-sm text-gray-700">Nome</label>
            <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2"/>
          </div>
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded-xl px-4 py-2"/>
          </div>

          {/* Botão */}
          <div className="">
            <button type="submit" className="mx-auto block w-96 rounded-full py-2 mt-10">
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdicionarPessoas;
