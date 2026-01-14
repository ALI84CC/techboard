import './label.estilos.css'

export function Label({children}){
    return(
        <label htmlFor={htmlFor} className='label'>
            {children}
        </label>
    )
}