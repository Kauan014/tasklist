import Style from "./boxdinamico.module.css"
import Addtarefa from "./addtarefa";

function Boxdinamico(props){
    
    return(
        <div className={Style.box} style={{ display: props.exibir }}>
          
            <div className={Style.input}>
            <h1>Tarefa:</h1>
                <input type="text" onChange={props.acao} value={props.valor} />
            </div>

            <div className={Style.add}>
            <Addtarefa add={props.add} texto={props.texto} />
            </div>
            
        </div>
    )
}

export default Boxdinamico;