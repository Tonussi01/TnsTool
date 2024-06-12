import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Title, OptionGrid, OptionContainer, OptionContent, OptionIcon, OptionTitle } from './styles';
import { FaBox, FaShoppingCart, FaCogs, FaBusinessTime, FaChartBar } from 'react-icons/fa';

const Home = () => {
  const history = useHistory();

  const handleOptionClick = (path) => {
    history.push(path);
  };

  return (
    <Container>
      <OptionGrid>
        <OptionContainer color="#ff7f7f" onClick={() => handleOptionClick('/produtos')}>
          <OptionContent>
            <OptionIcon><FaBox /></OptionIcon>
            <OptionTitle>Produtos</OptionTitle>
          </OptionContent>
        </OptionContainer>
        <OptionContainer color="#7fbf7f" onClick={() => handleOptionClick('/vendas')}>
          <OptionContent>
            <OptionIcon><FaShoppingCart /></OptionIcon>
            <OptionTitle>Vendas</OptionTitle>
          </OptionContent>
        </OptionContainer>
        <OptionContainer color="#7f7fff" onClick={() => handleOptionClick('/configuracoes')}>
          <OptionContent>
            <OptionIcon><FaCogs /></OptionIcon>
            <OptionTitle>Configurações</OptionTitle>
          </OptionContent>
        </OptionContainer>
        <OptionContainer color="#ffbf7f" onClick={() => handleOptionClick('/gestao-empresarial')}>
          <OptionContent>
            <OptionIcon><FaBusinessTime /></OptionIcon>
            <OptionTitle>Gestão Empresarial</OptionTitle>
          </OptionContent>
        </OptionContainer>
        <OptionContainer color="#bf7fff" onClick={() => handleOptionClick('/relatorios')}>
          <OptionContent>
            <OptionIcon><FaChartBar /></OptionIcon>
            <OptionTitle>Relatórios</OptionTitle>
          </OptionContent>
        </OptionContainer>
      </OptionGrid>
    </Container>
  );
};

export default Home;
