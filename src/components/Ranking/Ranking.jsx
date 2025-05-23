const Ranking = () => {
  return (
    // Fundo
    <div className="w-full max-w-xl bg-gray-200 rounded-t-3xl">
      {/* Titulo */}
      <div className="bg-gray-300 rounded-t-3xl px-6 py-4">
        <h1 className="text-3xl text-gray-700 font-sans text-center">
          Ranking de desempenho
        </h1>
      </div>

      {/* Tabela */}
      <div className="overflow-y-auto max-h-[400px]">
        <table className="min-w-full table-auto">
          <tbody className="text-center text-xl">
            <tr className="hover:bg-gray-100">
              <td className="px-7 py-2 border border-gray-300">1°</td>
              <td className="px-4 py-2 border border-gray-300">
                nome bem grande
              </td>
              <td className="px-4 py-2 border border-gray-300">1000</td>
            </tr>

            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border border-gray-300">2°</td>
              <td className="px-4 py-2 border border-gray-300">Teste</td>
              <td className="px-4 py-2 border border-gray-300">1000</td>
            </tr>

            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border border-gray-300">3°</td>
              <td className="px-4 py-2 border border-gray-300">Teste</td>
              <td className="px-4 py-2 border border-gray-300">1000</td>
            </tr>

            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border border-gray-300">4°</td>
              <td className="px-4 py-2 border border-gray-300">Teste</td>
              <td className="px-4 py-2 border border-gray-300">1000</td>
            </tr>

            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border border-gray-300">5°</td>
              <td className="px-4 py-2 border border-gray-300">Teste</td>
              <td className="px-4 py-2 border border-gray-300">1000</td>
            </tr>

            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border border-gray-300">6°</td>
              <td className="px-4 py-2 border border-gray-300">Teste</td>
              <td className="px-4 py-2 border border-gray-300">1000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center">
        <div className="bg-red-500 w-full text-red-500">teste</div>
        <div className="bg-blue-300 w-full text-blue-300">teste</div>
        <div className="bg-yellow-300 w-full text-yellow-300">teste</div>
      </div>
    </div>
  );
};

export default Ranking;
