const Titulo = ({ titulo, mostrarBotao, onClickBotao }) => {
  return (
    <nav className="flex items-center p-6 bg-white shadow-md justify-between">
      {/* Título */}
      <h1 className="text-3xl text-[#4C4747] font-sans">{titulo}</h1>
      {/* Botão condicional */}
      {mostrarBotao && (
        <button
          onClick={onClickBotao}
          className="mr-4 bg-[#D9D9D9] rounded-2xl p-1 w-24 shadow-lg hover:text-white"
        >
          Voltar
        </button>
      )}
    </nav>
  );
};

export default Titulo;
