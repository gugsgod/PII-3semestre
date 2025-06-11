import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

import Titulo from "../../../components/Navbar/Titulo"
import Pontos from "../../../components/Pontos/Pontos"


const AtribuirPontos = () => {

    const navigate = useNavigate()
    const tipo = localStorage.getItem("tipoUsuario")


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
    // Tira a scrollbar do body
    // useEffect(() => {
    //     document.body.style.overflow = "hidden"
    //     return () => {
    //         document.body.style.overflow = "auto"
    //     }
    // }, [])

    // Popup


    return (
        <div>
            <Titulo titulo="Atribuir pontos" />
            <div>

            </div>
            <div className="max-h-[80vh] overflow-y-auto">
                <Pontos atividade="História"/>
                <Pontos atividade="Matemática"/>
                <Pontos atividade="Ciências"/>
                <Pontos atividade="Geografia"/>
                <Pontos atividade="Inglês"/>
                <Pontos atividade="Educação Física"/>
            </div>
        </div>
    )
}

export default AtribuirPontos
