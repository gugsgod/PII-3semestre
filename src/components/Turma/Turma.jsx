
const Turmas = (props) => {
    return (
        <div className="bg-slate-200 p-10 shadow-md w-full transition-colors duration-300 hover:bg-slate-500 hover:shadow-lg hover:scale-105 transform cursor-pointer">
            <h1 className="text-xl text-black">{props.turma}</h1>
        </div>
    )
}

export default Turmas;