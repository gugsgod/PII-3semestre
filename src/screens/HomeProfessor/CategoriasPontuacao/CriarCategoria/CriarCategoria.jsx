import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Titulo from "../../../../components/Navbar/Titulo";

const CriarCategoria = () => {
    const navigate = useNavigate();
    const tipo = localStorage.getItem("tipoUsuario");

    useEffect(() => {
        fetchAutomatico("http://localhost:8080/jwtprofessor")
            .then(res => {
                if (!res.ok) throw new Error("Não autorizado");
                return res.text();
            })
            .then(data => {
                console.log("Resposta:", data);
            })
            .catch(err => {
                console.error("Erro:", err);
                alert("Acesso não autorizado");
                navigate("/");

            });
    }, []);
    const handleVoltarClick = () => {
        navigate("/CategoriasPontuacao");
    };

    return (
        <div>
            <Titulo titulo="Criar Categoria de Pontuação" onClickBotao={handleVoltarClick} mostrarBotao={true}/>

            {/* Aqui você pode adicionar o conteúdo da página de criação de categoria */}
            <div className="bg-white">
                <form action="" className="flex flex-col gap-4 p-6 max-w-md mx-auto mt-24">
                    <label htmlFor="categoria">Nome da Categoria:</label>
                    <input type="text" id="categoria" />
                    <label htmlFor="descricao">Descrição:</label>
                    <input type="text" id="descricao" />
                </form>
            </div>
        </div>
    );
};

export default CriarCategoria;
