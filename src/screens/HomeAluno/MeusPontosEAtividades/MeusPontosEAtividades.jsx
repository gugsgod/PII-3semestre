import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from "../../../components/Navbar/navbar"
import Card from '../../../components/CardDeInformacao/card';

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
    <div className="w-full min-h-screen bg-white py-10 px-6">
      <h1 className="text-2xl font-medium mb-8">Meus pontos e atividades</h1>
      <div className="flex flex-wrap gap-6 items-start">
        <div className="bg-white rounded-3xl shadow-md w-full max-w-xl h-[400px] overflow-y-scroll">
          <table className="w-full text-left">
            <tbody>
              {atividades.map((atividade, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4">{atividade.descricao}</td>
                  <td className="py-3 px-4 text-right">{atividade.pontos} pontos</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center justify-center w-48 h-48 rounded-full bg-white shadow-md">
          <span className="text-4xl font-semibold">{totalPontos}</span>
          <span className="text-lg">Pontos</span>
        </div>
      </div>
      <div className="mt-8">
        <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-full">
          Emitir relatório
        </button>
      </div>
    </div>
  );
}

export default MeusPontosEAtividades;