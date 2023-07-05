import styled from 'styled-components';

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;

  h2 {
    margin: 10px 0;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
`

export const LogoutBtn = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
`