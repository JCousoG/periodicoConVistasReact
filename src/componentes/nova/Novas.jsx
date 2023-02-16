import styles from "./nova.module.css"
function Novas(props) {
    return(
    <article>
    <h2 className={styles.nova}>{props.titulo}</h2>
    <p>{props.contido}</p>  
     </article>
    )
}
export default Novas