import { Children } from "react";

export function campoDeFormulario ({Children}){
    return(
        <fieldset>
            {Children}
        </fieldset>
    )
}