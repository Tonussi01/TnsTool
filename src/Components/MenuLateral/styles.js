import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 80px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 100;
  padding-top: 300px;
`;

export const MenuItem = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: ${props => props.color || 'transparent'}; /* Cor de fundo do item do menu */

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const IconWrapper = styled.div`
  color: #000; /* Cor dos ícones */
`;

export const MenuTitle = styled.span`
  font-size: 12px;
  margin-top: 5px;
`;
