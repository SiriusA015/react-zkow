import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    // height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    max-height: 350px;
  }

  button {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    &:after {
      content: '+';
      text-align: right;
    }
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const ProductCartInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  margin-bottom: .35em;
`;

export const Price = styled.span`
  font-weight: bold;
`;