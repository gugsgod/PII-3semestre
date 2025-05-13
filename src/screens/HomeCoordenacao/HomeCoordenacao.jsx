import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/Navbar/navbar';
import Card from '../../components/CardDeInformacao/card';

import "./HomeCoordenacao.css"

import icon1 from '../../assets/atribuir_turmas.png'
import icon2 from '../../assets/atribuir_turmas.png'


function HomeProfessor() {
    const navigate = useNavigate();
    const tipo = localStorage.getItem('tipoUsuario');

    useEffect(() => {
        if (tipo !== 'coordenacao') {
            navigate('/');
        }
    }, [tipo, navigate]);


    return (
        <div>
            <Navbar usuario="Olá, Coordenação"/>
            <div className='home-background'>
                <div className='card-grid'>
                    <Card icon={icon1} label={"Adicionar Pessoa"} onClick={() => navigate("../HomeCoordenacao/AdicionarPessoas/AdicionarPessoas.jsx")}/>
                    <Card icon={icon2} label={"Gerenciar Turmas"}/>
                </div>
            </div>
            {/* <h1>Bem-vindo, {tipo === 'coordenacao' ? 'coordenacao' : 'Usuário'}!</h1> */}

            {/* Ahyfuyfufu */}
            {/* <p>Essa é a área exclusiva para professores.</p> */}
        </div>
    );
}

export default HomeProfessor;
