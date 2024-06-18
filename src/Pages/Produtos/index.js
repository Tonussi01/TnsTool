import React, { useEffect, useState } from 'react';
import ProdutoController from '../../Controllers/ProdutosController';
import { useHistory } from 'react-router-dom';
import { Container, Title, Button, ProductTable, ProductTableHeader, ProductTableRow,
  ProductTableCell, ActionButton, SaveButton, CancelButton, EditableInput } from './styles';
import { RiEdit2Line, RiDeleteBinLine, RiAddLine } from 'react-icons/ri';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({});
  const history = useHistory();

  useEffect(() => {
    ProdutoController.fetchProdutos(setProdutos);
  }, []);

  const handleDelete = (id) => {
    ProdutoController.deleteProduto(id, () => ProdutoController.fetchProdutos(setProdutos));
  };

  const handleEdit = (produto) => {
    setEditingId(produto.id);
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

  const handleSave = (id) => {
    ProdutoController.saveProduto(id, editValues, () => ProdutoController.fetchProdutos(setProdutos), setEditingId);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleNavigateToCadastro = () => {
    history.push('/CadastroProdutos');
    window.location.reload();
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handling checkbox inputs
    const newValue = type === 'checkbox' ? checked : value;

    setEditValues({
      ...editValues,
      [name]: newValue
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
            <ProductTableCell>{produto.codigo_sku}</ProductTableCell>
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
