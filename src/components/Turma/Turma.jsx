
const Turmas = (props) => {
    return (
        <div className='bg-slate-200 p-10 hover:bg-slate-500 shadow-md w-full'>
            <h1 className="text-xl text-black">{props.turma}</h1>
        </div>
    )
}

export default Turmas;