import { CampoDeEntrada } from "../CampoDeEntrada";

export function FormularioDeEvento(){
    return(
        <form className="form-evento">
            <TituloDeEvento>
              Preencha para criar uma evento:
            </TituloDeEvento>
            <CampoDeFormulario>
                <Label htmlFor="nome">

              </Label>
              <CampoDeEntrada 
                type="text"
                id="nome"
                placeholder="Summer dev"
                name="nomeEvento"
              />
            </CampoDeFormulario>
        </form>
    )
}