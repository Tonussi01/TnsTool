import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #f0f0f0;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
`;

export const OptionGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
`;

export const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: ${({ color }) => color || '#fff'};
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const OptionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const OptionIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const OptionTitle = styled.div`
  font-size: 1.25rem;
`;
