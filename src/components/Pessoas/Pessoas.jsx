import { useState } from "react";
import icon from "../../assets/excluir.png";

const EditarTurmaModal = ({ turmaAtual, onClose, onSave }) => {
  const turmas = ["9º Ano", "1º Ensino Médio", "2º Ensino Médio", "3º Ensino Médio"];
  const [turmaSelecionada, setTurmaSelecionada] = useState(turmaAtual);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl w-[90%] max-w-md p-6 shadow-2xl">
        <h2 className="text-xl font-semibold mb-4">Editar turma</h2>
        <p className="mb-4">Selecione a turma:</p>
        <div className="space-y-2 mb-6">
          {turmas.map((turma) => (
            <label key={turma} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={turmaSelecionada === turma}
                onChange={() => setTurmaSelecionada(turma)}
              />
              <span>{turma}</span>
            </label>
          ))}
        </div>
        <div className="flex justify-between">
          <button onClick={() => onSave(turmaSelecionada)} className="bg-sky-400 text-white px-4 py-2 rounded-full">
            Salvar
          </button>
          <button onClick={onClose} className="bg-blue-900 text-white px-4 py-2 rounded-full">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ aluno, onClose, onEditarTurma }) => {
  if (!aluno) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
      <div className="bg-white rounded-3xl w-[90%] max-w-md p-6 shadow-2xl">
        <h2 className="text-xl font-semibold mb-4">{aluno.nome}</h2>
        <p><strong>Nome Completo:</strong> {aluno.nome}</p>
        <p><strong>E-mail:</strong> {aluno.email}</p>
        <p><strong>Turma:</strong> {aluno.turma}</p>
        <div className="flex justify-between mt-6">
          <button onClick={onEditarTurma} className="bg-sky-400 text-white px-4 py-2 rounded-full">
            Editar turma
          </button>
          <button onClick={onClose} className="bg-blue-900 text-white px-4 py-2 rounded-full">
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

const Pessoas = ({ titulo }) => {
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);
  const [editandoTurma, setEditandoTurma] = useState(false);
  const [alunos, setAlunos] = useState([
    { nome: "Nicole Mascaretti", email: "nicole@p4ed.com", turma: "1º Ensino Médio" },
    { nome: "Caio Onha Ferreira", email: "caio@p4ed.com", turma: "2º Ensino Médio" },
    { nome: "Gustavo Noronha Bomfim", email: "gustavo@p4ed.com", turma: "3º Ensino Médio" },
    { nome: "Pietro Maffesoni", email: "pietro@p4ed.com", turma: "1º Ensino Médio" }
  ]);

  const handleClick = (aluno) => {
    setAlunoSelecionado(aluno);
  };

  const handleSalvarTurma = (novaTurma) => {
    setAlunos(prev => prev.map(a =>
      a.nome === alunoSelecionado.nome ? { ...a, turma: novaTurma } : a
    ));
    setEditandoTurma(false);
  };

  const excluirAluno = (nome) => {
    setAlunos(prev => prev.filter(a => a.nome !== nome));
  };

  return (
    <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl">
      <div className="bg-gray-200 rounded-t-3xl px-6 py-4">
        <h1 className="text-2xl text-gray-700 text-center">{titulo}</h1>
      </div>
      <div className="px-6 py-6 space-y-4 max-h-64 overflow-auto">
        <table className="min-w-full table-auto">
          <tbody>
            {alunos.map((aluno, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b cursor-pointer" onClick={() => handleClick(aluno)}>
                  {aluno.nome}
                </td>
                <td className="px-4 py-2 border-b">
                  <button className="rounded-md bg-white hover:bg-gray-50" onClick={() => excluirAluno(aluno.nome)}>
                    <img src={icon} alt="Excluir" className="w-10" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal aluno={alunoSelecionado} onClose={() => setAlunoSelecionado(null)} onEditarTurma={() => setEditandoTurma(true)} />
      {editandoTurma && (
        <EditarTurmaModal turmaAtual={alunoSelecionado?.turma} onClose={() => setEditandoTurma(false)} onSave={handleSalvarTurma} />
      )}
    </div>
  );
};

export default Pessoas;

