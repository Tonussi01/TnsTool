class VendasModel {
    constructor(id, cliente, valorCompra, valorCustoProdutos, situacao, formaPagamento, localCompra, dataVenda) {
      this.id = id;
      this.cliente = cliente;
      this.valorCompra = valorCompra;
      this.valorCustoProdutos = valorCustoProdutos;
      this.situacao = situacao;
      this.formaPagamento = formaPagamento;
      this.localCompra = localCompra;
      this.dataVenda = dataVenda;
    }
  }
  
  export default VendasModel;
  