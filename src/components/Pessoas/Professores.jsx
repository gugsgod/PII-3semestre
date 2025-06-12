import { useState } from "react";
import icon from "../../assets/excluir.png";

const Modal = ({ professor, onClose }) => {
  if (!professor) return null;

return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
        <div className="bg-white rounded-3xl w-[90%] max-w-md p-10 shadow-2xl relative">
            <h2 className="text-xl font-semibold mb-4">{professor.nome}</h2>
            <p>
                <strong>Nome Completo:</strong> {professor.nome}
            </p>
            <p>
                <strong>E-mail:</strong> {professor.email}
            </p>
            <p>
                <strong>Turma:</strong> {professor.turma}
            </p>
            <div className="flex justify-center mt-6">
                <button onClick={onClose} className="bg-blue-900 text-white px-4 py-2 rounded-full mt-6 w-32">
                    Fechar
                </button>
            </div>
        </div>
    </div>
);
};

const Professor = (props) => {
  const [professorSelecionado, setProfessorSelecionado] = useState(null);
  

  const professores = [
    props.nome1,
    props.nome2,
    props.nome3,
    props.nome4,
    props.nome5,
  ].filter(Boolean);

  const handleClick = (nome) => {
    setProfessorSelecionado({
      nome,
      email: "nicole.mascaretti@p4ed.com",
      turma: "1º Ensino Médio",
    });
  };

  const handleSalvarTurma = (novaTurma) => {
    setProfessorSelecionado((prev) => ({ ...prev, turma: novaTurma }));
    setEditandoTurma(false);
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl">
      <div className="bg-gray-200 rounded-t-3xl px-6 py-4">
        <h1 className="text-2xl text-gray-700 text-center">{props.titulo}</h1>
      </div>

      <div className="px-6 py-6 space-y-4 max-h-64 overflow-auto">
        <table className="min-w-full table-auto">
          <tbody>
            {professores.map((nome, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td
                  className="px-4 py-2 border-b cursor-pointer"
                  onClick={() => handleClick(nome)}
                >
                  {nome}
                </td>
                <td className="px-4 py-2 border-b">
                  <button className="rounded-md bg-white hover:bg-gray-50">
                    <img src={icon} alt="Excluir" className="w-10" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        professor={professorSelecionado}
        onClose={() => setProfessorSelecionado(null)}
        onEditarTurma={() => setEditandoTurma(true)}
      />
    </div>
  );
};

export default Professor;
