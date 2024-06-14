import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Title, OptionGrid, OptionContainer, OptionContent, OptionIcon, OptionTitle } from './styles';
import { FaBox, FaShoppingCart, FaCogs, FaBusinessTime, FaChartBar } from 'react-icons/fa';

const options = [
  { path: '/produtos', color: '#ff7f7f', icon: <FaBox />, title: 'Produtos' },
  { path: '/vendas', color: '#7fbf7f', icon: <FaShoppingCart />, title: 'Vendas' },
  { path: '/configuracoes', color: '#7f7fff', icon: <FaCogs />, title: 'Configurações' },
  { path: '/gestaoempresarial', color: '#ffbf7f', icon: <FaBusinessTime />, title: 'Gestão Empresarial' }, // Corrigido o path
  { path: '/relatorios', color: '#bf7fff', icon: <FaChartBar />, title: 'Relatórios' }
];

const Home = () => {
  const history = useHistory();

  const handleOptionClick = (path) => {
    history.push(path);
    window.location.reload(); 
  };

  return (
    <Container>
      <br/><br/>
      <Title>Módulos do Sistema</Title>
      <br/>
      <OptionGrid>
        {options.map((option) => (
          <OptionContainer key={option.path} color={option.color} onClick={() => handleOptionClick(option.path)}>
            <OptionContent>
              <OptionIcon>{option.icon}</OptionIcon>
              <OptionTitle>{option.title}</OptionTitle>
            </OptionContent>
          </OptionContainer>
        ))}
      </OptionGrid>
    </Container>
  );
};

export default Home;
