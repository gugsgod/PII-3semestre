import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


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
        { descricao: 'Trabalho em equipe - Sociologia', pontos: 30 },
        { descricao: 'Trabalho em equipe - Filosofia', pontos: 30 },
        { descricao: 'Entrega de atividades - Filosofia', pontos: 15 },
        { descricao: 'Bom comportamento - História', pontos: 15 },
        { descricao: 'Bom comportamento - Filosofia', pontos: 15 },
        { descricao: 'Entrega de atividades - História', pontos: 15 },
        { descricao: 'Bom comportamento - Sociologia', pontos: 15 },
        { descricao: 'Trabalho em equipe - História', pontos: 20 },
    ];

    const totalPontos = atividades.reduce((acc, atividade) => acc + atividade.pontos, 0);
    const emitirRelatorio = () => {
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text('Relatório de Pontos', 14, 22);

        doc.setFontSize(12);
        doc.text(`Total de pontos: ${totalPontos}`, 14, 32);

        const dadosTabela = atividades.map((a) => [a.descricao, `${a.pontos} pontos`]);

        doc.autoTable({
            head: [['Atividade', 'Pontos']],
            body: dadosTabela,
            startY: 40
        });

        doc.save('relatorio-de-pontos.pdf');
    };

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
                    <button className="botao-relatorio" onClick={emitirRelatorio}>Emitir relatório</button>
                </div>
            </div>
        </div>

    );

}

export default MeusPontosEAtividades;