import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const ReportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 20px 0;
`;

export const ReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color || '#fff'};
  color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const ReportIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
`;

export const ReportTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const ReportValue = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
`;
