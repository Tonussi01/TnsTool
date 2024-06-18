import React, { useEffect, useState, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import VendasController from '../../Controllers/VendasController';
import { Container, Title, BackButton, DetailLabel, DetailValue } from './styles';

const DetalheVenda = () => {
  const [venda, setVenda] = useState(null);
  const history = useHistory();
  const { id } = useParams();

  const fetchVenda = useCallback(async () => {
    try {
      const vendaData = await VendasController.fetchVendaPorId(id);
      setVenda(vendaData);
    } catch (error) {
      console.error(`Erro ao buscar venda ${id}:`, error);
    }
  }, [id]);

  useEffect(() => {
    fetchVenda();
  }, [fetchVenda]);

  const handleBack = () => {
    history.push('/vendas');
    window.location.reload();  
  };

  if (!venda) {
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
        <DetailValue>{venda.valor_compra}</DetailValue> {/* Corrigido para valor_compra */}
      </div>
      <div>
        <DetailLabel>Valor Custo Produtos:</DetailLabel>
        <DetailValue>{venda.valor_custo_produtos}</DetailValue> {/* Corrigido para valor_custo_produtos */}
      </div>
      <div>
        <DetailLabel>Situação:</DetailLabel>
        <DetailValue>{venda.situacao}</DetailValue>
      </div>
      <div>
        <DetailLabel>Forma Pagamento:</DetailLabel>
        <DetailValue>{venda.forma_pagamento}</DetailValue> {/* Corrigido para forma_pagamento */}
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
