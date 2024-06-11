import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Routes from './Routes';
import Header from './Components/Header/index'; 
import Footer from './Components/Footer/index';
import GlobalStyles from './GlobalStyles';

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <>
      <GlobalStyles />
      {!isLoginPage && <Header />}    
      <Routes />
      {!isLoginPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
