// Vendas.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { RiEdit2Line, RiDeleteBinLine, RiAddLine } from 'react-icons/ri';
import {
  Container,
  Title,
  Button,
  ProductTable,
  ProductTableHeader,
  ProductTableRow,
  ProductTableCell,
  ActionButton,
  SaveButton,
  CancelButton,
  EditableInput
} from './styles'; // Importe os estilos e componentes necessários

const Vendas = () => {
  const [vendas, setVendas] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({});
  const history = useHistory();

  useEffect(() => {
    fetchVendas();
  }, []);

  const fetchVendas = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/vendas');
      if (response.status === 200) {
        setVendas(response.data);
      } else {
        throw new Error('Erro ao obter vendas');
      }
    } catch (error) {
      console.error('Erro ao buscar vendas:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta venda?')) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/vendas/${id}`);
        if (response.status === 200) {
          fetchVendas(); // Atualiza a lista após exclusão
        } else {
          throw new Error('Erro ao excluir venda');
        }
      } catch (error) {
        console.error('Erro ao excluir venda:', error);
      }
    }
  };

  const handleEdit = (venda) => {
    setEditingId(venda.id);
    setEditValues({
      cliente: venda.cliente,
      valor_compra: venda.valor_compra,
      valor_custo_produtos: venda.valor_custo_produtos,
      situacao: venda.situacao,
      forma_pagamento: venda.forma_pagamento,
      local_compra: venda.local_compra,
      data_venda: venda.data_venda
    });
  };

  const handleSave = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3001/api/vendas/${id}`, editValues);
      if (response.status === 200) {
        fetchVendas(); // Atualiza a lista após salvar as alterações
        setEditingId(null); // Sai do modo de edição
      } else {
        throw new Error('Erro ao salvar venda');
      }
    } catch (error) {
      console.error('Erro ao salvar venda:', error);
    }
  };

  const handleCancel = () => {
    setEditingId(null); // Sai do modo de edição sem salvar alterações
  };

  const handleNavigateToCadastro = () => {
    history.push('/cadastrovendas');
    window.location.reload();   
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditValues({
      ...editValues,
      [name]: value
    });
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
          <ProductTableCell>Valor Compra</ProductTableCell>
          <ProductTableCell>Valor Custo Produtos</ProductTableCell>
          <ProductTableCell>Situação</ProductTableCell>
          <ProductTableCell>Forma Pagamento</ProductTableCell>
          <ProductTableCell>Local Compra</ProductTableCell>
          <ProductTableCell>Data Venda</ProductTableCell>
          <ProductTableCell>Ações</ProductTableCell>
        </ProductTableHeader>
        {vendas.map(venda => (
          <ProductTableRow key={venda.id}>
            <ProductTableCell>
              {editingId === venda.id ? (
                <EditableInput
                  type="text"
                  name="cliente"
                  value={editValues.cliente}
                  onChange={handleInputChange}
                />
              ) : (
                venda.cliente
              )}
            </ProductTableCell>
            <ProductTableCell>
              {editingId === venda.id ? (
                <EditableInput
                  type="number"
                  name="valor_compra"
                  value={editValues.valor_compra}
                  onChange={handleInputChange}
                />
              ) : (
                venda.valor_compra
              )}
            </ProductTableCell>
            <ProductTableCell>
              {editingId === venda.id ? (
                <EditableInput
                  type="number"
                  name="valor_custo_produtos"
                  value={editValues.valor_custo_produtos}
                  onChange={handleInputChange}
                />
              ) : (
                venda.valor_custo_produtos
              )}
            </ProductTableCell>
            <ProductTableCell>
              {editingId === venda.id ? (
                <EditableInput
                  type="number"
                  name="situacao"
                  value={editValues.situacao}
                  onChange={handleInputChange}
                />
              ) : (
                venda.situacao
              )}
            </ProductTableCell>
            <ProductTableCell>
              {editingId === venda.id ? (
                <EditableInput
                  type="number"
                  name="forma_pagamento"
                  value={editValues.forma_pagamento}
                  onChange={handleInputChange}
                />
              ) : (
                venda.forma_pagamento
              )}
            </ProductTableCell>
            <ProductTableCell>
              {editingId === venda.id ? (
                <EditableInput
                  type="text"
                  name="local_compra"
                  value={editValues.local_compra}
                  onChange={handleInputChange}
                />
              ) : (
                venda.local_compra
              )}
            </ProductTableCell>
            <ProductTableCell>
              {editingId === venda.id ? (
                <EditableInput
                  type="date"
                  name="data_venda"
                  value={editValues.data_venda}
                  onChange={handleInputChange}
                />
              ) : (
                venda.data_venda
              )}
            </ProductTableCell>
            <ProductTableCell>
              {editingId === venda.id ? (
                <>
                  <SaveButton onClick={() => handleSave(venda.id)}>Salvar</SaveButton>
                  <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
                </>
              ) : (
                <>
                  <ActionButton onClick={() => handleEdit(venda)}>
                    <RiEdit2Line />
                  </ActionButton>
                  <ActionButton onClick={() => handleDelete(venda.id)}>
                    <RiDeleteBinLine />
                  </ActionButton>
                </>
              )}
            </ProductTableCell>
          </ProductTableRow>
        ))}
      </ProductTable>
    </Container>
  );
};

export default Vendas;
