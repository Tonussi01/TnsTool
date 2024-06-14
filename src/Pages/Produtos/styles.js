import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 40px;
  color: #007bff;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;

  svg {
    margin-right: 8px; // Espaçamento entre o ícone e o texto
  }

  &:hover {
    background-color: #0056b3;
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const ProductTableHeader = styled.thead`
  background-color: #007bff;
  color: #fff;
`;

export const ProductTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const ProductTableCell = styled.td`
  padding: 10px;
  text-align: center;
`;

export const ActionButton = styled.button`
  margin-right: 10px;
  padding: 5px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    vertical-align: middle;
  }

  &:hover {
    color: #007bff;
  }
`;

export const SaveButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export const CancelButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #c82333;
  }
`;

export const EditableInput = styled.input`
  width: 100%;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
