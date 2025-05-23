import { useState } from "react"


const Pontos = (props) => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b-2 w-full border-gray-300 p-5">
        <h1 className="text-lg text-gray-700">{props.atividade}</h1>
        <div className="flex justify-end">
            <button onClick={() => setIsOpen(true)}>
            </button>

            {isOpen && (
                <div className="absolute top-0 left-0 w-full h-full bg-transparent bg-opacity-50 flex items-center justify-center">
                    
                    <div className="w-full max-w-xl bg-white rounded-3xl p-6">

                        {/* Titulo */}
                        <div className="bg-gray-200 rounded-t-3xl px-6 py-4">
                            <h1 className="text-3xl text-gray-700 text-center">Todos os alunos</h1>
                        </div>

                        <div className="px-6 py-6 space-y-4 max-h-64 overflow-auto">
                            <table className="min-w-full table-auto">
                                <tbody>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-4 py-2 border-b">Caio Onha Ferreira</td>
                                        <td className="px-4 py-2 border-b"></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-4 py-2 border-b">Nicole Silva Mascaretti</td>
                                        <td className="px-4 py-2 border-b"></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-4 py-2 border-b">Gustavo Bomfim</td>
                                        <td className="px-4 py-2 border-b"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="flex justify-center mt-4">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                                onClick={() => setIsOpen(false)}
                            >
                                Fechar
                            </button>
                        </div>

                    </div>

                </div>
            )}
        </div>
    </div>
  )
}

export default Pontos