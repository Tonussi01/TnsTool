// src/controllers/VendasController.js

import VendasModel from './../Models/VendasModel';

class VendasController {
  static async fetchVendas() {
    try {
      return await VendasModel.getAll();
    } catch (error) {
      console.error('Erro ao buscar vendas:', error);
      throw error;
    }
  }

  static async fetchVendaPorId(id) {
    try {
      return await VendasModel.getById(id);
    } catch (error) {
      console.error(`Erro ao buscar venda ${id}:`, error);
      throw error;
    }
  }

  static async deleteVenda(id, fetchVendas) {
    try {
      await VendasModel.delete(id);
      fetchVendas();
    } catch (error) {
      console.error('Erro ao excluir venda:', error);
      throw error;
    }
  }

  static async saveVenda(id, editValues, fetchVendas, setEditingId) {
    try {
      if (id) {
        await VendasModel.update(id, editValues);
      } else {
        await VendasModel.create(editValues);
      }
      fetchVendas();
      setEditingId(null);
    } catch (error) {
      console.error('Erro ao salvar venda:', error);
      throw error;
    }
  }
}

export default VendasController;
