import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import VendasController from './../../Controllers/VendasController';
import { Container, Title, SaveButton, CancelButton, EditableInput } from './styles';

const EdicaoVendas = () => {
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

  const handleSave = async () => {
    try {
      await VendasController.updateVenda(id, venda);
      history.push('/vendas');
      window.location.reload();
    } catch (error) {
      console.error('Erro ao salvar venda:', error);
    }
  };

  const handleCancel = () => {
    history.push('/vendas');
    window.location.reload();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVenda(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Title>Editar Venda</Title>
      <label>Cliente:</label>
      <EditableInput
        type="text"
        name="cliente"
        value={venda.cliente}
        onChange={handleChange}
      />
      <label>Valor Compra:</label>
      <EditableInput
        type="number"
        name="valor_compra"
        value={venda.valor_compra}
        onChange={handleChange}
      />
      <label>Valor Custo Produtos:</label>
      <EditableInput
        type="number"
        name="valor_custo_produtos"
        value={venda.valor_custo_produtos}
        onChange={handleChange}
      />
      <label>Situação:</label>
      <EditableInput
        type="number"
        name="situacao"
        value={venda.situacao}
        onChange={handleChange}
      />
      <label>Forma Pagamento:</label>
      <EditableInput
        type="number"
        name="forma_pagamento"
        value={venda.forma_pagamento}
        onChange={handleChange}
      />
      <label>Local Compra:</label>
      <EditableInput
        type="text"
        name="local_compra"
        value={venda.local_compra}
        onChange={handleChange}
      />
      <label>Data Venda:</label>
      <EditableInput
        type="date"
        name="data_venda"
        value={venda.data_venda}
        onChange={handleChange}
      />
      <div>
        <SaveButton onClick={handleSave}>Salvar</SaveButton>
        <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
      </div>
    </Container>
  );
};

export default EdicaoVendas;
