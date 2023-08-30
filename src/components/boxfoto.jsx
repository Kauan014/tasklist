import Style from "./boxfoto.module.css"

function Boxfoto(props){
    return(
        <section className={Style.caixa}>

           <img src={props.imagem}alt="" />
           <div>
           <span>{props.texto}</span>
            <h1>{props.frase}</h1>
           </div>
        
        </section>
    )
}
export default Boxfoto;