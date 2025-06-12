import { useState } from "react";
import icon1 from "../../assets/popup_botao.png"; // Importando o ícone de atribuir pontos

const Nomes = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 w-full border-gray-300 p-5">
      <h1 className="text-lg text-gray-700 h-[2vh]">{props.atividade}</h1>
      <div className="flex justify-end">
        <button
          className="hover:bg-white h-[5vh]"
          onClick={() => setIsOpen(true)}
        >
          <img src={icon1} alt="" className="w-7 h-7" />
        </button>

        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-[100vh] max-w-3xl bg-white rounded-3xl border overflow-hidden">
              {/* Título */}
              <div className="bg-gray-200 px-6 py-4">
                <h1 className="text-3xl text-gray-700 text-center">
                  Atribuir nota
                </h1>
              </div>

              {/* Formulário e botões */}
              <form className="flex flex-col items-center gap-6 p-10">
                {/* Caixa de seleção de matéria */}
                <div className="w-full max-w-md">
                  <label htmlFor="materia" className="block mb-1">
                    Matéria
                  </label>
                  <select
                    id="materia"
                    className="w-full border border-gray-600 p-2 rounded-md"
                  >
                    <option value="">Selecione a matéria</option>
                    <option value="matematica">Matemática</option>
                    <option value="portugues">Português</option>
                    <option value="historia">História</option>
                    <option value="ciencias">Ciências</option>
                  </select>
                </div>

                {/* Caixa de seleção de atividade */}
                <div className="w-full max-w-md">
                  <label htmlFor="atividade" className="block mb-1">
                    Nome da atividade
                  </label>
                  <select
                    id="atividade"
                    className="w-full border border-gray-600 p-2 rounded-md"
                  >
                    <option value="">Selecione a atividade</option>
                    <option value="atividade1">Atividade 1</option>
                    <option value="atividade2">Atividade 2</option>
                    <option value="atividade3">Atividade 3</option>
                  </select>
                </div>

                {/* Campo de nota */}
                <div className="w-full max-w-md">
                  <label htmlFor="nota" className="block mb-1">
                    Nota do aluno
                  </label>
                  <input
                    id="nota"
                    type="text"
                    className="w-full border border-gray-600 p-2 rounded-md"
                  />
                </div>

                {/* Botões */}
                <div className="flex justify-center gap-32 pt-4">
                  <div>
                    <button
                      type="submit"
                      className="bg-blue-400 text-white rounded-3xl px-4 py-3 hover:bg-blue-500 w-36"
                    >
                      Atribuir pontos
                    </button>
                  </div>
                  <button
                    type="button"
                    className="bg-[#253E7D] text-white px-4 py-2 rounded-full hover:bg-blue-600 w-36"
                    onClick={() => setIsOpen(false)}
                  >
                    Fechar
                  </button>
                </div>

              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nomes;