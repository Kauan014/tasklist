import Style from "./tarefa.module.css"

function Tarefa( props )
{
    return(
        <li className="itemTarefa" key={props.key}>
            <div className="faixa" style={{ backgroundColor: props.cor }}>
            </div>
            <div>
                {props.texto}
            </div>
            <div className="btn-excluir"><i class="fa fa-times-circle-o" aria-hidden="true" onClick={props.excluir}></i>  
            </div>
            <div>

            <button onClick={props.alterarStatus}>{props.status ? <i class="fa fa-check-circle" aria-hidden="true"></i> : <i class="fa fa-circle-thin" aria-hidden="true"></i>}</button>
            </div>
        </li>
    )
}
export default Tarefa;