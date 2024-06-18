import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import VendasController from '../../Controllers/VendasController';
import {
  Container,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  Option,
  SaveButton,
  CancelButton
} from './styles'; // Certifique-se de que os estilos estejam corretamente importados

const CadastroVendas = () => {
  const [cliente, setCliente] = useState('');
  const [valorCompra, setValorCompra] = useState('');
  const [valorCustoProdutos, setValorCustoProdutos] = useState('');
  const [situacao, setSituacao] = useState('');
  const [formaPagamento, setFormaPagamento] = useState('');
  const [localCompra, setLocalCompra] = useState('');
  const [dataVenda, setDataVenda] = useState('');

  const history = useHistory();

  const handleSave = async () => {
    const novaVenda = {
      cliente,
      valor_compra: parseFloat(valorCompra),
      valor_custo_produtos: parseFloat(valorCustoProdutos),
      situacao: parseInt(situacao),
      forma_pagamento: parseInt(formaPagamento),
      local_compra: localCompra,
      data_venda: new Date(dataVenda).toISOString()
    };

    try {
      await VendasController.createVenda(novaVenda);
      history.push('/vendas');
      window.location.reload();   
    } catch (error) {
      console.error('Erro ao cadastrar venda:', error);
    }
  };

  const handleCancel = () => {
    history.push('/vendas');
    window.location.reload();   
  };

  return (
    <Container>
      <Title>Cadastro de Venda</Title>
      <Form>
        <FormGroup>
          <Label>Cliente:</Label>
          <Input
            type="text"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            placeholder="Digite o nome do cliente"
          />
        </FormGroup>
        <FormGroup>
          <Label>Valor da Compra:</Label>
          <Input
            type="number"
            value={valorCompra}
            onChange={(e) => setValorCompra(e.target.value)}
            placeholder="Digite o valor da compra"
          />
        </FormGroup>
        <FormGroup>
          <Label>Valor de Custo dos Produtos:</Label>
          <Input
            type="number"
            value={valorCustoProdutos}
            onChange={(e) => setValorCustoProdutos(e.target.value)}
            placeholder="Digite o valor de custo dos produtos"
          />
        </FormGroup>
        <FormGroup>
          <Label>Situação:</Label>
          <Select value={situacao} onChange={(e) => setSituacao(e.target.value)}>
            <Option value="">Selecione...</Option>
            <Option value="1">Ativo</Option>
            <Option value="2">Cancelado</Option>
            <Option value="3">Pendente</Option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Forma de Pagamento:</Label>
          <Select value={formaPagamento} onChange={(e) => setFormaPagamento(e.target.value)}>
            <Option value="">Selecione...</Option>
            <Option value="1">Cartão de Crédito</Option>
            <Option value="2">Dinheiro</Option>
            <Option value="3">Transferência Bancária</Option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Local da Compra:</Label>
          <Input
            type="text"
            value={localCompra}
            onChange={(e) => setLocalCompra(e.target.value)}
            placeholder="Digite o local da compra"
          />
        </FormGroup>
        <FormGroup>
          <Label>Data da Venda:</Label>
          <Input
            type="date"
            value={dataVenda}
            onChange={(e) => setDataVenda(e.target.value)}
          />
        </FormGroup>
        <div>
          <SaveButton onClick={handleSave}>Salvar</SaveButton>
          <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
        </div>
      </Form>
    </Container>
  );
};

export default CadastroVendas;
