import icon from "../../assets/excluir.png";

const Tabela = (props) => {
  const { titulo, itens = [], onDelete } = props;

  return (
    <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl">
      <div className="bg-gray-200 rounded-t-3xl px-6 py-4">
        <h1 className="text-3xl text-gray-700 text-center">{titulo}</h1>
      </div>

      <div className="px-6 py-6 space-y-4 max-h-64 overflow-auto">
        <table className="min-w-full table-auto">
          <tbody>
            {itens.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{item.nome}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    className="rounded-md bg-white hover:bg-gray-50"
                    onClick={() => onDelete(item.id)}
                  >
                    <img src={icon} alt="Excluir" className="w-10" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabela;
