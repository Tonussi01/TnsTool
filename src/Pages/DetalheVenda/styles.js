// styles.js

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const DetailLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

export const DetailValue = styled.span`
  margin-bottom: 10px;
  display: inline-block;
`;

export const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
