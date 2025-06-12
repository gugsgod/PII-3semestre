import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { fetchAutomatico } from '../../../components/Funcoes/funcoes';
import "./MeusPontosEAtividades.css";

function MeusPontosEAtividades() {
  const navigate = useNavigate();
  const tipo = localStorage.getItem('tipoUsuario');
  const nomeAluno = localStorage.getItem("nome") || "Aluno não identificado";

  const [atividades, setAtividades] = useState([]);
  const [totalPontos, setTotalPontos] = useState(0);

  // Autorização protegida (comente para testes)
  // useEffect(() => {
  //     fetchAutomatico("http://localhost:8080/jwtaluno")
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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    // Substitua pelo seu endpoint real
    fetchAutomatico("http://localhost:8080/aluno/pontos-e-atividades")
      .then(res => res.json())
      .then(data => {
        setAtividades(data);
        const total = data.reduce((acc, item) => acc + item.pontos, 0);
        setTotalPontos(total);
      })
      .catch(err => {
        console.error("Erro ao buscar atividades:", err);
        alert("Erro ao carregar atividades");
      });
  }, []);

  const emitirRelatorio = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Relatório de Pontos', 14, 22);
    doc.setFontSize(12);
    doc.text(`Aluno: ${nomeAluno}`, 14, 30);
    doc.text(`Total de pontos: ${totalPontos}`, 14, 35);

    const dadosTabela = atividades.map((a) => [a.descricao, `${a.pontos} pontos`]);

    doc.autoTable({
      head: [['Atividade', 'Pontos']],
      body: dadosTabela,
      startY: 40
    });

    doc.save('relatorio-de-pontos.pdf');
  };

  const handleVoltarClick = () => {
    localStorage.removeItem('turmaSelecionada');
    navigate('/aluno');
  };

  return (
    <div className="fundo-painel">
      <div className="ms-4 mt-4 flex justify-start text-center p-1">
        <button
          className="absolute top-4 right-4 bg-[#D9D9D9] rounded-2xl p-1 w-24 shadow-lg hover:text-white"
          onClick={handleVoltarClick}
        >
          Voltar
        </button>
      </div>
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
          <button className="botao-relatorio" onClick={emitirRelatorio}>
            Emitir relatório
          </button>
        </div>
      </div>
    </div>
  );
}

export default MeusPontosEAtividades;
