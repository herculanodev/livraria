import Logo from '../../components/logo'
import IconesHeader from '../../components/IconesHeader';
import OpcoeHeader from '../../components/opcoesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header `
    background-color: White;
    display: flex;
    justify-content: center ;
`

function Header(){
return (
    <HeaderContainer>
        <Logo/>
        <OpcoeHeader/>   
        <IconesHeader/>
     </HeaderContainer>
)
    
}
export default Header;