import "./navbar.css";


const Titulo = (props) => {
    
    return (
        <nav className="navbar">
            <h1 className="text-3xl text-[#4C4747] p-3 font">{props.titulo}</h1>
        </nav>
    )
}

export default Titulo