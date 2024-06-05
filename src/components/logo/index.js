import React from 'react';
import logo from '../../assets/logo.svg'; // Certifique-se de que o caminho está correto
import styled from 'styled-components';


const LogoContainer = styled.div `

    display: flex;
    font-size: 30px;
`
const LogoImg = styled.img `
    margin-right: 10px;

` 


function Logo() {
    return (
        <LogoContainer>
            <LogoImg src={logo}/>
            <p><strong>Herculano</strong>Books</p>
        </LogoContainer>
    );
}

export default Logo;
