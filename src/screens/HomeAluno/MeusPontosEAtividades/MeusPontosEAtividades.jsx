import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import "./MeusPontosEAtividades.css"

function MeusPontosEAtividades() {
    const navigate = useNavigate();
    const tipo = localStorage.getItem('tipoUsuario');

    useEffect(() => {
        if (tipo !== 'aluno') {
            navigate('/');
        }
    }, [tipo, navigate]);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const atividades = [
        { descricao: 'Prova 1 - História', pontos: 10 },
        { descricao: 'Prova 2 - Geografia', pontos: 10 },
        { descricao: 'Prova 1 - Geografia', pontos: 10 },
        { descricao: 'Bom comportamento - História', pontos: 15 },
        { descricao: 'Bom comportamento - Matemática', pontos: 15 },
        { descricao: 'Atividade 4 - Matemática', pontos: 5 },
        { descricao: 'Trabalho extra - História', pontos: 15 },
        { descricao: 'Atividade especial - Geografia', pontos: 20 },
    ];

    const totalPontos = atividades.reduce((total, atividade) => total + atividade.pontos, 0);

    return (

        <div className="fundo-painel">
            <div className="painel-box">
                <h1 className="painel-titulo">Meus pontos e atividades</h1>

                <div className="painel-conteudo">
                    <div className="tabela-box">
                        <table className="tabela">
                            <tbody>
                                {atividades.map((atividade, index) => (
                                    <tr key={index} className="linha">
                                        <td className="coluna-esquerda">{atividade.descricao}</td>
                                        <td className="coluna-direita">{atividade.pontos} pontos</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="pontos-circulo">
                        <span className="pontos-total">{totalPontos}</span>
                        <span className="pontos-label">Pontos</span>
                    </div>
                </div>

                <div className="botao-container">
                    <button className="botao-relatorio">Emitir relatório</button>
                </div>
            </div>
        </div>

    );

}

export default MeusPontosEAtividades;