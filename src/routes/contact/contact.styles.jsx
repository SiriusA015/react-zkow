import styled from 'styled-components';


export const ContactContainer = styled.div`
  
`;

export const ContactContainerColumns = styled.div`
  display: flex;

  h2 {
    font-size: 44px;
    color: #4B6A48;
  }

  p {
    font-size: 24px;
    color: #565D56;
  }
`;

export const ContactContainerColumn = styled.div`
    padding-top: 1em;

    &:first-child {
        width: 60%;
    }
    &:last-child {
        width: 40%;
    }
`;

export const Address = styled.div`
  font-size: 18px;

  p {
    margin: 0.3em 0;
  }
`;


export const Email = styled.div`
  font-weight: bold;
  font-size: 26px;
  color: #5a3f22;
  margin: 1em 0;
`;

export const PlantImage = styled.img`
  max-height: 540px;
`;


export const ContactContainerHorizontal = styled.div`
  display: flex;
  padding-right: 50px;
  padding-top: 50px;
  justify-content: space-between;
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