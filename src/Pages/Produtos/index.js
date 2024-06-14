import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
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

// Importe ícones do react-icons
import { RiEdit2Line, RiDeleteBinLine, RiAddLine } from 'react-icons/ri';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [editingId, setEditingId] = useState(null); // Estado para controlar o ID do produto em edição
  const [editValues, setEditValues] = useState({}); // Estado para armazenar os valores editáveis dos campos
  const history = useHistory();

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/produtos');
      if (response.status === 200) {
        setProdutos(response.data);
      } else {
        throw new Error('Erro ao obter produtos');
      }
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/produtos/${id}`);
      if (response.status === 200) {
        fetchProdutos(); // Atualiza a lista após exclusão
      } else {
        throw new Error('Erro ao excluir produto');
      }
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  };

  const handleEdit = (produto) => {
    setEditingId(produto.id); // Define o ID do produto em edição
    setEditValues({
      nome: produto.nome,
      quantidade: produto.quantidade,
      valor_compra: produto.valor_compra,
      valor_venda: produto.valor_venda,
      disponivel: produto.disponivel,
      codigo_sku: produto.codigo_sku,
      fornecedor: produto.fornecedor
    });
  };

  const handleSave = async (id) => {
    // Implemente a lógica para salvar as alterações no produto com o ID específico
    try {
      // Exemplo básico de requisição PUT para atualizar o produto
      const response = await axios.put(`http://localhost:3001/api/produtos/${id}`, editValues);
      if (response.status === 200) {
        fetchProdutos(); // Atualiza a lista após salvar as alterações
        setEditingId(null); // Sai do modo de edição
      } else {
        throw new Error('Erro ao salvar produto');
      }
    } catch (error) {
      console.error('Erro ao salvar produto:', error);
    }
  };

  const handleCancel = () => {
    setEditingId(null); // Sai do modo de edição sem salvar alterações
  };

  const handleNavigateToCadastro = () => {
    history.push('/CadastroProdutos');
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
      <Title>Estoque</Title>
      <Button onClick={handleNavigateToCadastro}>
        <RiAddLine /> Cadastrar Produto
      </Button>
      <ProductTable>
        <ProductTableHeader>
          <ProductTableCell>Nome</ProductTableCell>
          <ProductTableCell>Quantidade</ProductTableCell>
          <ProductTableCell>Valor Compra</ProductTableCell>
          <ProductTableCell>Valor Venda</ProductTableCell>
          <ProductTableCell>Disponível</ProductTableCell>
          <ProductTableCell>Código SKU</ProductTableCell>
          <ProductTableCell>Ações</ProductTableCell>
        </ProductTableHeader>
        {produtos.map(produto => (
          <ProductTableRow key={produto.id}>
            <ProductTableCell>
              {editingId === produto.id ? (
                <EditableInput
                  type="text"
                  name="nome"
                  value={editValues.nome}
                  onChange={handleInputChange}
                />
              ) : (
                produto.nome
              )}
            </ProductTableCell>
            <ProductTableCell>
              {editingId === produto.id ? (
                <EditableInput
                  type="number"
                  name="quantidade"
                  value={editValues.quantidade}
                  onChange={handleInputChange}
                />
              ) : (
                produto.quantidade
              )}
            </ProductTableCell>
            <ProductTableCell>
              {editingId === produto.id ? (
                <EditableInput
                  type="number"
                  name="valor_compra"
                  value={editValues.valor_compra}
                  onChange={handleInputChange}
                />
              ) : (
                produto.valor_compra
              )}
            </ProductTableCell>
            <ProductTableCell>
              {editingId === produto.id ? (
                <EditableInput
                  type="number"
                  name="valor_venda"
                  value={editValues.valor_venda}
                  onChange={handleInputChange}
                />
              ) : (
                produto.valor_venda
              )}
            </ProductTableCell>
            <ProductTableCell>
              {editingId === produto.id ? (
                <EditableInput
                  type="checkbox"
                  name="disponivel"
                  checked={editValues.disponivel}
                  onChange={handleInputChange}
                />
              ) : (
                produto.disponivel ? 'Sim' : 'Não'
              )}
            </ProductTableCell>
            <ProductTableCell>
              {editingId === produto.id ? (
                <EditableInput
                  type="text"
                  name="codigo_sku"
                  value={editValues.codigo_sku}
                  onChange={handleInputChange}
                />
              ) : (
                produto.codigo_sku
              )}
            </ProductTableCell>
            <ProductTableCell>
              {editingId === produto.id ? (
                <>
                  <SaveButton onClick={() => handleSave(produto.id)}>Salvar</SaveButton>
                  <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
                </>
              ) : (
                <>
                  <ActionButton onClick={() => handleEdit(produto)}>
                    <RiEdit2Line />
                  </ActionButton>
                  <ActionButton onClick={() => handleDelete(produto.id)}>
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

export default Produtos;
