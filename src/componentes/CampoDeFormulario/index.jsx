import "./CampoDeFormulario.estilos.css"

export function CampoDeFormulario({Children}){
    return(
        <fieldset className="campo-form">
            {Children}
        </fieldset>
    )
}