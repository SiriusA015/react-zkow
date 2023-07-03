import styled from 'styled-components';

export const DirectoryListItem = styled.li`
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const DirectoryItemImage = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const DirectoryItemContent = styled.div`
  padding: .5em 1.5em .75em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;

  h2 {
    margin: 0 6px 0;
    color: #fff;
    text-transform: uppercase;
  }

  span {
    font-size: 14px;
    color: #fff;
    letter-spacing: 0.6px;
    text-decoration: underline;
    font-weight: bold;
    line-height: 22px;
  }
`;

export const DirectoryItemLink = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  &:hover {

    ${DirectoryItemImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${DirectoryItemContent} {
      opacity: 0.9;
    }
  }

`;