import styles from "./nova.module.css"
function Novas(props) {
    return(
    <article>
    <h3 className={styles.nova}>{props.titulo}</h3>
    <p>{props.contido}</p>  
     </article>
    )
}
export default Novas