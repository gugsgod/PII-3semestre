import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Tabela from "../../../components/Tabela/Tabela";

import icon from "../../../assets/excluir.png"

import "./GerenciarPessoas.css"

const GerenciarPessoas = () => {

    const navigate = useNavigate()
    const tipo = localStorage.getItem("tipoUsuario")

    useEffect(() => {
        if (tipo !== "coordenacao") {
            navigate("/")
        }
    }, [tipo, navigate])

    return (
        <div className="gerenciar-page">
            <div className="flex justify-center gap-10">
                <div className=" ">
                    <Tabela titulo="Alunos Cadastrados"/>
                </div>
                <div className="">
                    <Tabela titulo="Professores Cadastrados"/>
                </div>
            </div>
        </div>
    )
}

export default GerenciarPessoas