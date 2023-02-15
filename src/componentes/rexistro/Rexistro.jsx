import { useState } from "react"

function Rexistro() {
    let [ usuario, SetUsuario ] = useState("")
    let [ contrasinal, SetContrasinal ] = useState("")

    function manexadorDoUsuario(evento) {
        SetUsuario (evento.target.id)
    };
    function manexadorDoContrasinal(evento) {
        SetContrasinal (evento.target.id)
    }
    return(
        <>
            <label>
                Usuario:
                <input type="text" id={usuario} onInput={manexadorDoUsuario}/>
            </label>
            <label>
                Contrasinal:
                <input type="password" id={contrasinal} onInput={manexadorDoContrasinal}/>
            </label>
        
        </>
    )
}
export default Rexistro