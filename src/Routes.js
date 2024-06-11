import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'; 
import Produtos from './Pages/Produtos'; 
import Login from './Pages/Login'; 
import Vendas from './Pages/Vendas'; 

const Routes = () => {
  return (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/produtos" component={Produtos} />
    <Route exact path="/vendas" component={Vendas} />
  </Switch>
  );
};

export default Routes;
