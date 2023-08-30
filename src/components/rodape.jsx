import Style from "./rodape.module.css"

function Rodape(props) {
    return (
        <div className= {Style.rodape}>
            <div>
            <div className={Style.globo}>
                <img src={props.globo} alt="" />
            </div>
            </div>
            <div>
                <div className={Style.mick}>
                <img src={props.mick} alt="" />
            </div>
            </div>
            

        </div>
    )
}
export default Rodape;