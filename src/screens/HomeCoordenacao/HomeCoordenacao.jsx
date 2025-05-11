import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <h1>Bem-vindo, {tipo === 'professor' ? 'Professor' : 'Usuário'}!</h1>

            {/* Ahyfuyfufu */}
            <p>Essa é a área exclusiva para professores.</p>
        </div>
    );
}

export default HomeProfessor;
