import styled from 'styled-components';

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
        &:hover,
        &:active {
          text-decoration: underline;
        }
    }
`;