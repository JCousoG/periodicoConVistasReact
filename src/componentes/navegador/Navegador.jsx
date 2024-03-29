import { useState } from "react"
import Vistalocal from "../../vistas/vistalocal"
import Vistaprincipal from "../../vistas/vistaprincipal"
import Formulario from "../formulario/formulario"

function Navegador() {
    
    let [ vista, setVista] = useState("vistaprincipal")
    function manejadorNav(evento) {
        setVista(evento.target.id)
      }
      
    return(
        <>      
        <nav>
      <h3>Menú</h3>
      <ul>
        <li><a id="vistaprincipal" onClick={manejadorNav}>Portada</a></li>
        <li><a id="vistalocal" onClick={manejadorNav}>Local</a></li>
        <li><a id="formulario" onClick={manejadorNav}>Date de alta</a> </li>
      </ul>
    </nav>
    {vista === "vistaprincipal" &&  <h2>PORTADA</h2>}
   
      {vista === "vistalocal" && <h2>LOCAL</h2>}
      {vista === "formulario" && <h2>DATE DE ALTA</h2>}
    <div id="noticias">
    {vista === "vistaprincipal" &&   <Vistaprincipal/>}
   
      {vista === "vistalocal" && <Vistalocal/>}
      {vista === "formulario" && <Formulario/>}
    </div>

  </>
    )
}
export default Navegador