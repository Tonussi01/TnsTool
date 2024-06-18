import axios from 'axios';

const API_URL = 'http://localhost:3001/api/vendas';

const VendasController = {
  async fetchVendas() {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar vendas:', error);
      throw error;
    }
  },
  async fetchVendaPorId(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar venda com ID ${id}:`, error);
      throw error;
    }
  },

  async deleteVenda(id) {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao excluir venda:', error);
      throw error;
    }
  },

  async updateVenda(id, vendaData) {
    try {
      const response = await axios.put(`${API_URL}/${id}`, vendaData);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar venda:', error);
      throw error;
    }
  }
};

export default VendasController;
