import styled from 'styled-components';

export const Footer = styled.div`
    width: max; /* Ocupa 100% da largura da tela */
    background: #000;
    padding: 3px; 

    h1 {
        font-size: 15px;
        color: #fff;
        text-align: center;
    }

    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: center; /* Alinha os itens centralmente */
        padding: 0;
    }

    li {
        font-size: 15px;
        padding: 5px;
        display: flex;
        align-items: center; /* Alinha os itens verticalmente */
    }

    img {
        width: 20px; /* Ajuste o tamanho da imagem conforme necessário */
        margin-right: 10px; /* Adiciona um espaço entre a imagem e o texto */
    }

    a {
        color: #fff;
        text-decoration: none;
    }

    p {
        font-size: 10px;
        color: #800000;
        text-align: center;
    }
`;
