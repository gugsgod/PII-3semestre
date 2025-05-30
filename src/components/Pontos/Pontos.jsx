import { useState } from "react";

import icon1 from "../../assets/popup_botao.png"; // Importando o ícone de atribuir pontos

const Pontos = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 w-full border-gray-300 p-5">
      <h1 className="text-lg text-gray-700">{props.atividade}</h1>
      <div className="flex justify-end">
        <button className="hover:bg-white" onClick={() => setIsOpen(true)}><img src={icon1} alt="" className="w-7 h-7"/></button>

        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <div className="w-full max-w-3xl h-[600px] bg-white rounded-3xl border">
              {/* Titulo */}
              <div className="bg-gray-200 rounded-t-3xl px-6 py-4">
                <h1 className="text-3xl text-gray-700 text-center">
                  Todos os alunos
                </h1>
              </div>

              <div className="px-6 py-6 space-y-4 max-h-64 overflow-auto">
                <table className="min-w-full table-auto">
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">Caio Onha Ferreira</td>
                      <td className="px-4 py-2 border-b">
                        <input type="checkbox" className="w-5 h-5" />
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">
                        Nicole Silva Mascaretti
                      </td>
                      <td className="px-4 py-2 border-b">
                        <input type="checkbox" className="w-5 h-5" />
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">Gustavo Bomfim</td>
                      <td className="px-4 py-2 border-b">
                        <input type="checkbox" className="w-5 h-5" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center mt-52 gap-52">
                <div>
                  <button className="bg-blue-400 text-white rounded-3xl px-4 py-2 ml-4 hover:bg-blue-500 w-36">
                    Atribuir pontos
                  </button>
                </div>
                <button
                  className="bg-[#253E7D] text-white px-4 py-2 rounded-full hover:bg-blue-600 w-36"
                  onClick={() => setIsOpen(false)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pontos;
