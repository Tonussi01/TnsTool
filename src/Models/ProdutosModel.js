// src/models/ProdutoModel.js

import axios from 'axios';

const API_URL = 'http://localhost:3001/api/produtos';

class ProdutoModel {
  static async getAll() {
    const response = await axios.get(API_URL);
    return response.data;
  }

  static async delete(id) {
    await axios.delete(`${API_URL}/${id}`);
  }

  static async update(id, produto) {
    await axios.put(`${API_URL}/${id}`, produto);
  }
}

export default ProdutoModel;
