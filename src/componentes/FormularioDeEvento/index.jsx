import { CampoDeEntrada } from "/src/componentes/CampoDeEntrada";
import {Label} from "/src/componentes/Label";
import {CampoDeFormulario} from "/src/componentes/CampoDeFormulario";
import {TituloFormulario} from "/src/componentes/TituloFormulario"


export function FormularioDeEvento(){
    return(
        <form className="form-evento">
            
              <TituloFormulario>
                Preencha para criar uma evento:
              </TituloFormulario>
              <div className="campos">
                  <CampoDeFormulario> 
                  <Label htmlFor="nome">
                   Qual o nome do evento?
                 </Label>
                 <CampoDeEntrada 
                  type="text"
                  id="nome"
                  name="nomeEvento"
                  placeholder="Summer dev hits"
                  />
                 </CampoDeFormulario>
                  <CampoDeFormulario> 
                  <Label htmlFor="dataEvento">
                   Data do evento: 
                 </Label>
                 <CampoDeEntrada 
                  type="date"
                  id="dataEvento"
                  name="dataEvento"
                  />
                 </CampoDeFormulario>
                  <CampoDeFormulario> 
                  <Label htmlFor="temaEvento">
                    Tema do Evento                 
                  </Label>
                 <CampoDeEntrada 
                  type="text"
                  id="temaEvento"
                  name="temaEvento"
                  />
                 </CampoDeFormulario>
              </div>
          
        </form>
    )
}