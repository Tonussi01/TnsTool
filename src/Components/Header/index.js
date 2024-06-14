import React from 'react';
import { useHistory } from 'react-router-dom';
import logoLt from '../../Images/Logo.png';
import { Header } from './styles';

function HeaderSite() {
    const history = useHistory();

    const handleLogoClick = () => {
        history.push('/home');
        window.location.reload(); // Força o recarregamento da página
    };

    return (
        <Header>
            <ul>
                <img src={logoLt} alt="Logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
            </ul>
        </Header>
    );
}

export default HeaderSite;
