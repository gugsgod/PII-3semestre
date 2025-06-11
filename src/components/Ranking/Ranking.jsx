const rankingData = [
  { pos: '1º', nome: 'Nicole Silva Mascaretti', pontos: 1500 },
  { pos: '2º', nome: 'Gustavo Versolatto', pontos: 360 },
  { pos: '3º', nome: 'Gustavo Noronha Bomfim', pontos: 15 },
];

const Ranking = () => {
  return (
      <div className="flex flex-col items-center justify-center px-4">
        {/* Fundo */}
      <div className="flex flex-col justify-center bg-gray-300 shadow-lg rounded-2xl w-full max-w-2xl min-h-[400px]">
        {/* Titulo */}
        <div className="bg-gray-400 text-center text-xl font-semibold py-4 rounded-t-2xl">
          Ranking de desempenho
        </div>
        {/* Tabela */}
        <table className="w-full text-center table-fixed bg-gray-300">
          <thead>
            <tr className="">
              <th className="w-1/6 py-3 text-gray-600 border-r border-gray-400">Posição</th>
              <th className="w-2/6 py-3 text-gray-600 border-r border-gray-400">Nome</th>
              <th className="w-1/6 py-3 text-gray-600">Pontos</th>
            </tr>
          </thead>
          <tbody>
            {rankingData.map((item, index) => (
              <tr key={index} className="border-t border-b border-gray-400">
                <td className="py-4 font-medium border-r border-r-gray-400 text-gray-800">{item.pos}</td>
                <td className="py-4 border-r border-r-gray-400 text-gray-800">{item.nome}</td>
                <td className="py-4 border-l border-gray-400 text-gray-800">{item.pontos}</td>
              </tr>
            ))}
            {[...Array(5 - rankingData.length)].map((_, idx) => (
              <tr key={`empty-${idx}`} className="h-14 border-b border-gray-400">
                <td className="border-r border-gray-400">
                </td>
                <td className="border-r border-gray-400">
                </td>
                <td className="border-l border-gray-400">
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center h-2 rounded-b-2xl overflow-hidden">
          <div className="bg-red-500 h-full w-full sm:w-3/12"></div>
          <div className="bg-blue-400 h-full  w-full sm:w-6/12"></div>
          <div className="bg-yellow-400 h-full w-full sm:w-3/12"></div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
