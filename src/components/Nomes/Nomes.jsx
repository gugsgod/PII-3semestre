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
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <div className="w-[100vh] max-w-3xl h-[500px] bg-white rounded-3xl border">
              {/* Titulo */}
              <div className="bg-gray-200 rounded-t-3xl px-6 py-4">
                <h1 className="text-3xl text-gray-700 text-center">
                  Atribuir nota
                </h1>
              </div>

              <div className="flex justify-center items-center p-16">
                <form action="" className="">
                  <label htmlFor="">Nome da atividade</label>
                  <input type="text" className="border border-gray-600 p-2 rounded-m" />
                  <label htmlFor="">Nota do aluno</label>
                  <input type="text" className="border border-gray-600 p-2 rounded-m" />
                </form>
              </div>

              <div className="flex justify-center gap-32">
                <div>
                  <button className="bg-blue-400 text-white rounded-3xl px-4 py-3 ml-4 hover:bg-blue-500 w-36">
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

export default Nomes;
