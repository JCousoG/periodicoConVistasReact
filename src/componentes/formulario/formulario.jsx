import { useState } from "react"

function Formulario () {
    let [ usuario, SetUsuario] = useState("")
    let [ correo, SetCorreo] = useState("")
    let [ contrasinal, SetContrasinal] = useState("")
    let [ informacion, SetInformacion] = useState("")
    let [ cookies, SetCookies ] = useState("necesarias")

    function manexadorDoUsuario (evento) {
        SetUsuario (evento.target.value)
    }
    function manexadorDoCoreo (evento) {
        SetCorreo (evento.target.value)
    }
    function manexadorDoContrasinal (evento) {
        SetContrasinal (evento.target.value)
    }
    function manexadorInformacion (evento) {
        SetInformacion (evento.target.value)
    }
    function manexadorCookies (evento) {
        SetCookies(evento.target.value)
    }


    return(
        <form>
        <label>
            Usuario
            <input type="text"  value={usuario} onInput={manexadorDoUsuario}/>
        </label>
        <label>
            Dirección de correo electrónico
            <input type="email" value={correo} onInput={manexadorDoCoreo}/>
        </label>
        <label>
            Contrasinal
            <input type="password" value={contrasinal} onInput={manexadorDoContrasinal}/>
        </label>
        <label>
        Quero recibir correos con información
        <input type="checkbox" value={informacion} onClick={manexadorInformacion}/>
    </label>
    <fieldset>
        <p>
            Cookies
        </p>
        <label>
            Acepto tódalas cookies
            <input type="radio" value="aceptoTodas" name="cookies" onClick={manexadorCookies}/>
        </label>
        <label>
            So acepto as cookies necesarias
            <input type="radio" name="cookies" value="necesarias" onClick={manexadorCookies} checked={cookies === "necesarias"}/>
        </label>
        <label>
            Non acepto as cookies
            <input type="radio" name="cookies" value="nonAcepto" onClick={manexadorCookies}/>
        </label>
    </fieldset>
    
    <input type="submit" value="enviar"/>
    <p>{usuario}{correo}</p>

       </form>
    )
}
export default Formulario