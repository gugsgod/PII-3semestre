import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAutomatico } from "../../../components/Funcoes/funcoes";
import Titulo from "../../../components/Navbar/Titulo";
import AtribuirAtividade from "../../../components/AtribuirAtividade/AtribuirAtividade";

import "./CriarAtividades.css"; // Importando o CSS para estilização

const CriarAtividades = () => {
  const navigate = useNavigate();
  const tipo = localStorage.getItem("tipoUsuario");

  const [nome, setNome] = useState("");
  const [isProva, setIsProva] = useState(false);
  const [turmas, setTurmas] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [turmasSelecionadas, setTurmasSelecionadas] = useState([]);
  const [materiasSelecionadas, setMateriasSelecionadas] = useState([]);

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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/turmas")
      .then(res => res.json())
      .then(data => setTurmas(data))
      .catch(err => console.error("Erro ao carregar turmas:", err));

    fetch("http://localhost:8080/materias")
      .then(res => res.json())
      .then(data => setMaterias(data))
      .catch(err => console.error("Erro ao carregar matérias:", err));
  }, []);

  const handleVoltarClick = () => {
    navigate("/CategoriasPontuacao");
  };

  const toggleSelecionado = (id, lista, setLista) => {
    setLista(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      nome,
      isProva,
      turmas: turmasSelecionadas,
      materias: materiasSelecionadas
    };

    try {
      const res = await fetch("http://localhost:8080/atividades", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Erro ao salvar atividade");

      alert("Atividade criada com sucesso!");
      navigate("/CategoriasPontuacao");
    } catch (err) {
      console.error(err);
      alert("Erro ao criar atividade");
    }
  };

  return (
    <div className="criar-atividades-container">
      <Titulo
        titulo="Criar Atividades"
        onClickBotao={handleVoltarClick}
        mostrarBotao={true}
      />

      <form
        onSubmit={handleSubmit}
        className="atividade-form flex flex-col items-center justify-center mt-8"
      >
        <div className="flex flex-col items-start gap-2 w-full max-w-xs">
          <label htmlFor="nome" className="font-medium">
            Nome da atividade
          </label>
          <input
            id="nome"
            type="text"
            className="border rounded-xl p-2 w-full"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <div className="flex items-center w-full mt-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={isProva}
              onChange={() => setIsProva(!isProva)}
            />
            <label className="select-none">
              Essa atividade é uma prova
            </label>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-start mt-10 gap-10">
          <div className="flex flex-col">
            <label className="mb-2 font-medium self-start">
              Atribuir atividade às turmas
            </label>
            <div className="flex flex-col p-4 bg-white shadow-2xl rounded-xl min-w-[500px] max-h-60 overflow-y-scroll">
              {turmas.map((turma) => (
                <AtribuirAtividade
                  key={turma.id}
                  turma={turma.nome}
                  checked={turmasSelecionadas.includes(turma.id)}
                  onChange={() =>
                    toggleSelecionado(turma.id, turmasSelecionadas, setTurmasSelecionadas)
                  }
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium self-start">
              Selecionar matéria
            </label>
            <div className="flex flex-col p-4 bg-white shadow-2xl rounded-xl min-w-[500px] max-h-60 overflow-y-scroll">
              {materias.map((materia) => (
                <AtribuirAtividade
                  key={materia.id}
                  turma={materia.nome}
                  checked={materiasSelecionadas.includes(materia.id)}
                  onChange={() =>
                    toggleSelecionado(materia.id, materiasSelecionadas, setMateriasSelecionadas)
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-32 mt-14">
          <button
            type="submit"
            className="bg-[#33B1FF] hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-8 rounded-2xl shadow w-32"
          >
            Salvar
          </button>
          <button
            type="button"
            className="bg-[#253E7D] hover:bg-[#1D2A5D] transition-colors text-white font-semibold py-2 px-8 rounded-2xl shadow w-32"
            onClick={handleVoltarClick}
          >
            Fechar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CriarAtividades;
