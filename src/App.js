import './App.css';
import Logo from './components/logo'
import perfil from './assets/perfil.svg'
import sacola from './assets/sacola.svg'

const icones = [perfil, sacola];
const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];


function App() {

  return (
    <div className="App">
      <header className="App-header">
          <Logo />
          <ul className='opcoes'>
          {textoOpcoes.map( (texto) =>(
            <li className='opcao'><p>{texto}</p></li>
          ) )}

          </ul>
          <ul className='icones'>
            {icones.map(( icone)=>  (
            <li className='icone'><img src={icone}></img></li>

            ))}
          </ul>

      </header>
    </div>
  );
}

export default App;
