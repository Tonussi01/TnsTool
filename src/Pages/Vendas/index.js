import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RiAddLine, RiEdit2Line, RiDeleteBinLine, RiFileTextLine } from 'react-icons/ri';
import VendasController from './../../Controllers/VendasController';
import {
  Container,
  Title,
  Button,
  ProductTable,
  ProductTableHeader,
  ProductTableRow,
  ProductTableCell,
  ActionButton
} from './styles';

const Vendas = () => {
  const [vendas, setVendas] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchAllVendas();
  }, []);

  const fetchAllVendas = async () => {
    try {
      const data = await VendasController.fetchVendas(); // Corrigido para chamar fetchVendas sem argumentos
      console.log('Dados recebidos:', data); // Debugging: verificar dados recebidos
      setVendas(data || []);
    } catch (error) {
      console.error('Erro ao buscar vendas:', error);
    }
  };

  const handleNavigateToCadastro = () => {
    history.push('/cadastrovendas');
    window.location.reload();   
  };

  const handleEdit = (venda) => {
    history.push(`/edicaovendas/${venda.id}`);
    window.location.reload();
  };
 
  const handleDetails = (id) => {
    history.push(`/detalhevenda/${id}`);
    window.location.reload();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta venda?')) {
      try {
        await VendasController.deleteVenda(id, fetchAllVendas); // Passando fetchAllVendas como callback
      } catch (error) {
        console.error('Erro ao excluir venda:', error);
      }
    }
  };

  return (
    <Container>
      <Title>Vendas</Title>
      <Button onClick={handleNavigateToCadastro}>
        <RiAddLine /> Cadastrar Venda
      </Button>
      <ProductTable>
        <ProductTableHeader>
          <ProductTableCell>Cliente</ProductTableCell>
          <ProductTableCell>Valor da Venda</ProductTableCell>
          <ProductTableCell>Valor Custo Produtos</ProductTableCell>
          <ProductTableCell>Situação</ProductTableCell>
          <ProductTableCell>Forma Pagamento</ProductTableCell>
          <ProductTableCell>Local Compra</ProductTableCell>
          <ProductTableCell>Data Venda</ProductTableCell>
          <ProductTableCell>Ações</ProductTableCell>
        </ProductTableHeader>
        {vendas && vendas.length > 0 ? (
          vendas.map(venda => (
            <ProductTableRow key={venda.id}>
              <ProductTableCell>
                {venda.cliente}
              </ProductTableCell>
              <ProductTableCell>
                {venda.valor_compra}
              </ProductTableCell>
              <ProductTableCell>
                {venda.valor_custo_produtos}
              </ProductTableCell>
              <ProductTableCell>
                {venda.situacao}
              </ProductTableCell>
              <ProductTableCell>
                {venda.forma_pagamento}
              </ProductTableCell>
              <ProductTableCell>
                {venda.local_compra}
              </ProductTableCell>
              <ProductTableCell>
                {venda.data_venda}
              </ProductTableCell>
              <ProductTableCell>
                <ActionButton onClick={() => handleEdit(venda)}>
                  <RiEdit2Line />
                </ActionButton>
                <ActionButton onClick={() => handleDelete(venda.id)}>
                  <RiDeleteBinLine />
                </ActionButton>
                <ActionButton onClick={() => handleDetails(venda.id)}>
                  <RiFileTextLine />
                </ActionButton>
              </ProductTableCell>
            </ProductTableRow>
          ))
        ) : (
          <tr>
            <td colSpan="8">Nenhuma venda encontrada.</td>
          </tr>
        )}
      </ProductTable>
    </Container>
  );
};

export default Vendas;
