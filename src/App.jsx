import './App.css'

 function FormularioDeEvento(){
 return(
  <form className='form-evento'>
    <h2>
      Preencha para criar um Evento
    </h2>
    <fieldset>
      <label>Qual o nome do eu evento</label>
      <input type='text' id='nome'/>
    </fieldset>
  </form>
  )
}

function App() {
  return (
    <main>
        <header>
          <img src='Logo.png' />
        </header>
        <section>
          <img src='banner.png' />
        </section>
        <FormularioDeEvento />
    </main>     
  )
}

export default App
