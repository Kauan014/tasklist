import Style from "./btn.module.css"

function Btn (props){
    return(
        <button onClick={props.acao}className={Style.btn}>+</button>
    )
}
export default Btn;