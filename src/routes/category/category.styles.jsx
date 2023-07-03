import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;

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