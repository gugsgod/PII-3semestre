import { useState } from "react";
import icon1 from "../../assets/popup_botao.png";

const Nomes = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [materia, setMateria] = useState("");
  const [atividade, setAtividade] = useState("");
  const [nota, setNota] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/atribuir-nota", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          materia,
          atividade,
          nota,
        }),
      });

      if (!response.ok) throw new Error("Erro ao atribuir nota");

      // Sucesso
      alert("Nota atribuída com sucesso!");
      setIsOpen(false);
    } catch (error) {
      alert("Falha ao atribuir nota.");
      console.error("Erro ao enviar:", error);
    }
  };

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

              {/* Formulário */}
              <form
                className="flex flex-col items-center gap-6 p-10"
                onSubmit={handleSubmit}
              >
                {/* Matéria */}
                <div className="w-full max-w-md">
                  <label className="block mb-1">Matéria</label>
                  <select
                    value={materia}
                    onChange={(e) => setMateria(e.target.value)}
                    className="w-full border border-gray-600 p-2 rounded-md"
                    required
                  >
                    <option value="">Selecione a matéria</option>
                    <option value="matematica">Matemática</option>
                    <option value="portugues">Português</option>
                    <option value="historia">História</option>
                    <option value="ciencias">Ciências</option>
                  </select>
                </div>

                {/* Atividade */}
                <div className="w-full max-w-md">
                  <label className="block mb-1">Nome da atividade</label>
                  <select
                    value={atividade}
                    onChange={(e) => setAtividade(e.target.value)}
                    className="w-full border border-gray-600 p-2 rounded-md"
                    required
                  >
                    <option value="">Selecione a atividade</option>
                    <option value="atividade1">Atividade 1</option>
                    <option value="atividade2">Atividade 2</option>
                    <option value="atividade3">Atividade 3</option>
                  </select>
                </div>

                {/* Nota */}
                <div className="w-full max-w-md">
                  <label className="block mb-1">Nota do aluno</label>
                  <input
                    type="text"
                    value={nota}
                    onChange={(e) => setNota(e.target.value)}
                    className="w-full border border-gray-600 p-2 rounded-md"
                    required
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