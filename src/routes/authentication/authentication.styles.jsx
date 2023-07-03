import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  width: 1290px;
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