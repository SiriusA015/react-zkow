import {
  FooterLogo,
  FooterContainer,
  FooterWrapper,
  FooterMenuList,
  FooterMenuListItem,
  FooterMenus,
  FooterText,
  FooterColumns,
  FooterCopy
} from './footer.styles';
import DoniczkowcyLogo from '../../assets/logo.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterColumns>
          <div>
            <FooterLogo src={DoniczkowcyLogo}/>
            <FooterText>Wprowadź do swojej przestrzeni rośliny i poczuj połączenie z naturą.</FooterText>
          </div>
        
        <FooterMenus>
          <FooterMenuList>
            <FooterMenuListItem><a href="/">Sklep</a></FooterMenuListItem>
            <FooterMenuListItem><a href="/">Kontakt</a></FooterMenuListItem>
          </FooterMenuList>
          <FooterMenuList>
            <FooterMenuListItem><a href="/sklep">Sklep</a></FooterMenuListItem>
            <FooterMenuListItem><a href="/mojekonto">Moje konto</a></FooterMenuListItem>
            <FooterMenuListItem><a href="/kasa">Koszyk</a></FooterMenuListItem>
          </FooterMenuList>
          <FooterMenuList>
            <FooterMenuListItem><a href="#">Instagram</a></FooterMenuListItem>
            <FooterMenuListItem><a href="#">Facebook</a></FooterMenuListItem>
            <FooterMenuListItem><a href="#">TikTok</a></FooterMenuListItem>
          </FooterMenuList>
        </FooterMenus>
        </FooterColumns>

        
        </FooterWrapper>
        
        <FooterCopy>
          <p>Copyright © 2023 black pixel | All Rights Reserved</p>
        </FooterCopy>
    </FooterContainer>
  )
}

export default Footer