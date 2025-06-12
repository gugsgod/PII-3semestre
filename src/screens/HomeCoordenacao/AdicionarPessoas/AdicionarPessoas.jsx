import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAutomatico } from '../../../components/Funcoes/funcoes';
import "./AdicionarPessoas.css";

function AdicionarPessoas() {
    const navigate = useNavigate();
    const tipo = localStorage.getItem("tipoUsuario");

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [atribuirTurma, setAtribuirTurma] = useState(false);
    const [turmasSelecionadas, setTurmasSelecionadas] = useState([]);
    const [erro, setErro] = useState("");

    const opcoesTurmas = [
        "9° Ano",
        "1° Ensino Médio",
        "2° Ensino Médio",
        "3° Ensino Médio"
    ];

    // useEffect(() => {
    //     fetchAutomatico("http://localhost:8080/jwtcoordenacao")
    //         .then(res => {
    //             if (!res.ok) throw new Error("Não autorizado");
    //             return res.text();
    //         })
    //         .then(data => {
    //             console.log("Resposta:", data);
    //         })
    //         .catch(err => {
    //             console.error("Erro:", err);
    //             alert("Acesso não autorizado");
    //             navigate("/");
    //         });
    // }, []);

    const validarEmail = (email) => {
        return (
            email.endsWith("@p4ed.com") ||
            email.endsWith("@sistemapoliedro.com.br")
        );
    };

    const handleTurmaChange = (turma) => {
        if (turmasSelecionadas.includes(turma)) {
            setTurmasSelecionadas(turmasSelecionadas.filter(t => t !== turma));
        } else {
            setTurmasSelecionadas([...turmasSelecionadas, turma]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nome || !email) {
            setErro("Nome e e-mail são obrigatórios.");
            return;
        }

        if (!validarEmail(email)) {
            setErro("E-mail inválido. Use um domínio institucional permitido.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    turmas: atribuirTurma ? turmasSelecionadas : []
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                setErro(errorData.message || "Erro ao cadastrar pessoa.");
                return;
            }

            // Limpa o formulário
            setNome("");
            setEmail("");
            setAtribuirTurma(false);
            setTurmasSelecionadas([]);
            setErro("");

            alert("Pessoa cadastrada com sucesso!");
        } catch (err) {
            console.error("Erro ao cadastrar:", err);
            setErro("Erro na comunicação com o servidor.");
        }
    };

    const handleVoltarClick = () => {
        localStorage.removeItem('turmaSelecionada');
        navigate('/coordenacao');
    }

    return (
        <div className="adicionar-page">
            <div className="ms-4 mt-4 flex justify-start text-center p-1">
                <button className="absolute top-4 right-4 bg-[#D9D9D9] rounded-2xl p-1 w-24 shadow-lg hover:text-white" onClick={handleVoltarClick}>Voltar</button>
            </div>
            <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg">
                <div className="bg-gray-200 rounded-t-3xl px-6 py-4">
                    <h1 className="text-center text-xl text-gray-800">
                        Adicionar pessoas
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4 mb-6 mt-6">
                    {erro && (
                        <div className="text-red-600 text-sm mb-2">{erro}</div>
                    )}

                    <div>
                        <label htmlFor="nome" className="block text-sm text-gray-700">Nome:</label>
                        <input
                            id="nome"
                            type="text"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm text-gray-700">E-mail:</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            id="atribuirTurma"
                            type="checkbox"
                            checked={atribuirTurma}
                            onChange={(e) => setAtribuirTurma(e.target.checked)}
                        />
                        <label htmlFor="atribuirTurma" className="text-sm text-gray-700">
                            Atribuir turma
                        </label>
                    </div>

                    {atribuirTurma && (
                        <div className="mt-4 pl-4 border-l-2 border-gray-200">
                            <h3 className="text-sm font-medium text-gray-700 mb-2">Selecionar turmas:</h3>
                            <div className="space-y-2">
                                {opcoesTurmas.map((turma) => (
                                    <div key={turma} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`turma-${turma}`}
                                            checked={turmasSelecionadas.includes(turma)}
                                            onChange={() => handleTurmaChange(turma)}
                                            className="mr-2"
                                        />
                                        <label htmlFor={`turma-${turma}`} className="text-sm text-gray-700">
                                            {turma}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="">
                        <button
                            type="submit"
                            className="mx-auto block w-96 bg-blue-800 text-white rounded-full py-2 mt-10"
                        >
                            Adicionar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdicionarPessoas;
