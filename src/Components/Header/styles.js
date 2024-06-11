import styled from 'styled-components'; 

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: black;
  padding: 10px; /* Aumentei o padding para melhorar a aparência em telas menores */
  width: 100%; 

  img {
    width: 100px; 
    height: auto; 
  }

  ul {
    display: flex;
    justify-content: space-around;    
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    color: #FFF;
    font-size: 15px;
    padding: 5px;
  }

  a {
    color: #FFF;
    text-decoration: none;
    padding: 5px;
  }

  a:hover {
    background-color: #bef264;
    color: black;
  }

  @media screen and (max-width: 768px) {
    /* Estilos para telas menores que 768px de largura */
    flex-direction: column; 
    padding: 5px; 
    align-items: flex-start; 
    
    ul {
      flex-direction: row; 
      flex-wrap: wrap; 
      justify-content: center; 
    }

    li {
      padding: 10px; 
    }
  }
`;
