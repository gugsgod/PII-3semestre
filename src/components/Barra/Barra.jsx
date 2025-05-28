
import icon from "../../assets/seta.png"

const Barra = (props) => {
    return (
        <div>
            <div className="bg-white shadow-xl rounded-xl p-5 flex items-center justify-center w-full cursor-pointer hover:shadow-2xl transition-all duration-300" onClick={props.onClick}>
                <div className="flex items-center justify-between w-full gap-x-96">
                    <div className="flex items-center justify-center gap-10">
                        <img src={props.icon} alt="" />
                        <div className="text-2xl">
                            <p>{props.titulo}</p>
                        </div>
                    </div>
                    <div className="">
                        <img src={icon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Barra;