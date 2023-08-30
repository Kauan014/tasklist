
import Style from "./menu.module.css"

function Menu(props) {
    return (
        <header className={Style.menu}>
            <div>
                <img src={props.imagem} alt="" />
            </div>
            <div className={Style.titulo}>
                <h1>{props.texto}</h1>
            </div>
        </header>
    )


}

export default Menu;