// src/controllers/ProdutoController.js

import ProdutoModel from './../Models/ProdutosModel';

const ProdutoController = {
  async listarProdutos() {
    try {
      return await ProdutoModel.getAll();
    } catch (error) {
      throw error;
    }
  },

  async buscarProdutoPorId(id) {
    try {
      return await ProdutoModel.getById(id);
    } catch (error) {
      throw error;
    }
  },

  async adicionarProduto(produto) {
    try {
      return await ProdutoModel.create(produto);
    } catch (error) {
      throw error;
    }
  },

  async atualizarProduto(id, produto) {
    try {
      return await ProdutoModel.update(id, produto);
    } catch (error) {
      throw error;
    }
  },

  async deletarProduto(id) {
    try {
      return await ProdutoModel.delete(id);
    } catch (error) {
      throw error;
    }
  }
};

export default ProdutoController;
