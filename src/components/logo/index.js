import React from 'react';
import logo from '../../assets/logo.svg'; // Certifique-se de que o caminho está correto
import './style.css'

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo' className='logo-img'/>
            <p><strong>Herculano</strong>Books</p>
        </div>
    );
}

export default Logo;
