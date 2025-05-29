import icon from "../../assets/excluir.png";

const Tabela = (props) => {
  return (
    // Fundo
    <div className="w-full max-w-xl bg-white rounded-3xl ">
      {/* Titulo */}
      <div className="bg-gray-200 rounded-t-3xl px-6 py-4">
        <h1 className="text-3xl text-gray-700 text-center">{props.titulo}</h1>
      </div>

      <div className="px-6 py-6 space-y-4 max-h-64 overflow-auto">
        <table className="min-w-full table-auto">
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{props.atividade1}</td>
              <td className="px-4 py-2 border-b">
                <button className="rounded-3xl hover:bg-red-500 bg-white">
                  <img src={icon} alt="" className="w-10" />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{props.atividade2}</td>
              <td className="px-4 py-2 border-b">
                <button className="rounded-3xl bg-white hover:bg-red-500">
                  <img src={icon} alt="" className="w-10" />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{props.atividade3}</td>
              <td className="px-4 py-2 border-b">
                <button className="rounded-3xl bg-white hover:bg-red-500">
                  <img src={icon} alt="" className="w-10" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabela;
