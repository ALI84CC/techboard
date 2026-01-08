export function Label({children}){
    return(
        <label htmlFor={htmlFor}>
            {children}
        </label>
    )
}