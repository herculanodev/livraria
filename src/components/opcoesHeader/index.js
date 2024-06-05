import styled from 'styled-components';
const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];


const OpcoesUl= styled.ul`
display: flex;
`
const OpcaoLi = styled.li`
min-width: 120px;
font-size: 16px;
align-items: center;
display: flex;
justify-content: center;
height: 100%;
padding: 0 5px;
cursor: pointer;
`

function OpcoeHeader(){
return(
    <OpcoesUl >
          {textoOpcoes.map( (texto) =>(
            <OpcaoLi><p>{texto}</p></OpcaoLi>
          ) )}

          </OpcoesUl>
)



}


export default OpcoeHeader;