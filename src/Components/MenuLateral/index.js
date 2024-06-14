import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { MenuContainer, MenuItem, IconWrapper } from './styles';
import { FaBox, FaShoppingCart, FaCogs, FaBusinessTime, FaChartBar } from 'react-icons/fa';

const options = [
  { path: '/produtos', color: '#ff7f7f', icon: <FaBox /> },
  { path: '/vendas', color: '#7fbf7f', icon: <FaShoppingCart /> },
  { path: '/configuracoes', color: '#7f7fff', icon: <FaCogs /> },
  { path: '/gestaoempresarial', color: '#ffbf7f', icon: <FaBusinessTime /> },
  { path: '/relatorios', color: '#bf7fff', icon: <FaChartBar /> }
];

const Menu = () => {
  const history = useHistory();
  const location = useLocation();

  const handleOptionClick = (path) => {
    history.push(path);
    window.location.reload(); // Recarrega a página ao mudar de rota
  };

  return (
    <MenuContainer>
      {options.map((option) => (
        <MenuItem
          key={option.path}
          onClick={() => handleOptionClick(option.path)}
          style={{
            backgroundColor: location.pathname === option.path ? option.color : 'transparent',
            transition: 'background-color 0.3s ease'
          }}
        >
          <IconWrapper>
            {option.icon}
          </IconWrapper>
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default Menu;
