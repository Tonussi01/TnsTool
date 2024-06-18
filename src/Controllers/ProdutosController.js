// src/controllers/ProdutoController.js

import ProdutoModel from '../Models/ProdutosModel';

class ProdutoController {
  static async fetchProdutos(setProdutos) {
    try {
      const produtos = await ProdutoModel.getAll();
      setProdutos(produtos);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  }

  static async deleteProduto(id, fetchProdutos) {
    try {
      await ProdutoModel.delete(id);
      fetchProdutos();
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  }

  static async saveProduto(id, editValues, fetchProdutos, setEditingId) {
    try {
      await ProdutoModel.update(id, editValues);
      fetchProdutos();
      setEditingId(null);
    } catch (error) {
      console.error('Erro ao salvar produto:', error);
    }
  }
}

export default ProdutoController;
