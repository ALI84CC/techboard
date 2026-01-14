import './titulo-formulario.estilos.css'

export function TituloFormulario({Children}){
    return(
        <h2 className='titulo-form'>
            {Children}
        </h2>
    )
}