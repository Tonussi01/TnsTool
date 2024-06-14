import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Title, Form, Label, Input, Button, Logo } from './styles'; // Certifique-se de que os estilos estão sendo importados corretamente
import logoLt from "./../../Images/Logo.png";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Estado para controlar o estado de carregamento
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true); // Define o estado de carregamento como verdadeiro

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario: username,
          senha: password,
        }),
      });

      if (response.ok) {
        // Mantém a mensagem de carregando até o redirecionamento ser realizado
        setTimeout(() => {
          setLoading(false);
          history.push('/home'); // Navega para a página Home
          window.location.reload(); // Recarrega a aplicação
        }, 2000);
      } else {
        const data = await response.json();
        setError(data.message || 'Login ou senha incorretos');
        setLoading(false); // Define o estado de carregamento como falso em caso de erro
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro ao tentar fazer login');
      setLoading(false); // Define o estado de carregamento como falso em caso de erro
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
        {loading && <p>Carregando...</p>} {/* Exibe a mensagem de carregando enquanto loading for verdadeiro */}
        <Button type="submit" disabled={loading}>
          Entrar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
