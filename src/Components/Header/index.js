import React from 'react';
import logoLt from '../../Images/Logo.png';
import { Header } from './styles';

function HeaderSite() {
    return (
        <Header>
            <ul>                
                <img src={logoLt} alt="Logo" />                
                <li><a href='/home'>Home</a></li>
                <li><a href='/produtos'>Produtos</a></li>
                <li><a href='/vendas'>Vendas</a></li>      
            </ul>
        </Header>
    );
}

export default HeaderSite;
