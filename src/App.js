import Header from './components/Header';
import styled from 'styled-components';
import Pesquisa from './components/pesquisa';
const AppContainer = styled.div `
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, rgb(64, 64, 232), rgb(92, 92, 132) );


    li{
    list-style: none;

  }
  `

function App() {

  return (

    <AppContainer>
      <Header/>
      <Pesquisa/>
      </AppContainer>
  );

}

export default App;
