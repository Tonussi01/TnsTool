import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/index.js';
import Produtos from './Pages/Produtos/index.js';
import Login from './Pages/Login/index.js';
import Vendas from './Pages/Vendas/index.js';
import Relatorios from './Pages/Relatorios/index.js';
import GestaoEmpresarial from './Pages/GestaoEmpresarial/index.js';
import Configuracoes from './Pages/Configuracoes/index.js';
import GlobalStyles from './GlobalStyles.js';
import Header from './Components/Header/index.js';
import CadastroProdutos from './Pages/CadastroProdutos/index.js';
import Menu from './Components/MenuLateral/index.js';
import CadastroVendas from './Pages/CadastroVendas/index.js';
import EdicaoVendas from './Pages/EdicaoVendas/index.js';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Menu/>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/produtos" component={Produtos} />
        <Route exact path="/vendas" component={Vendas} />
        <Route exact path="/relatorios" component={Relatorios} />
        <Route exact path="/gestaoempresarial" component={GestaoEmpresarial} />
        <Route exact path="/configuracoes" component={Configuracoes} />
        <Route exact path="/cadastroprodutos" component={CadastroProdutos} />        
        <Route exact path="/cadastrovendas" component={CadastroVendas} />        
        <Route exact path="/edicaovendas" component={EdicaoVendas} />
      </Switch>      
    </Router>
  );
}

export default App;
