// EdicaoVendas/styles.js

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  width: 80%;
  max-width: 600px;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const SaveButton = styled.button`
  background-color: #28a745;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
`;

export const CancelButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
`;

export const EditableInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Styles = {
  Container,
  Title,
  SaveButton,
  CancelButton,
  EditableInput,
};

export default Styles;
