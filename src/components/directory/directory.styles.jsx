import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const DirectoryListItems = styled.ul`
  
`;

export const DirectoryTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0 0 6em;
  align-items: center;
`;

export const DirectoryLeft = styled.div`
  width: 50%;

  h1 {
    font-size: 56px;
    color: #4B6A48;
  }

  p {
    font-size: 30px;
    color: #565D56;
  }
`;

export const DirectoryRight = styled.div`
  width: 50%;
  display: flex;
`;