import styled from 'styled-components';

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 1000px;
    column-gap: 20px;
    row-gap: 30px;
`;

export const Title = styled.div`
    margin: 50px;
    text-align: center;
    font-size: 60px;
    font-weight: bold;
`;
