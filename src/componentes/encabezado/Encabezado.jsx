import styles from "./encabezado.module.css"
import sentidiño from "./images.jfif"
function Encabezado() {
    return(
       <div className={styles.encabezado} id="cabeceira">
       <h1> O MEU PERIÓDICO UTILIZANDO VISTAS
        </h1>
        <img src={sentidiño} alt="sentidiño" />
        </div>
    )
}
export default Encabezado