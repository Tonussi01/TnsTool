import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px #22d3ee;
  max-width: 300px; /* Define um tamanho máximo para o formulário */
  width: 80%; /* Garante que o formulário ocupe toda a largura máxima */
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  padding: 1rem;
`;

export const Label = styled.label`
  margin: 0.5rem 0;
`;

export const Input = styled.input`
  width: 80%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
  background-color: #22d3ee;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #2563eb;
  }
`;

export const Logo = styled.img`
  max-width: 80%; /* Ajusta a largura máxima da logo */
  height: auto; /* Mantém a proporção da altura */
  margin-bottom: 2rem; /* Espaçamento inferior */
`;
