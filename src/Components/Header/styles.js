import styled from 'styled-components'; 

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100vw; /* 100% da largura da viewport */
  max-width: 100%; /* Limita a largura ao tamanho máximo do contêiner pai */
  overflow-x: hidden; /* Remove qualquer rolagem horizontal */

  img {
    width: 100px; 
    height: auto; 
  }

  ul {
    display: flex;   
    align-items: center;
    padding: 10px;
  }  
`;
