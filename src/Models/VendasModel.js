// src/models/VendasModel.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/vendas';

class VendasModel {
  static async getAll() {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar vendas:', error);
      throw error;
    }
  }

  static async getById(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar venda com ID ${id}:`, error);
      throw error;
    }
  }

  static async create(venda) {
    try {
      const response = await axios.post(API_URL, venda);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar venda:', error);
      throw error;
    }
  }

  static async update(id, venda) {
    try {
      const response = await axios.put(`${API_URL}/${id}`, venda);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar venda com ID ${id}:`, error);
      throw error;
    }
  }

  static async delete(id) {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao deletar venda com ID ${id}:`, error);
      throw error;
    }
  }
}

export default VendasModel;
