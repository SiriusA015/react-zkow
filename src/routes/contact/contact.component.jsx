import {
    ContactContainer, 
    ContactContainerColumns, 
    Address, 
    ContactContainerColumn,
    ContactContainerHorizontal,
    Email,
    PlantImage, Breadcrumbs, Crumb,
} from './contact.styles';

import Rosliny from '../../assets/v986-28.jpg'

const Contact = () => {
  return (
    <ContactContainer>
        <Breadcrumbs>
        <Crumb>
        <a href="/">Sklep</a>
        </Crumb>
        <Crumb>
        <a href="/kontakt">Kontakt</a>
        </Crumb>
    </Breadcrumbs>
        <ContactContainerColumns>
            <ContactContainerColumn>
                <h2>Napisz do nas</h2>
                <p>Doniczkowcy to miejsce dla każdego roślinomaniaka. Odwiedź nasz sklep z roślinami w Poznaniu i Krakowie lub zamów rośliny doniczkowe online z bezpieczną i szybką wysyłką kurierską.</p>

                <Email>sklep@doniczkowcy.pl</Email>

                <ContactContainerHorizontal>
                    <Address>
                        <h3>Sklep POZNAŃ</h3>
                        <p>ul. Słonecznikowa 14</p>
                        <p>45-880 Poznań</p>
                        <p>+48 546 236 626</p>
                    </Address>
                    <Address>
                        <h3>Sklep KRAKÓW</h3>
                        <p>ul. Fiołkowa 14</p>
                        <p>31-880 Kraków</p>
                        <p>+48 536 536 666</p>
                    </Address>
        
            </ContactContainerHorizontal>
        </ContactContainerColumn>

        <ContactContainerColumn>
            <PlantImage src={Rosliny}/>
        </ContactContainerColumn>
    </ContactContainerColumns>

        
    </ContactContainer>
  )
}

export default Contact