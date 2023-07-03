import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Breadcrumbs = styled.ul`
    list-style: none;
    padding: 0;
`;

export const Crumb = styled.li`
    display: inline-block;

    &:last-of-type:after {
        content: "";
        padding: 0;
    }

    &:after {
        content: "${props => props.separator || "/"}";
        padding: 0 8px;
    }

    a {
        text-decoration: none;
        text-transform: capitalize;

        &:hover,
        &:active {
          text-decoration: underline;
        }
    }
`;


export const ProductCategoryLink = styled(Link)`
    font-size: 16px;
    color: #6E6E6E;
    text-transform: uppercase;
    letter-spacing: 0.65px;
    display: inline-block;
`;

export const ProductTitle = styled.h1`
    font-size: 32px;
    letter-spacing: 0.3px;
    margin-bottom: 0.75em;
`;

export const ProductPrice = styled.div`
    font-size: 24px;
    padding: 0 0 1em;
`;

export const ProductInfoImage = styled.div`
    img {
        max-width: 550px;
    }
`;

export const ProductInfo = styled.section`
    display: flex;
    padding: 2em 0;
`;

export const ProductInfoContent = styled.div`
    padding: 0 3em 4em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Counter = styled.div`
    font-size: 24px;
    letter-spacing: 4px;
    padding-top: 2em;
    padding-bottom: 1.5em;
`;

export const ProductDesc = styled.div`
    font-size: 18px;
    letter-spacing: 0.2px;
    line-height: 28px;
    color: #0c2d0c;
    padding-bottom: 1em;
`;

export const ProductAdditional = styled.div`

`;

export const ProductAdditionalTitle = styled.h3`
    font-size: 16px; 
    color: #201912;
`;

export const ProductAdditionalInfoList = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 80%;
`;

export const ProductAdditionalInfoListItem = styled.div`
    max-width: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5em 1.5em;
`;

export const ProductAdditionalImage = styled.img`
max-width: 60px;
`;

export const ProductAdditionalInfoTitle = styled.h4`
    font-size: 16px;
    text-align: center;
    color: #201912;
`;


