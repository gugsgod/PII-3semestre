import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

import Titulo from "../../../components/Navbar/Titulo"
import Pontos from "../../../components/Pontos/Pontos"


const AtribuirPontos = () => {

    const navigate = useNavigate()
    const tipo = localStorage.getItem("tipoUsuario")

    useEffect(() => {
        if (tipo !== "professor") {
            navigate("/")
        }
    }, [tipo, navigate])

    // Tira a scrollbar do body
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])

    // Popup


    return (
        <div>
            <Titulo titulo="Atribuir pontos" />

            <div className="flex flex-col items-center justify-center h-screen gap-5 p-10 border-black overflow-y-scroll mt-10 mb-10">
                <Pontos atividade="Atividade 1 - História"/>
                <Pontos atividade="Atividade 2 - sMatemática"/>
                <Pontos atividade="Atividade 3 - Ciências"/>
                <Pontos atividade="Atividade 4 - Geografia"/>
                <Pontos atividade="Atividade 5 - Inglês"/>
                <Pontos atividade="Atividade 6 - Educação Física"/>
                <Pontos atividade="Atividade 7 - Artes"/>
                <Pontos atividade="Atividade 8 - História"/>
            </div>
        </div>
    )
}

export default AtribuirPontos