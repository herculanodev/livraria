import styled from "styled-components";
import { useState } from "react";
import Input from "../input";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 100%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px; /* Adicionei um valor padrão aqui */
`;

function Pesquisa() {
  const [textoDigitado, setTextoDigitado] = useState('');

  return (
    <PesquisaContainer>
      <Titulo>Sabe por onde começar?</Titulo>   
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
      <Input
        placeholder="Escolha sua próxima leitura"
        onBlur={evento => setTextoDigitado(evento.target.value)}
      />
      <p>{textoDigitado}</p>
    </PesquisaContainer>
  );
}

export default Pesquisa;
