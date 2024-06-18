import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5em;
  color: #ff7f7f;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #ff7f7f;
  color: #fff;
  transition: background-color 0.3s ease;

  svg {
    margin-right: 8px; // Espaçamento entre o ícone e o texto
  }

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: 3px solid #ffbf00; // Indicador de foco visível para acessibilidade
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-size: 1em;
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export const ProductTableHeader = styled.thead`
  background-color: #ff7f7f;
  color: #fff;
`;

export const ProductTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #e6e6e6;
  }
`;

export const ProductTableCell = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const ActionButton = styled.button`
  margin-right: 10px;
  padding: 5px;
  font-size: 1em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #007bff;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }

  &:focus {
    outline: 3px solid #ffbf00; // Indicador de foco visível para acessibilidade
  }
`;

export const SaveButton = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  font-size: 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #4caf50;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  &:focus {
    outline: 3px solid #ffbf00; // Indicador de foco visível para acessibilidade
  }
`;

export const CancelButton = styled.button`
  padding: 5px 10px;
  font-size: 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f44336;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e53935;
  }

  &:focus {
    outline: 3px solid #ffbf00; // Indicador de foco visível para acessibilidade
  }
`;

export const EditableInput = styled.input`
  width: 100%;
  padding: 5px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box; // Para garantir que o padding não afete o tamanho total do input
  @media (max-width: 768px) {
    padding: 4px;
  }

  &:focus {
    outline: 3px solid #ffbf00; // Indicador de foco visível para acessibilidade
  }
`;