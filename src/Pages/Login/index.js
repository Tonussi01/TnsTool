// Arquivo index.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Title, Form, Label, Input, Button, Logo } from './styles';
import logoLt from "./../../Images/Logo.png";


const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Verifica os valores de login e senha
    if (username === 'Lucas' && password === '123') {
      // Autenticação bem-sucedida, redireciona para a página '/home'
      history.push('/home');

      // Recarrega a página após o redirecionamento
      window.location.reload();
    } else {
      // Autenticação falhou, exibe mensagem de erro
      setError('Login ou senha incorretos');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>      
        <Logo src={logoLt} alt="Logo" />               
        <Title>Login</Title>
        <Label htmlFor="username">Usuário:</Label>
        <Input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label htmlFor="password">Senha:</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p>{error}</p>}
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
    
  );
};

export default Login;
