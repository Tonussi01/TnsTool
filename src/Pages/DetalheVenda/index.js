import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import VendasController from './../../Controllers/VendasController';
import { Container, Title, BackButton, DetailLabel, DetailValue } from './styles'; // Importe os estilos e componentes necessários

const DetalheVenda = () => {
  const [venda, setVenda] = useState({
    cliente: '',
    valor_compra: '',
    valor_custo_produtos: '',
    situacao: '',
    forma_pagamento: '',
    local_compra: '',
    data_venda: ''
  });
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchVendaById(id);
    }
  }, [id]);

  const fetchVendaById = async (id) => {
    try {
      const data = await VendasController.fetchVendaPorId(id);
      setVenda(data);
      setLoading(false);
    } catch (error) {
      console.error(`Erro ao buscar venda ${id}:`, error);
    }
  };

  const handleBack = () => {
    history.push('/vendas');
    window.location.reload();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Title>Detalhes da Venda</Title>
      <div>
        <DetailLabel>Cliente:</DetailLabel>
        <DetailValue>{venda.cliente}</DetailValue>
      </div>
      <div>
        <DetailLabel>Valor Compra:</DetailLabel>
        <DetailValue>{venda.valor_compra}</DetailValue>
      </div>
      <div>
        <DetailLabel>Valor Custo Produtos:</DetailLabel>
        <DetailValue>{venda.valor_custo_produtos}</DetailValue>
      </div>
      <div>
        <DetailLabel>Situação:</DetailLabel>
        <DetailValue>{venda.situacao}</DetailValue>
      </div>
      <div>
        <DetailLabel>Forma Pagamento:</DetailLabel>
        <DetailValue>{venda.forma_pagamento}</DetailValue>
      </div>
      <div>
        <DetailLabel>Local Compra:</DetailLabel>
        <DetailValue>{venda.local_compra}</DetailValue>
      </div>
      <div>
        <DetailLabel>Data Venda:</DetailLabel>
        <DetailValue>{venda.data_venda}</DetailValue>
      </div>
      <div>
        <BackButton onClick={handleBack}>Voltar</BackButton>
      </div>
    </Container>
  );
};

export default DetalheVenda;
