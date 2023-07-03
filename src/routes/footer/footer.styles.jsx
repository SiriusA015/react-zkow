import styled from 'styled-components';

export const FooterContainer = styled.div`
    // display: flex;
    padding: 40px 0 0;
    width: 100%;
    margin-top: 100px;
    background-color: #493a2a;
`;

export const FooterWrapper = styled.div`
    max-width: 1290px;
    margin: 0 auto;
    width: 100%;
`;

export const FooterText = styled.p`
    max-width: 260px;
    color: #BFB89C;
`;

export const FooterLogo = styled.img`
    max-height: 50px;
    filter: sepia(1);
`;

export const FooterMenus = styled.div`
    display: flex;
`;

export const FooterMenuList = styled.ul`
    list-style-type: none;
    padding: 0 35px;
    flex-direction: column;
    display: flex;
`;

export const FooterMenuListItem = styled.li`
    line-height: 24px;
    a {
        color: #BFB89C;
        text-decoration: unset;
    }
`;

export const FooterColumns = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const FooterCopy = styled.div`
    background: #201912;
    color: #A18568;
    font-size: 16px;
    margin-top: 1em;
    padding: .1em 0;
    text-align: center;
`;