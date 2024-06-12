import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Routes from './Routes.js';
import Header from './Components/Header/index.js'; 
import Footer from './Components/Footer/index.js';
import GlobalStyles from './GlobalStyles.js';

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
