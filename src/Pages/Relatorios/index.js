import React from 'react';
import { Container, Title, ReportGrid, ReportContainer, ReportIcon, ReportTitle, ReportValue } from './styles';
import { FaBox, FaMoneyBillAlt } from 'react-icons/fa';

const Relatorios = () => {
  // Simulação de dados - substitua pelos seus dados reais
  const relatorios = [
    { title: 'Total de Itens no Estoque', value: 1500, icon: <FaBox />, color: '#ff7f7f' },
    { title: 'Total de Valor de Custo em Estoque', value: 'R$ 120.000,00', icon: <FaMoneyBillAlt />, color: '#7fbf7f' },
    { title: 'Total de Vendas no Mês', value: 350, icon: <FaMoneyBillAlt />, color: '#7f7fff' },
    { title: 'Faturamento Total', value: 'R$ 250.000,00', icon: <FaMoneyBillAlt />, color: '#ffbf7f' },
    { title: 'Lucro Total', value: 'R$ 80.000,00', icon: <FaMoneyBillAlt />, color: '#bf7fff' },
    { title: 'Lucro Total no Mês', value: 'R$ 15.000,00', icon: <FaMoneyBillAlt />, color: '#ff7f7f' }
  ];

  return (
    <Container>
      <Title>Relatórios Gerenciais</Title>
      <ReportGrid>
        {relatorios.map((relatorio, index) => (
          <ReportContainer key={index} color={relatorio.color}>
            <ReportIcon>{relatorio.icon}</ReportIcon>
            <ReportTitle>{relatorio.title}</ReportTitle>
            <ReportValue>{relatorio.value}</ReportValue>
          </ReportContainer>
        ))}
      </ReportGrid>
    </Container>
  );
};

export default Relatorios;
