// src/pages/CadastroProdutos/index.js

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Title,
  FormContainer,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  SuccessMessage,
  ErrorMessage
} from './styles'; // Importe os estilos e componentes necessários

const CadastroProdutos = () => {
  const history = useHistory();
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [valorCompra, setValorCompra] = useState('');
  const [valorVenda, setValorVenda] = useState('');
  const [disponivel, setDisponivel] = useState('');
  const [codigoSku, setCodigoSku] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAdicionarProduto = async () => {
    try {
      await axios.post('http://localhost:3001/api/produtos', {
        nome,
        quantidade,
        valor_compra: valorCompra,
        valor_venda: valorVenda,
        disponivel,
        codigo_sku: codigoSku,
        fornecedor
      });
      setSuccessMessage('Produto adicionado com sucesso!');
      handleLimparCampos();
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      setErrorMessage('Erro ao adicionar produto. Verifique os campos e tente novamente.');
    }
  };

  const handleLimparCampos = () => {
    setNome('');
    setQuantidade('');
    setValorCompra('');
    setValorVenda('');
    setDisponivel('');
    setCodigoSku('');
    setFornecedor('');
  };

  const handleVoltar = () => {
    history.push('/produtos');
    window.location.reload();   
  };

  return (
    <Container>
      <Title>Cadastro de Produtos</Title>
      <FormContainer>
        <FormGroup>
          <Label>Nome:</Label>
          <Input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Quantidade:</Label>
          <Input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Valor de Compra:</Label>
          <Input type="text" value={valorCompra} onChange={(e) => setValorCompra(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Valor de Venda:</Label>
          <Input type="text" value={valorVenda} onChange={(e) => setValorVenda(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Disponível:</Label>
          <Input type="text" value={disponivel} onChange={(e) => setDisponivel(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Código SKU:</Label>
          <Input type="text" value={codigoSku} onChange={(e) => setCodigoSku(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Fornecedor:</Label>
          <Input type="text" value={fornecedor} onChange={(e) => setFornecedor(e.target.value)} />
        </FormGroup>
        <ButtonGroup>
          <button onClick={handleAdicionarProduto}>Adicionar Produto</button>
          <button onClick={handleLimparCampos}>Limpar Campos</button>
          <button onClick={handleVoltar}>Voltar</button>
        </ButtonGroup>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </FormContainer>
    </Container>
  );
};

export default CadastroProdutos;
