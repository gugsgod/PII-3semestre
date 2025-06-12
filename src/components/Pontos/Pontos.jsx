import { useState, useEffect } from "react";
import icon1 from "../../assets/popup_botao.png";

const Pontos = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [alunos, setAlunos] = useState([]);
  const [selecionados, setSelecionados] = useState([]);
  const [pontos, setPontos] = useState("");

  const idTurma = localStorage.getItem("idTurmaSelecionada");

  useEffect(() => {
    if (isOpen) {
      fetch(`http://localhost:8080/turmas/${idTurma}/alunos`)
        .then((res) => {
          if (!res.ok) throw new Error("Erro ao buscar alunos");
          return res.json();
        })
        .then(setAlunos)
        .catch((err) => {
          console.error("Erro ao carregar alunos:", err);
          setAlunos([]);
        });
    }
  }, [isOpen, idTurma]);

  const toggleSelecionado = (id) => {
    setSelecionados((prev) =>
      prev.includes(id) ? prev.filter((alunoId) => alunoId !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/atribuir-pontos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_categoria: props.idCategoria,
          ids_alunos: selecionados,
          pontos: parseInt(pontos),
        }),
      });

      if (!response.ok) throw new Error("Erro ao enviar pontos");

      alert("Pontos atribuídos com sucesso!");
      setIsOpen(false);
      setSelecionados([]);
      setPontos("");
    } catch (err) {
      alert("Erro ao enviar pontos");
      console.error("Erro:", err);
    }
  };

  return (
    <div className="border-b-2 w-full border-gray-300 p-5">
      <h1 className="text-lg text-gray-700 h-[2vh]">{props.atividade}</h1>
      <div className="flex justify-end">
        <button className="hover:bg-white h-[5vh]" onClick={() => setIsOpen(true)}>
          <img src={icon1} alt="" className="w-7 h-7" />
        </button>

        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center z-50">
            <div className="w-full max-w-3xl h-[600px] bg-white rounded-3xl border overflow-hidden">
              <div className="bg-gray-200 rounded-t-3xl px-6 py-4">
                <h1 className="text-3xl text-gray-700 text-center">Todos os alunos da turma</h1>
              </div>

              <form className="flex flex-col justify-between h-full" onSubmit={handleSubmit}>
                <div className="px-6 py-6 space-y-4 max-h-64 overflow-auto">
                  <table className="min-w-full table-auto">
                    <tbody>
                      {alunos.map((aluno) => (
                        <tr key={aluno.id} className="hover:bg-gray-50">
                          <td className="px-4 py-2 border-b">{aluno.nome}</td>
                          <td className="px-4 py-2 border-b">
                            <input
                              type="checkbox"
                              checked={selecionados.includes(aluno.id)}
                              onChange={() => toggleSelecionado(aluno.id)}
                              className="w-5 h-5"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-center items-center py-4">
                  <input
                    type="number"
                    placeholder="Pontos"
                    value={pontos}
                    onChange={(e) => setPontos(e.target.value)}
                    required
                    className="border border-gray-400 rounded-md px-3 py-2 w-48 mr-4"
                  />

                  <button
                    type="submit"
                    className="bg-blue-400 text-white rounded-3xl px-4 py-2 hover:bg-blue-500 w-36"
                  >
                    Atribuir pontos
                  </button>

                  <button
                    type="button"
                    className="bg-[#253E7D] text-white px-4 py-2 rounded-full hover:bg-blue-600 w-36 ml-4"
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

export default Pontos;
